import { Component, OnInit, ElementRef, HostListener, ViewChild,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import {InvoiceDetailsComponent} from './invoice-details/invoice-details.component'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {FinanceRequestServices} from './finance-service'

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
  selector: 'app-finance-bidding',
  templateUrl: './finance-bidding.component.html',
  styleUrls: ['./finance-bidding.component.scss']
})
export class FinanceBiddingComponent implements OnInit {
  @Input() InvoiceDetailsComponent: InvoiceDetailsComponent;

  constructor(public router: Router, public authenticationService:AuthenticationService,
    private modalService: BsModalService,private FinanceRequestServices : FinanceRequestServices) { }

  dataSource = new MatTableDataSource(ELEMENT_DATA); //data
  displayedColumns: string[] = [
    'IccTraComRef',
    'InvId',
    'SellerName',
    'BuyerName',
    'SellerRating',
    'BuyerRating',
    'InvDate',
    'InvAmt'
  ];
  modalRef: BsModalRef;


  ngOnInit() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    }

    this.FinanceRequestServices.getFinancierBidding({}).subscribe(resp => {
      
    })

  }
  mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;
  isOpen = '';

  @ViewChild('accountList', { read: ElementRef })
  public accountList: ElementRef<any>;

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

  openModal(event, template) {
    event.preventDefault();
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    
  }

}
