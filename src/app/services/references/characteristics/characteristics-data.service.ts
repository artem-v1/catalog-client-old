import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsDataService {

  constructor(private http: HttpClient) { }

  getCharacteristics(): Observable<any> {

    return this.http.get('assets/data/references/reference-char-data.json');
  }

  getCategories(): Observable<any> {
    return this.http.get('assets/data/references/reference-category-data.json');
  }
}
