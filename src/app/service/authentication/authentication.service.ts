import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

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
}
