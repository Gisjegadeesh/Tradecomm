import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from "../../service/api.service"
import { environment } from '../../../environments/environment';
@Injectable()
export class FinancierDashboardServices {
  constructor(private apiService: ApiService) { }
  getfinDashDetails(){
    return this.apiService.generalServiceget('https://jsonplaceholder.typicode.com/posts',);
  }
}