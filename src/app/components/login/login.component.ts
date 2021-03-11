import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin = false
  hide = true;

  constructor(private router: Router, private loginservice: AuthenticationService) { }
  
  ngOnInit(): void {
  }
  
  login() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['sme-dashboard'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
