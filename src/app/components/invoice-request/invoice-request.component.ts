import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { InvoiceRequestServices } from './invoice-service';
import { DatePipe } from '@angular/common';
import { FUNDINGREQUESTCONSTANTS } from '../../shared/constants/constants';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

const ELEMENT_DATA: any[] = [
  {
    Name: 'INV64320',
    Position: 'ISBGF5643',
    DateOfInvoice: '11/3/2021',
    Seller: 'SME1',
    Buyer: 'BUYER1',
    InvoiceAmount: '563489',
    Status: 'Active'
  },
  {
    Name: 'INV64320',
    Position: 'ISBGF5643',
    DateOfInvoice: '11/3/2021',
    Seller: 'SME1',
    Buyer: 'BUYER1',
    InvoiceAmount: '563489',
    Status: 'Active'
  },
  {
    Name: 'INV64320',
    Position: 'ISBGF5643',
    DateOfInvoice: '11/3/2021',
    Seller: 'SME1',
    Buyer: 'BUYER1',
    InvoiceAmount: '563489',
    Status: 'Active'
  },
];

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
//     Status: 'A'
//   }
// ];
// const RATE = ['', '', '', '', '', '', '',
//  ];
// const NAMES = ['', '', '', '', '', '',];

export interface invoiceData {
  id: String;
  RefNo: String;
  invoiceId: String;
  invoiceDate: String;
  buyerName: String;
  InvoiceAmount: String;

}
const INVOICE_ARRAY: invoiceData[] = [];

@Component({
  selector: 'app-invoice-request',
  templateUrl: './invoice-request.component.html',
  styleUrls: ['./invoice-request.component.scss']
})

export class InvoiceRequestComponent implements OnInit {
  invoiceForm: FormGroup;
  tcode: string;
  invoiceID: any;
  InvoiceFdate:any
  invoicedata: invoiceData = {
    id: "",
    RefNo: "",
    invoiceId: "",
    invoiceDate: "",
    buyerName: "",
    InvoiceAmount: ""
  };

