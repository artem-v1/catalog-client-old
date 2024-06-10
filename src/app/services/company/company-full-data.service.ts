import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { CompanyDTO } from 'src/app/dtos/company-dtos/company.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyFullDataService {
  private baseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient, 
    ) {}

  getCompanyDTO(id: any): Observable<CompanyDTO> {
    return this.http.get<CompanyDTO>(`${this.baseUrl}/api/company/all-data/${id}`);
  }
}
