import { Component,EventEmitter } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'TradeComm';
  isOpen = ""
  showSidebar: boolean = false;
  showNavbar: boolean = false;
  showFooter: boolean = false;

  constructor(private router: Router) {
  }

  emitIsOpen(value){
    this.isOpen = value
  }

  ngOnInit() {
    this.check();
  }

  ngDoCheck() {
    this.check();
  }

  check() {
    if ((this.router.url == '/') || (this.router.url == '/login') || (this.router.url == '/signup')) {
      this.showSidebar = false;
      this.showNavbar = false;
      this.showFooter = false;
    } else {
      this.showSidebar = true;
      this.showNavbar = true;
      this.showFooter = true;
    }
  }
}


