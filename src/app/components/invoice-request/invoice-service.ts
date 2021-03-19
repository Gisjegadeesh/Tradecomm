import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class InvoiceRequestServices {
  public baseUrl: string;
  constructor(private apiService: ApiService) { this.baseUrl = "http://localhost:8080/ "; }
  getInvDetailsLists(){
    return this.apiService.get('invoice-request/initiatedInvoicesBySmeId/'+localStorage.getItem("userId"));
  }

  getInvDetailsLists_ForFinanceBidding(id){
    return this.apiService.get('invoice-request/getInvoiceData/'+id);
  }


  invoiceRequestSave(body: any) {
    return this.apiService.post(environment.api_url+'invoice-request', body);
  }
  
  authoriseInvoice(body: any) {
    return this.apiService.post(environment.api_url+'invoice-request/approve-invoices', body);
  }
  finbidSave(body: any) {
    return this.apiService.post(environment.serviePath_1+'bidding-details', body);
  }


}