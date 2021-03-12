import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-invoice-request',
  templateUrl: './invoice-request.component.html',
  styleUrls: ['./invoice-request.component.scss']
})
export class InvoiceRequestComponent implements OnInit {
  tcode: string;
   ELEMENT_DATA: any[] = [
    {
      Name: 'INV64320',
      Position: 'ISBGF5643',
      DateOfInvoice: '11/3/2021',
      Seller: 'SME1',
      Buyer: 'BUYER1',
      InvoiceAmount: '563489',
      NOfCalls: 'Acive'
    },
    {
      Name: 'INV64320',
      Position: 'ISBGF5643',
      DateOfInvoice: '11/3/2021',
      Seller: 'SME1',
      Buyer: 'BUYER1',
      InvoiceAmount: '563489',
      NOfCalls: 'Acive'
    },
    {
      Name: 'INV64320',
      Position: 'ISBGF5643',
      DateOfInvoice: '11/3/2021',
      Seller: 'SME1',
      Buyer: 'BUYER1',
      InvoiceAmount: '563489',
      NOfCalls: 'Acive'
    },
  ];

  ELEMENT_DATA1: any[] = [
    {
      Name: '',
      Position: '',
      DateOfInvoice: '',
      Seller: '',
      Buyer: '',
      InvoiceAmount: '',
      NOfCalls: ''
    },
    {
      Name: '',
      Position: '',
      DateOfInvoice: '',
      Seller: '',
      Buyer: '',
      InvoiceAmount: '',
      NOfCalls: ''
    },
    {
      Name: '',
      Position: '',
      DateOfInvoice: '',
      Seller: '',
      Buyer: '',
      InvoiceAmount: '',
      NOfCalls: ''
    },
];
title = 'New Invoice';
hide = true;
  addGoods = new MatTableDataSource(this.ELEMENT_DATA1);
  displayedColumnsn: string[] = ['StatusCode', 'DateTime', 'IdNo', 'Quantity', 'Rate', 'Amount', 'DiscAmount',
  'NetAmount', 'TaxRate', 'TaxAmount', 'NOfCalls'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  displayedColumns: string[] = ['StatusCode', 'DateTime', 'DateOfInvoice', 'Seller', 'Buyer', 'InvoiceAmount', 'NOfCalls'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
    // tslint:disable-next-line: typedef
  isOpen = ""
  mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;

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
  constructor(public router: Router,private authenticationService: AuthenticationService) { }
 
  ngOnInit() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
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
    this.isOpen = isTrue == "inActive" ? "active" : "inActive"
    }

  openModal(event, template) {
      event.preventDefault();
  }
  goHome(){
    this.router.navigateByUrl('/sme-dashboard');
  }
  logout(){
    this.authenticationService.logout()
    }
  // tslint:disable-next-line: typedef
  onSubmit() {}
  
}
