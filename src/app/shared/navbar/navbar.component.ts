import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentHeaderName = "";
  userName
  constructor(public router: Router, public authenticationService:AuthenticationService,private _location: Location) { }
  ngOnInit(): void {
    this.userName = localStorage.getItem("userId")
    const result = this.router.config && this.router.config.filter(item => '/'+item.path == this.router.url);
    this.currentHeaderName = result && result[0] && result[0].data && result[0].data.HeaderName
  }
  ngDoCheck(){
    const result = this.router.config && this.router.config.filter(item => '/'+item.path == this.router.url);
    this.currentHeaderName = result && result[0] && result[0].data && result[0].data.HeaderName
  }
  goHome(){
    this.router.navigateByUrl('/financier-dashboard');
  }

  logout(){
    this.authenticationService.logout()
    }

    backNavigation() {
      this._location.back();
    }
}
