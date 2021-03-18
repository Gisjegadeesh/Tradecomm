import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class InvoiceRequestServices {
  public baseUrl: string;
  constructor(private apiService: ApiService) { this.baseUrl = "http://2aefcdf3e17f.ngrok.io/ "; }
  invoiceRequestSave(body: any) {
    return this.apiService.post('invoice-request', body);
  }
  getInvDetailsLists(){
    return this.apiService.get('invoice-request/initiated-invoices');
  }
  authoriseInvoice(body: any) {
    return this.apiService.post('invoice-request/approve-invoices', body);
  }
  finbidSave(body: any) {
    return this.apiService.post(environment.serviePath_1+'bidding-details', body);
  }
  
}