import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class SmeDashboardServices {
  constructor(private apiService: ApiService) { }
  getFinBidRecvd(){
    return this.apiService.dashBoardsServiceget(environment.dboardServerPath1+'getFinBidRecvd');
  }
  getFinForBid(){
    return this.apiService.dashBoardsServiceget(environment.dboardServerPath2+'getFinForBid');
  }
  getAcceptdFin(){
    return this.apiService.dashBoardsServiceget(environment.dboardServerPath3+'getAcceptdFin');
  }
  getFinDueTdy(){
    return this.apiService.dashBoardsServiceget(environment.dboardServerPath4+'getFinDueTdy');
  }
  getFinPastDue(){
    return this.apiService.dashBoardsServiceget(environment.dboardServerPath5+'getFinPastDue');
  }
}