  hide = true;
  dataSourceTwo = new MatTableDataSource(); //data
  // dataSourceTwo = new MatTableDataSource(DATA_TWO); //data
  displayedColumnsTwo: string[] = [
    'ID',
    'DescGoods',
    // 'IdNo',
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
  // displayedColumnsn: string[] = ['StatusCode', 'DateTime', 'IdNo', 'Quantity','Rate','Amount','DiscAmount','NetAmount','TaxRate','TaxAmount', 'Status'];

  dataSource = new MatTableDataSource(INVOICE_ARRAY);

  displayedColumns: string[] = ['select', 'DateTime', 'DateOfInvoice', 'Seller', 'buyerName', 'InvoiceAmount', 'Status'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // tslint:disable-next-line: typedef
  isOpen = ""
  mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;
  formArray: any;
  tooltipPosition= "below";
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
  fundingTooltip = FUNDINGREQUESTCONSTANTS;
  currencyDropdownList = [
    {
      item_id:'INR',item_text:'INR'
    },
    {
      item_id:'AUD',item_text:'AUD'
    },
    {
      item_id:'USD',item_text:'USD'
    },
    {
      item_id:'SGD',item_text:'SGD'
    }
  ];
  dropdownSettings :IDropdownSettings = {
  singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    allowSearchFilter: true  
  }
  constructor(public router: Router, private authenticationService: AuthenticationService, private invoiceRequestServices: InvoiceRequestServices, private fb: FormBuilder,
    private datePipe: DatePipe) {
    this.invoiceFormBuild()
    this.dataSourceTwo = new MatTableDataSource();
  }
  ngOnInit() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    }
    this.getInvDetailsLists()
}
  getInvDetailsLists() {
    let tempInvArray;
    this.invoiceRequestServices.getInvDetailsLists().subscribe(resp => {
      // resp.forEach(element => {
      //   if (element.status == "I") {
      //     tempInvArray.push(element)
      //     // resp.splice(resp.indexOf(element),1)
      //   }
      // });
      const INVOICE_ARRAY: invoiceData[] = resp;
      this.dataSource = new MatTableDataSource(INVOICE_ARRAY);
    }, error => {
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

  openModal(event, template) {
    event.preventDefault();
  }
  goHome() {
    this.router.navigateByUrl('/sme-dashboard');
  }
  logout() {
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
    this.selection.selected.forEach(s => console.log(s.name));
  }
  authoriseInvoice() {
    let invoiceIds = []
    this.selection.selected.forEach(s =>
      invoiceIds.push(s.id)
    );
    this.updateInvoice(invoiceIds)
    console.log("invoiceIds", invoiceIds);
  }
  updateInvoice(invoiceIds) {
    let invIdparams = {
      "invoiceIds": invoiceIds,
    }
    alert("Selected Inovices has been Authorized !");
    this.invoiceRequestServices.authoriseInvoice(invoiceIds.toString()).subscribe(resp => {
      this.getInvDetailsLists();
    }, error => {
    })
  }
  onSubmitInvoiceForm() {
    try {
      // for (const key in this.invoiceForm.controls) {
      //   this.invoiceForm.get(key).setValidators(Validators.required);
      //   this.invoiceForm.get(key).updateValueAndValidity();
      //   }
      if (this.invoiceForm.status === "INVALID")
        throw { "mes": "Please fill mendatory  fields" }
      let params = {
        "invoiceDetails": this.invoiceForm.value,
        // "goodsDetails": this.invoiceForm.value.data,
      }
      console.log(params,"params");
      this.invoiceFormBuild();
      this.dataSourceTwo.data = [];
      this.invoiceID = "";
      this.InvoiceFdate = ""
      for (const key in this.invoiceForm.controls) {
        this.invoiceForm.get(key).clearValidators();
        this.invoiceForm.get(key).updateValueAndValidity();
      }
      this.invoiceRequestServices.invoiceRequestSave(params).subscribe(resp => {
        this.getInvDetailsLists();
      }, error => {
      })
    } catch (err) {
    }
  }
  //   addNew(){ 
  //     INVOICE_ARRAY.push(this.invoicedata)
  //     this.dataSource = new MatTableDataSource(INVOICE_ARRAY);
  //     this.invoicedata = {
  //      id :"1",
  //      RefNo :"ref",
  //      invoiceId :"inv",
  //      invoiceDate : "123123",
  //      buyerName :"123213",
  //      InvoiceAmount :"123213"
  //    }
  //  }
  get dateFormArray(): FormArray {
    return this.invoiceForm.get('goodsDetails') as FormArray;
  }
  addRow() {
    console.log(this.invoiceForm, "adasdasd")
    this.dataSourceTwo.filter = "";
    const row = this.fb.group({
      ID: this.invoiceID,
      descGoods: [""],
      // idNo: [""],
      dateOfInvoice:this.datePipe.transform(this.InvoiceFdate,"dd/MM/yyyy"),
      quantity: [""],
      rate: [""],
      amt: [""],
      discAmt: [""],
      netAmtPay: [""],
      taxRate: [""],
      taxAmount: [""],
      total: [""],
      goodsId: "GD101",
    })
    this.dateFormArray.push(row);
    this.dataSourceTwo.data = this.dateFormArray.controls;
  }
  invoiceFormBuild() {
    this.invoiceForm = this.fb.group({
      buyerName: ['', Validators.required],
      invDueDate: ['', Validators.required],
      invId: ['', Validators.required],
      buyerAddr: ['', Validators.required],
      billNo: ['', Validators.required],
      invAmt: ['', Validators.required],
      invDate: ['', Validators.required], 
      dispDate: ['', Validators.required],
      smeId: localStorage.getItem("userId"),
      invCcy: "SGD",
      goodsDetails: this.fb.array([]),
      currency:[[],Validators.required]
    });
  }
  updateInvoiceId(event) {
    this.invoiceID = event.target.value;
    this.invoiceForm.value.goodsDetails.findIndex((obj => obj.ID == 1));
  }
  updateInvoicedate(event){
    this.InvoiceFdate = event.target.value;
  }
  onItemSelect(event){

  }
}

