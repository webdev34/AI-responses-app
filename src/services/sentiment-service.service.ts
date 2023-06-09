import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface SentimentResult {
  sentiment: string;
}
@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }

  public getById(urlSection:string , id: string | number): Observable<any> {
    const url = `${this.apiUrl}/${urlSection}?id=`+id;
    return this.http.get(url);
  }

  public post(urlSection: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${urlSection}`;
    return this.http.post<SentimentResult>(url, data);
  }

  public delete(endpoint: string, id: string| number): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.delete(url);
  }
}
