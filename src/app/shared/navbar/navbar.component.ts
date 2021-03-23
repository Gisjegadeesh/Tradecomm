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
  homePath = "";

  constructor(public router: Router, public authenticationService:AuthenticationService,private _location: Location) { }
  ngOnInit(): void {
    this.userName = localStorage.getItem("userId")
    const result = this.router.config && this.router.config.filter(item => '/'+item.path == this.router.url);
    this.currentHeaderName = result && result[0] && result[0].data && result[0].data.HeaderName
  }
  ngDoCheck(){
    const result = this.router.config && this.router.config.filter(item => '/'+item.path == this.router.url);
    this.currentHeaderName = result && result[0] && result[0].data && result[0].data.HeaderName
    this.homePath = result && result[0] && result[0].data && result[0].data.homePath
    this.currentHeaderName = this.router.url.includes('financier-onboarding') && (this.router.url.includes('edit') || this.router.url.includes('view')) ? 
    'Financier Onboarding' : result && result[0] && result[0].data && result[0].data.HeaderName
  }
  goHome(){
    this.router.navigateByUrl(this.homePath);
  }

  logout(){
    this.authenticationService.logout()
    }

    backNavigation() {
      this._location.back();
    }
}
