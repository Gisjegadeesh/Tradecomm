import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanceBiddingService {

  public baseUrl: string;
  constructor(private apiService: ApiService) { this.baseUrl = "http://localhost:8080/"; }
  // private custUrl='http://da7cf0f44fc2.ngrok.io/api/v1/bidding/';
  // private baseUrl='http://localhost:8080/';
  // constructor(private http: HttpClient,private apiService: ApiService) {
  //   this.baseUrl = " http://localhost:8080/";
  //  }
  getInvoiceDetails() {
    return this.apiService.get('invoice-request/initiatedInvoices');
  }
}
