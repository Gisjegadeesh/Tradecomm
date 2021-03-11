import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  country: string;
  uen: string;
  invalidLogin = false
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    if (this.country.valueOf() !== '' || this.uen.valueOf() !== '') {
      this.router.navigate(['sme-onboarding'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  // onSubmit() {
  //   this.router.navigate(['sme-onboarding']);
  //   alert(this.selectedRole);
  //   console.log(this.selectedRole)  //Will give you the role selected;
  //   if (this.selectedRole == "SME") {
  //     this.router.navigate(['sme-onboarding'])
  //   }
  //   else if (this.selectedRole == "ICC User") {
  //     this.router.navigate(['financier-onboarding'])
  //   }
  // }

}
