import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDialogService } from '../../../service/modal-dialog.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatTableDataSource } from '@angular/material/table';
import {ThemePalette} from '@angular/material/core';
import { AuthenticationService } from '../../../service/authentication/authentication.service';
import { Financier } from '../../../model/financier-bidding/financier';
import { FinancierService } from '../../../service/financier/financier.service';
import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { SMEDASHBOARDCONSTANTS } from '../../../shared/constants/constants';
import { SmeBiddingServices } from '../sme-bidding-services';
import {INVOICEDETAILSCONSTANTS} from '../../../shared/constants/constants';
import * as _ from 'lodash';

const ELEMENT_DATA: any[] = [
  {
    Name: '',
    Position: '',
    Address: '',
    TelephoneNo: '',
    Email: ''
  },
  {
    Name: '',
    Position: '',
    Address: '',
    TelephoneNo: '',
    Email: ''
  },
];
const DATA_ONE: any[] = [
  {
    SNo: 1,
    DescGoods: 'Steel Rod',
    IdNo: 'a456',
    Qty: '100t',
    Rate: '678.0',
    Amt: 67800,
    DiscAmt: '-',
    NetAmt: 67800,
    TaxRate: 2,
    TaxAmt: 1356,
    Total: 63156
  },
  {
    SNo: 2,
    DescGoods: 'Nuts',
    IdNo: 'D435',
    Qty: '25t',
    Rate: '876.0',
    Amt: 21900,
    DiscAmt: 900,
    NetAmt: 21000,
    TaxRate: 2,
    TaxAmt: 420,
    Total: 21420
  }
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
    Status: 'A',
  },
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
const DATA_INV_DETAILS: any[] = [
  {
    InvoiceDate: "13/12/2025",
    InvoiceID: 'SGD01',
    Buyer: "Jega",
    Amount: 300,
    Seller:'jega'
  }
];
@Component({
  selector: 'app-sme-bidding',
  templateUrl: './sme-bidding-details.component.html',
  styleUrls: ['./sme-bidding-details.component.scss']  
})

export class SmeBiddingDetailsComponent implements OnInit {

  displayedColumns: string[] = ['refNo', 'invoiceId', 'invoiceAmt','invDate','invDueDate', 'buyer', 'financiercount'];
  tabledataSource = new MatTableDataSource(ELEMENT_DATA);

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','position1','name1'];
    isOpen = ""
    mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;
  modalRef: BsModalRef;
  color: ThemePalette = 'warn';
  ischecked = "true"
  detailsTooltip=INVOICEDETAILSCONSTANTS
  bidDetails
  @ViewChild('accountList', { read: ElementRef })
  public accountList: ElementRef<any>;
  id: any;
  smeDetails: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    } else {
      this.mobileScreen = false;
    }
  }
  panelOpenState = false;
  financierTooltip=SMEDASHBOARDCONSTANTS;
  
  constructor(private activatedRoute: ActivatedRoute,public router: Router,private modalService: BsModalService,private modalDialogService:ModalDialogService,private authenticationService: AuthenticationService
    ,private financierService: FinancierService,private smeBiddingServices : SmeBiddingServices) { }
  dataSourceOne = new MatTableDataSource(DATA_ONE); //data
  dataSourceTwo; //data
  dataBIDDetails;
  dataSourceInvoiceDetails = new MatTableDataSource(DATA_INV_DETAILS); //data

  displayedColumnsOne: string[] = ['descGoods', 'dateOfInvoice', 'quantity', 'taxRate','amt','rate','totalccy','taxAmountccy','total'];
  displayedsmeOne: string[] = [
    'Funding CCY',
    'FX rate Base CCY',
    'Base CCY Amount',
    'Fundable percentage',
    // 'Funding Amount / Repay Amount (Base CCY)',
    'Funding Amount / Repay Amount (Inv CCY)',
    'Repayment Date'
  ];
  displayedsmeTwo: string[] = [
    'Inv Discount  Rate',
    'Disc Amt (Base CCY)',
    'Disc Amt (Inv CCY)',
    'Annual Yield (Basis a360)',
    'Net Amt payable (Base CCY)',
    'Net Amt payable (Inv CCY)',
    'Offer Exp period',
    'Off Exp date /time'
  ];
  displayedColumnsTwo: string[] = [
    // 'Funding CCY',
    'Bid ID',
    'Financier Name',
    'FX rate Base CCY',
    'Base CCY Amount',
    'Fundable percentage',
    'Funding Amount',
    // 'Funding Amount / Repay Amount (Inv CCY)',
    'Repayment Date',
    // 'Inv Discount  Rate',
    // 'Disc Amt (Base CCY)',
    // 'Disc Amt (Inv CCY)',
    'Annual Yield (Basis a360)',
    'Net Amt payable (Base CCY)',
    // 'Net Amt payable (Inv CCY)',
    // 'Offer Exp period',
    'Off Exp date /time',
    // 'Status'
  ];
  displayedInvDetailsColumns: string[] = [
    'InvoiceID',
    'InvoiceDate',
    'smeId',
    'Buyer',
    'Amount',
  ];
  
  goods_array : object [];
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    }
    this.smeBiddingServices.getBiddingDetails(this.id).subscribe(resp => {
      console.log(resp,"resp")
      if(resp){
        this.smeBiddingServices.getInvoiceGoodsDetails(resp[0].id).subscribe(resp => {
          this.dataSourceOne = new MatTableDataSource(resp.goodsDetails)
          this.dataSourceInvoiceDetails = new MatTableDataSource([
            { 'invId': resp.invId, 'invDate': resp.invDate, 'buyerName': resp.buyerName, 'invAmt': resp.invAmt, 'status': status ,'smeId' : resp.smeId}
          ]);
         })
        this.dataSourceTwo = new MatTableDataSource(resp);
       this.bidDetails = resp;
      }
    }) 
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
  openModal(event, template,index,financier) {
    console.log(financier,"financier")
    console.log(index,"index")
    let array = []
    array.push(financier)
    this.dataBIDDetails = new MatTableDataSource(array);
    event.preventDefault();
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
  isOpenHandle(isTrue){
    this.isOpen = isTrue == "inActive" ? "active" : "inActive"
    }

    saveFinBid(data){
      console.log(data.filteredData,"usus")
      data.filteredData[0]['smeId'] = localStorage.getItem("userId")
      data.filteredData[0]['status'] = 'A'
      data.filteredData[0]['invoiceId'] = data.filteredData[0].invNo
      var element =  data.filteredData[0];
      this.smeBiddingServices.saveFinBid(element).subscribe(resp => {
        console.log(resp,"resp")
        if(resp){
          this.smeBiddingServices.updateFinBid(resp.id).subscribe(resp => {
          })
        alert("Accepted successfully")
        this.modalRef.hide()
        this.router.navigateByUrl('/sme-dashboard');
        }
      })
    }
    handleToggle(e,status){
      this.modalDialogService.confirm("Confirm Delete","Do you really want to change the status ?","Ok","Cancel").subscribe(result =>{       
    })
  }
  goHome(){
    this.router.navigateByUrl('/sme-dashboard');
  }
  logout(){
    this.authenticationService.logout()
    }
}

export class UserDataSource extends DataSource<any> {
  constructor(private financierService: FinancierService) {
    super();
    
  }
  connect(): Observable<Financier[]> {
    return this.financierService.getUser();
   
  }
  disconnect() {}
}
