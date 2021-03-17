import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, public authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigateByUrl('/financier-dashboard');
  }

  logout(){
    this.authenticationService.logout()
    }

}
