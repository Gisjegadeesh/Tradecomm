import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class SmeFinancierForBiddingServices {
  public baseUrl: string;
  constructor(private apiService: ApiService) { this.baseUrl = "http://2aefcdf3e17f.ngrok.io/ "; }
  
  getFinanceForBiddingLists(){
    return this.apiService.tempGet('http://4c4f616f6fd0.ngrok.io/invoice-request/allInvoicesBySmeId/'+localStorage.getItem("userId"));
  }
  getInvoiceRequestLists(id){
    // let stringifyObj = JSON.stringify( { invoiceDetails : { id : 1} })
    // debugger;
    return this.apiService.tempGet('http://4c4f616f6fd0.ngrok.io/invoice-request/getInvoiceData/'+id); 
  }

  getFinanceBiddingLists(id){
    // let stringifyObj = JSON.stringify( { invoiceDetails : { id : 1} })
    // debugger;
    // bidding-details/getBiddingDetails/{invoiceId}    http://950f76a46a8b.ngrok.io/api/v1
    return this.apiService.tempGet('http://5928248bdabb.ngrok.io/api/v1/bidding-details/getBiddingDetails/'+id);
  }
  
}