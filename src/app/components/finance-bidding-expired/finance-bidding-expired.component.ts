// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-finance-bidding-expired',
//   templateUrl: './finance-bidding-expired.component.html',
//   styleUrls: ['./finance-bidding-expired.component.scss']
// })
// export class FinanceBiddingExpiredComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit, ElementRef, HostListener, ViewChild,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import {InvoiceDetailsExpiredComponent} from './invoice-details-expired/invoice-details-expired.component'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {FinanceBiddingExpiryServices} from './finance-bidding-expiry-service' 
import {FinanceBiddingService} from '../../service/finance_bidding/finance-bidding.service';
import { FINANCIERDASHBOARDCONSTANTS} from '../../shared/constants/constants';

const ELEMENT_DATA: any[] = [
  {
    IccTraComRef: 'INV098765',
    InvId: 'VGRE4567',
    SellerName: 'Midweat Corp',
    BuyerName: 'AramCo',
    SellerRating: '7/10',
    BuyerRating: '9/10',
    InvDate: '01/03/2021',
    InvAmt: '84576 USD'
  }
];

 

@Component({
   selector: 'app-finance-bidding-expired',
  templateUrl: './finance-bidding-expired.component.html',
  styleUrls: ['./finance-bidding-expired.component.scss']
})
export class FinanceBiddingExpiredComponent implements OnInit {
  @Input() InvoiceDetailsExpiredComponent: InvoiceDetailsExpiredComponent;
  ELEMENT_DATA1: any[] ;
  constructor(public router: Router, public authenticationService:AuthenticationService,
    private modalService: BsModalService,private FinanceBiddingExpiryServices : FinanceBiddingExpiryServices,private FinanceBiddingService:FinanceBiddingService) { }

  dataSource ;//data
  displayedColumns: string[] = [
    // 'billNo',
    'id',
    // 'invoiceId',
    'invoiceAmt',
    'baseCcyNetAmtPayable',
    'offerExpDateTime',
    'action'
    // 'invDate',
    // 'offerExpires'
    // 'invAmt'
    // 'SellerRating',
    // 'BuyerRating',
    // 'InvDate',
    // 'InvAmt'
  ];

  // displayedColumns: string[] = ['refNo', 'invoiceId', 'invoiceAmt','invDate','invDueDate', 'buyer', 'financiercount'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  modalRef: BsModalRef;
  

  ngOnInit() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    }

    let obj = {
      finId : localStorage.getItem("userId")
    }

    this.FinanceBiddingExpiryServices.getInvoiceDetails(obj).subscribe(resp => {
      
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp);
     
     
    })

    

  }
  mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;
  isOpen = '';
  bidpanelOpenState = false;
  id = ""


  @ViewChild('accountList', { read: ElementRef })
  public accountList: ElementRef<any>;
  dashboardTooltip=FINANCIERDASHBOARDCONSTANTS;
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    } else {
      this.mobileScreen = false;
    }
  }

  

  public scrollRight(): void {
    this.start = false;
    const scrollWidth =
      this.accountList.nativeElement.scrollWidth -
      this.accountList.nativeElement.clientWidth;

    if (scrollWidth === Math.round(this.accountList.nativeElement.scrollLeft)) {
      this.end = true;
    } else {
      this.accountList.nativeElement.scrollTo({
        left: this.accountList.nativeElement.scrollLeft + 150,
        behavior: 'smooth',
      });
    }
  }

  public scrollLeft(): void {
    this.end = false;
    if (this.accountList.nativeElement.scrollLeft === 0) {
      this.start = true;
    }
    this.accountList.nativeElement.scrollTo({
      left: this.accountList.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }

  isOpenHandle(isTrue){
    this.isOpen = isTrue === 'inActive' ? 'active' : 'inActive';
    }
    navigateFinanceBidding(){
      this.router.navigateByUrl('/finance-bidding');
  }
  logout(){
  this.authenticationService.logout()
  }
  goHome(){
    this.router.navigateByUrl('/financier-dashboard');
  }

  navigateInvoiceDetails(id){
    this.router.navigateByUrl('/finance-bidding-expired/'+id);
  }
  openModal(event, template,id) {
    event.preventDefault();
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    this.id = id
  }

}

