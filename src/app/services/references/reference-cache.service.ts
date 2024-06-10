import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReferenceInterface } from 'src/app/dtos/company-dtos/constant-dtos/reference.inteface';

@Injectable({
  providedIn: 'root'
})
export class ReferenceCacheService {

  private readonly CACHE_KEY = 'referenceCache';
  private readonly CACHE_EXPIRATION_KEY = 'referenceCacheExpiration';

  private cacheSubject = new BehaviorSubject<ReferenceInterface[] | null>(null);
  private isLoading = false;

  constructor(private http: HttpClient) { }

  private fetchCacheFromBackend(): Observable<ReferenceInterface[]> {
    return this.http.get<ReferenceInterface[]>(`${environment.apiBaseUrl}/api/reference/all`).pipe(
      tap(data => {
        localStorage.setItem(this.CACHE_KEY, JSON.stringify(data));
        const expirationTime = new Date();
        expirationTime.setMinutes(expirationTime.getMinutes() + 30); // life time 30 min
        localStorage.setItem(this.CACHE_EXPIRATION_KEY, expirationTime.toString());
        console.log('Cache updated and saved to localStorage.');
        this.cacheSubject.next(data);
      }),
      catchError(error => {
        console.error('Error fetching cache from backend:', error);
        this.cacheSubject.next([]); // return empty array if error
        return of([]);
      })
    );
  }

  loadCache(): Observable<ReferenceInterface[]> {
    if (!this.isLoading && this.cacheSubject.getValue() === null) {
      const cachedData = localStorage.getItem(this.CACHE_KEY);
      const expiration = localStorage.getItem(this.CACHE_EXPIRATION_KEY);

      if (cachedData && expiration && new Date(expiration) > new Date()) {
        console.log('загрузка из локального сторедж');
        this.cacheSubject.next(JSON.parse(cachedData));
      } else {
        console.log('Fetching cache from backend...');
        this.isLoading = true;
        this.fetchCacheFromBackend().subscribe(() => this.isLoading = false);
      }
    }
    return this.cacheSubject.asObservable().pipe(
      switchMap(cache => {
        if (cache) {
          return of(cache);
        } else {
          return this.fetchCacheFromBackend();
        }
      })
    );
  }

  getCharValueByScopeAndKey(scope: string, key: string): Observable<string | undefined> {
    return this.loadCache().pipe(
      switchMap(cache => {
        const item = cache.find(refer => refer.scope === scope && refer.key === key);
        return of(item?.value);
      })
    );
  }

  getCharCategoryValueByScopeAndKey(scope: string, key: string): Observable<any> {
    return this.loadCache().pipe(
      switchMap(cache => {
        const item = cache.find(refer => refer.scope === scope && refer.key === key);
        return of(item?.value);
      })
    );
  }
}

