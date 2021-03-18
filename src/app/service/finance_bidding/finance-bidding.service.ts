import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanceBiddingService {

  public baseUrl: string;
  constructor(private apiService: ApiService) { this.baseUrl = "http://710d850294bb.ngrok.io/"; }
  getInvoiceDetails() {
    return this.apiService.get('invoice-request/initiated-invoices');
  }
}
