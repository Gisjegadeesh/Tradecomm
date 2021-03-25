import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class SmeDashboardServices {
  constructor(private apiService: ApiService) { }
  getFinForBid(){
    return this.apiService.generalServiceget(environment.serviePath_1+'invoice-request/getSumOfOpenFinBidding/'+localStorage.getItem("userId"));
  }
  getFundingBids(){
    return this.apiService.generalServiceget(environment.serviePath_2+'api/v1/invoice-request/getSumOfIntiatedBidAmt/'+localStorage.getItem("userId"));
  }
  getFunded(){
    return this.apiService.generalServiceget(environment.serviePath_2+'api/v1/invoice-request/getSumOfFinancingDue/'+localStorage.getItem("userId"));
  }
  getFinDueTdy(){
    return this.apiService.generalServiceget(environment.dboardServerPath4+'getFinDueTdy');
  }
  getFinPastDue(){
    return this.apiService.generalServiceget(environment.dboardServerPath5+'getFinPastDue');
  }
}