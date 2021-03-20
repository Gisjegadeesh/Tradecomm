import { Component, OnInit, ElementRef, HostListener, ViewChild,Input } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication/authentication.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDialogService } from '../../../service/modal-dialog.service';
import { Validators, FormGroup ,FormBuilder} from '@angular/forms';
import {InvoiceRequestServices} from '../../invoice-request/invoice-service';
import {INVOICEDETAILSCONSTANTS} from '../../../shared/constants/constants';

interface Status {
  value: string;
  viewValue: string;
}

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
    Status: 'A'
  }
];
const displayInvDatas: any[] = [
  {
    invRefNumber: 'BID03456',
    invId: 102700,
    invDate: '10/12/2020',
    invDueDate: '10/12/2020',
    invAmt: 1000,
    buyerName: "Test Buyer",
    sellerName: "Test Seller",
    buyerRating: 10,
    sellerRating: '6.1'
  }
];


@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  finBidform: FormGroup;

  status: Status[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'R', viewValue: 'R'},
  ];
  detailsTooltip=INVOICEDETAILSCONSTANTS
  constructor(private authenticationService:AuthenticationService,private router :Router,private modalDialogService:ModalDialogService,private fb: FormBuilder,private invoiceRequestServices:InvoiceRequestServices) { }

  dataSourceOne = new MatTableDataSource(DATA_ONE); //data
  displayedColumnsOne: string[] = ['descGoods', 'dateOfInvoice', 'quantity', 'taxRate','amt','rate','totalccy','taxAmountccy','total'];
  displayedColumnsOne1: string[] = [
    'SNo',
    'DescGoods',
    'IdNo',
    'Qty',
    'Rate',
    'Amt',
    'DiscAmt',
    'NetAmt',
    'TaxRate',
    'TaxAmt',
    'Total'
  ];
  dataSourceTwo = new MatTableDataSource(DATA_TWO); //data
  displayedColumnsTwo: string[] = [
    'BidID',
    'FinOffAmt',
    'Ccy',
    'FxRateDiff',
    'Margin',
    'DiscRate',
    'DiscAmt',
    'NetAmtPay',
    'DueDate',
    'OffExpPrd',
    'Status'
  ];
  displayInvDatas = new MatTableDataSource(displayInvDatas); //data

  displayedInvoiceFormsColumns: string[] = [
    // 'invRefNumber',
    // 'invId',
    // 'invDate',
    // 'invDueDate',
    // 'invAmt',
    // 'buyerName',
    // 'sellerName',
    // 'buyerRating',
    // 'sellerRating'
    'billNo',
    'invId',
    'invDate',
    'invDueDate',
    'invAmt',
    'buyerName',
    'smeId', 
  ];
  mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;
  isOpen = '';
  bidpanelOpenState = false;
  @Input() id: "";

  invoiceDetails = {
    billNo : String,
          invId : String,
          invDate : String,
          invDueDate : String,
          invAmt : String,
          buyerName : String,
          smeId : String,  
  }



  ngOnInit(): void {
    console.log(this.id)
    this.buildfinBidform()
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    }

    this.invoiceRequestServices.getInvDetailsLists_ForFinanceBidding(this.id).subscribe(resp => {
      if(resp){
        this.displayInvDatas = new MatTableDataSource([
         {
          billNo : resp.billNo,
          invId : resp.invId,
          invDate : resp.invDate,
          invDueDate : resp.invDueDate,
          invAmt : resp.invAmt,
          buyerName : resp.buyerName,
          smeId : resp.smeId,          
        }

      ])
      this.dataSourceOne = new MatTableDataSource(resp.goodsDetails);
      }
     
    })

    
  }
  buildfinBidform(){
    this.finBidform = this.fb.group({
      financeOfferAmt: ['', Validators.required],
      ccy: ['', Validators.required],
      fxRate: ['', Validators.required],
      margin: ['', Validators.required],
      discRate: ['', Validators.required],
      discAmt: ['', Validators.required],
      netAmtDisc: ['', Validators.required],
      // dueDate: ['', Validators.required],
      offerExpPeriod: ['', Validators.required],
      fin: localStorage.getItem("userId"),
      invoiceId : this.id
    })
  }

  isOpenHandle(isTrue){
    this.isOpen = isTrue == "inActive" ? "active" : "inActive"
    }

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
  logout(){
    this.authenticationService.logout()
    }
    goHome(){
      this.router.navigateByUrl('/financier-dashboard');
    }

    handleToggle(e,status){
      this.modalDialogService.confirm("Confirm Delete","Do you really want to change the status ?","Ok","Cancel").subscribe(result =>{       
      })

  }
  onSubmitBidForm() {
    try {
      // for (const key in this.invoiceForm.controls) {
      //   this.invoiceForm.get(key).setValidators(Validators.required);
      //   this.invoiceForm.get(key).updateValueAndValidity();
      //   }
      if (this.finBidform.status === "INVALID")
        throw { "mes": "Please fill mendatory  fields" }
      let params = this.finBidform.value
      // this.invoiceFormBuild();
      // this.dataSourceTwo.data = [];
      // this.invoiceID = "";
      // this.InvoiceFdate = ""
      // for (const key in this.invoiceForm.controls) {
      //   this.invoiceForm.get(key).clearValidators();
      //   this.invoiceForm.get(key).updateValueAndValidity();
      // }
      this.invoiceRequestServices.finbidSave(params).subscribe(resp => {
        this.buildfinBidform();
        // this.getInvDetailsLists();
      }, error => {
      })
    } 
    catch (err) {
    }
  }
}
