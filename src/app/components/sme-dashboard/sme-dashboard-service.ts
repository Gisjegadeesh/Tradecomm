import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class SmeDashboardServices {
  constructor(private apiService: ApiService) { }
  getFinBidRecvd(){
    return this.apiService.generalServiceget(environment.dboardServerPath1+'getFinBidRecvd');
  }
  getFinForBid(){
    return this.apiService.generalServiceget(environment.getSumOfOpenFinBidding+'invoice-request/getSumOfOpenFinBidding/'+localStorage.getItem("userId"));
  }
  getAcceptdFin(){
    return this.apiService.generalServiceget(environment.dboardServerPath3+'getAcceptdFin');
  }
  getFinDueTdy(){
    return this.apiService.generalServiceget(environment.dboardServerPath4+'getFinDueTdy');
  }
  getFinPastDue(){
    return this.apiService.generalServiceget(environment.dboardServerPath5+'getFinPastDue');
  }
}