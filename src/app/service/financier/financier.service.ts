import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Financier } from '../../model/financier-bidding/financier';


@Injectable()
export class FinancierService {

  private custUrl='http://localhost:8080/api/v1/financier/';
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<Financier[]> {
    return this.http.get<Financier[]>(this.custUrl);
  }
  
}
