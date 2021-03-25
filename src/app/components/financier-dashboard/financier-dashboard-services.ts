import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class FinancierDashboardServices {
  constructor(private apiService: ApiService) { }
  getOpenForOffer(){
    return this.apiService.generalServiceget(environment.serviePath_2+'api/v1/financing-details/openForOffer/'+localStorage.getItem("userId"));
  }
  getbidsToBeAccepted(){
    return this.apiService.generalServiceget(environment.serviePath_2+'api/v1/financing-details/bidsToBeAccepted/'+localStorage.getItem("userId"));
  }
}