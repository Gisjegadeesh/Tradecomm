import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDialogService } from '../../service/modal-dialog.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { SmeFinancierForBiddingServices } from './sme-financefor-bidding-service'
// const ELEMENT_DATA: any[] = [
//   {
//     Name: '',
//     Position: '',
//     Address: '',
//     TelephoneNo: '',
//     Email: ''
//   }
// ];

export interface financeForBiddingData {
  invId: String;
  invAmt: String;
  smeId: String;
  buyerName: String;
  invDate: String;
  invDueDate: String;
  status: String;
}
const ELEMENT_DATA: financeForBiddingData[] = [];

export interface goodsDetails {
  descGoods: String;
  idNo: String;
  dateOfInvoice: String;
  quantity: String;
  rate: String;
  amt: String;
  discAmt: String;
  netAmtPay: String;
  taxRate: String;
  taxAmount: String;
  total: String;
}
const GOODS_DATA: goodsDetails[] = [];


export interface invoiceDetails {
  'invId': String,
  'invDate': String,
  'buyerName': String,
  'invAmt': String,
  'status': String
  // descGoods: String;
  // idNo : String;
  // dateOfInvoice: String;
  // quantity: String;
  // rate : String;
  // amt: String;
  // discAmt : String;
  // netAmtPay : String;
  // taxRate : String;
  // taxAmount : String;
  // total : String;


}
const INVOICE_DATA: invoiceDetails[] = [];

// const DATA_ONE: any[] = [
//   {
//     DescGoods: 'Steel Rod',
//     IdNo: 'a456',
//     Qty: '100t',
//     Rate: '678.0',
//     Amt: 67800,
//     DiscAmt: '-',
//     NetAmt: 67800,
//     TaxRate: 2
//   }
// ];
// const DATA_TWO: any[] = [
//   {
//     BidID: 'BID03456',
//     FinOffAmt: 102700,
//     Ccy: 'SGD',
//     FxRateDiff: '1.35',
//     Margin: 10,
//     DiscRate: 3,
//     DiscAmt: 760,
//     NetAmtPay: 101940,
//     DueDate: '90D/10Mar21',
//     OffExpPrd: '4 PM',
//     Status: 'A',
//   }
// ];
@Component({
  selector: 'app-sme-financefor-bidding',
  templateUrl: './sme-financefor-bidding.component.html',
  styleUrls: ['./sme-financefor-bidding.component.scss']
})

export class SmeFinanceforBiddingComponent implements OnInit {

  displayedColumns: string[] = ['invId', 'invAmt', 'smeId', 'buyerName', 'invDate', 'invDueDate', 'invDueDate', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 

  displayedColumnsOne: string[] = ['descGoods', 'dateOfInvoice', 'quantity',   'taxRate','amt','rate','totalccy','taxAmountccy','total'];
  dataSourceOne = new MatTableDataSource(GOODS_DATA); //data



  dataSourceTwo = new MatTableDataSource(INVOICE_DATA); //data
  displayedColumnsTwo: string[] = ['invId', 'invDate', 'buyerName', 'invAmt', 'status'
    // 'BidID',
    // 'FinOffAmt',
    // 'Ccy',
    // 'FxRateDiff',
    // 'Margin',
    // 'DiscRate',
    // 'DiscAmt',
    // 'NetAmtPay',
    // 'DueDate',
    // 'OffExpPrd',
    // 'Status'



  ];

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
  bidpanelOpenState = false;

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
  constructor(public router: Router, private modalService: BsModalService, private modalDialogService: ModalDialogService,
    private authenticationService: AuthenticationService, private SmeFinancierForBiddingServices: SmeFinancierForBiddingServices) { }


  ngOnInit() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    }
    this.dataSource = new MatTableDataSource([{
      buyerAddr: "Singapore",
      buyerName: "Tata Steel",
      dispDate: "17/03/2021",
      id: 2,
      invAmt: "10000",
      invCcy: "SGD",
      invDate: "17/03/2021",
      invDueDate: "17/06/2021",
      invId: "INV102",
      smeId: "SME101",
      status: "I"
    }]);

    this.SmeFinancierForBiddingServices.getFinanceForBiddingLists().subscribe(resp => {
      const ELEMENT_DATA: financeForBiddingData[] = resp;
      this.dataSource = new MatTableDataSource(resp);
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

  isOpenHandle(isTrue) {
    this.isOpen = isTrue == "inActive" ? "active" : "inActive"
  }

  openModal(event, template, id) {
    event.preventDefault();
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.dataSourceOne = new MatTableDataSource([
      {
        descGoods: '1',
        idNo: '1',
        dateOfInvoice: '1',
        quantity: '1',
        rate: '1',
        amt: '1',
        discAmt: '1',
        netAmtPay: '1',
        taxRate: '1',
        taxAmount: '1',
        total: '1'
      }
    ]);
    //  dataSourceTwo = new MatTableDataSource(INVOICE_DATA); //data
    //  displayedColumnsTwo: string[] = ['invId','invDate','buyerName','invAmt','status'

    let invoiceDetails = {
      "id": id
    }
    this.SmeFinancierForBiddingServices.getInvoiceRequestLists(id).subscribe(resp => {
      let status = "";
      if (resp.status == "I") {
        status = "Initiated"
      }
      else if (resp.status == "A") {
        status = "Waiting for bid"
      }
      else if (resp.status == "B") {
        status = "Bid Created"
      }
      else {
        status = "Financed Successfully"
      }
      this.dataSourceTwo = new MatTableDataSource([
        { 'invId': resp.invId, 'invDate': resp.invDate, 'buyerName': resp.buyerName, 'invAmt': resp.invAmt, 'status': status }
      ]);

      const ELEMENT_DATA: financeForBiddingData[] = resp;
      // this.dataSource = new MatTableDataSource(resp);
      this.dataSourceOne = new MatTableDataSource(resp.goodsDetails);
      
    })
  }

  handleToggle(e, status) {
    this.modalDialogService.confirm("Confirm Delete", "Do you really want to change the status ?", "Ok", "Cancel").subscribe(result => {
    })

  }

  goHome() {
    this.router.navigateByUrl('/sme-dashboard');
  }
  logout() {
    this.authenticationService.logout()
  }
}

