import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }

  // tslint:disable-next-line: typedef
  authenticate(username, password) {
    if (username === 'iccuser1' && password === '123456'){
      return true;
    }
    if (username === 'smeuser1' && password === '123456'){
      return true;
    }
    else{
      return false;
    }
  }
  logout(){
    this.router.navigateByUrl('/');
  }
}
