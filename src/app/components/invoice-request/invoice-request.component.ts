import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import {SelectionModel} from '@angular/cdk/collections';


const ELEMENT_DATA: any[] = [
 {
   Name: 'INV64320',
   Position: 'ISBGF5643',
   DateOfInvoice: '11/3/2021',
   Seller: 'SME1',
   Buyer: 'BUYER1',
   InvoiceAmount: '563489',
   NOfCalls: 'Active'
 },
 {
   Name: 'INV64320',
   Position: 'ISBGF5643',
   DateOfInvoice: '11/3/2021',
   Seller: 'SME1',
   Buyer: 'BUYER1',
   InvoiceAmount: '563489',
   NOfCalls: 'Active'
 },
 {
   Name: 'INV64320',
   Position: 'ISBGF5643',
   DateOfInvoice: '11/3/2021',
   Seller: 'SME1',
   Buyer: 'BUYER1',
   InvoiceAmount: '563489',
   NOfCalls: 'Active'
 },
];

const DATA_TWO: any[] = [
  {
    BidID: 'BID03456',
    FinOffAmt: 102700,
    Ccy: 'SGD',
    FxRateDiff: '1.35',
    Margin: 10,
    DiscRate: 3,
    DiscAmt: 760,
    NetAmtPay: 101940,
    DueDate: '90D/10Mar21',
    OffExpPrd: '4 PM',
    Status: 'A'
  }
];

@Component({
  selector: 'app-invoice-request',
  templateUrl: './invoice-request.component.html',
  styleUrls: ['./invoice-request.component.scss']
})
export class InvoiceRequestComponent implements OnInit {
  tcode : string;
  
  invoicedata : invoiceData = {
    id :"",
    RefNo :"",
    invoiceId :"",
    invoiceDate : "",
    Buyer :"",
    InvoiceAmount :""
  };
  
  hide = true;

  dataSourceTwo = new MatTableDataSource(DATA_TWO); //data
  displayedColumnsTwo: string[] = [
    'ID',
    'DescGoods',
    'IdNo',
    'DateOfInvoice',
    'Quantity',
    'Rate',
    'Amt',
    'DiscAmt',
    'NetAmtPay',
    'TaxRate',
    'TaxAmount',
    'Total',
      ];
  
  // addGoods=new MatTableDataSource(this.ELEMENT_DATA1); 
  // displayedColumnsn: string[] = ['StatusCode', 'DateTime', 'IdNo', 'Quantity','Rate','Amount','DiscAmount','NetAmount','TaxRate','TaxAmount', 'NOfCalls'];

  dataSource = new MatTableDataSource(INVOICE_ARRAY); 

  displayedColumns: string[] = ['select', 'StatusCode', 'DateTime', 'DateOfInvoice', 'Seller','Buyer','InvoiceAmount', 'NOfCalls'];
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
  constructor(public router: Router,private authenticationService: AuthenticationService) {
    const users: UserData[] = [];
      for (let i = 1; i <=0; i++) { 
        users.push(this.createNewUser(i)); 
      }
      this.dataSourceTwo = new MatTableDataSource(users);
  }
 
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
 
  selection = new SelectionModel(true, []);

  
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
     const numSelected = this.selection.selected.length;
     const numRows = this.dataSource.data.length;
     return numSelected === numRows;
   }
 
   /** Selects all rows if they are not all selected; otherwise clear selection. */
   masterToggle() {
     this.isAllSelected() ?
         this.selection.clear() :
         this.dataSource.data.forEach(row => this.selection.select(row));
   }
 
   logSelection() {
     this.selection.selected.forEach(s => console.log(s.name));
   }
  onSubmit() {}

  addNew(){
    INVOICE_ARRAY.push(this.invoicedata)
    this.dataSource = new MatTableDataSource(INVOICE_ARRAY);
    this.invoicedata = {
     id :"",
     RefNo :"",
     invoiceId :"",
     invoiceDate : "",
     Buyer :"",
     InvoiceAmount :""
   }
 }

  addRow() {
    this.dataSourceTwo.data.push(this.createNewUser(this.dataSourceTwo.data.length-5));
    this.dataSourceTwo.filter = "";
    
  }
  createNewUser(id: number): UserData {
    const DateTime =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '';

    return {
      StatusCode: "",
      DateTime: DateTime,
    //  Quantity: Math.round(Math.random() * 100).toString(),
      Rate: RATE[Math.round(Math.random() * (RATE.length - 1))]
    };
  }
}

const RATE = ['', '', '', '', '', '', '',
 ];
const NAMES = ['', '', '', '', '', '',];
export interface UserData {
  StatusCode: String;
  DateTime: String;
  //IdNo: String;
  //Quantity: String;
  Rate: String;
  // Amount: any;
  // DiscAmount: any;
  // NetAmount: any;
  // TaxRate: any;
  // TaxAmount:any;
  // NOfCalls: any;
}

export interface UserData {
  StatusCode: String;
  DateTime: String;
  //IdNo: String;
  //Quantity: String;
  Rate: String;
  // Amount: any;
  // DiscAmount: any;
  // NetAmount: any;
  // TaxRate: any;
  // TaxAmount:any;
  // NOfCalls: any;
}

export interface invoiceData{
  id: String;
  RefNo: String;
  invoiceId : String;
  invoiceDate : String ;
  Buyer : String;
  InvoiceAmount : String;
  
  }
  
  const INVOICE_ARRAY:invoiceData[]=[];