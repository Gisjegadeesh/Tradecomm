import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class SmeFinancierForBiddingServices {
  public baseUrl: string;
  constructor(private apiService: ApiService) { this.baseUrl = "http://2aefcdf3e17f.ngrok.io/ "; }
  
  getFinanceForBiddingLists(){
    return this.apiService.get('invoice-request/allInvoicesBySmeId/'+localStorage.getItem("userId"));
  }
  getInvoiceRequestLists(id){
    // let stringifyObj = JSON.stringify( { invoiceDetails : { id : 1} })
    // debugger;
    return this.apiService.get('invoice-request/getInvoiceData/'+id);
  }
  
}