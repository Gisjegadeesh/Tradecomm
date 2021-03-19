import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Financier } from '../../model/financier-bidding/financier';
import { ApiService } from "../../service/api.service";

@Injectable()
export class FinancierService {

  private custUrl='http://localhost:8081/api/v1/bidding/';
  private baseUrl='http://localhost:8080/';
  constructor(private http: HttpClient,private apiService: ApiService) {
    this.baseUrl = " http://localhost:8080/";
   }
  
  getUser(): Observable<Financier[]> {
    return this.http.get<Financier[]>(this.custUrl);
  }
  
  getInvoiceDetails() {
    return this.apiService.get('invoice-request/initiatedInvoices');
  }
}
