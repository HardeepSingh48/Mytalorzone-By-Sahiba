import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(endpoint: string): Observable<any> {
    console.log(`Making GET request to: ${this.apiUrl}/${endpoint}`);
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  post(endpoint: string, data: any): Observable<any> {
    console.log(`Making POST request to: ${this.apiUrl}/${endpoint}`);
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }

  put(endpoint: string, data: any): Observable<any> {
    console.log(`Making PUT request to: ${this.apiUrl}/${endpoint}`);
    return this.http.put(`${this.apiUrl}/${endpoint}`, data);
  }

  delete(endpoint: string): Observable<any> {
    console.log(`Making DELETE request to: ${this.apiUrl}/${endpoint}`);
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
}
