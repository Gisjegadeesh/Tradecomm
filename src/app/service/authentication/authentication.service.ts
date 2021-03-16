import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }

  // tslint:disable-next-line: typedef
  loginAsSme(username: string, password: string) {
    if (username === 'smeuser1' && password === '123456'){
      return true;
    }
    else{
      return false;
    }
  }

  // tslint:disable-next-line: typedef
  loginAsFinancier(username: string, password: string) {
    if (username === 'financieruser1' && password === '123456'){
      return true;
    }
    else{
      return false;
    }
  }
  logout(){
    this.router.navigateByUrl('/');
  }
  loginAsICCUser(username: string, password: string) {
    if (username === 'iccuser1' && password === '123456'){
      return true;
    }
    else{
      return false;
    }
  }
}
