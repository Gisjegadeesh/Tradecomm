import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../../model/customer';
// import { Observable } from 'rxjs/Observable';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CustomerService {

  private custUrl: string;

  constructor(private http: HttpClient) {
    this.custUrl = 'http://localhost:8080/financier-onboarding';
  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.custUrl, customer);
  }
  
}
