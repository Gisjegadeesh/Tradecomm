import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDialogService } from '../../service/modal-dialog.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatTableDataSource } from '@angular/material/table';
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
@Component({
  selector: 'app-financier-bidding',
  templateUrl: './financier-bidding.component.html',
  styleUrls: ['./financier-bidding.component.scss']
})

export class FinancierBiddingComponent implements OnInit {

  displayedColumns: string[] = ['refNo', 'invoiceId', 'invoiceAmt','invDate','invDueDate'];
  tabledataSource = new MatTableDataSource(ELEMENT_DATA);

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','position1','name1'];
  dataSource = [

    { refNo: 'INV21009876', invoiceId: 'SGTR953', invoiceAmt : '54390 EUR', invDate : '01/03/2021', invDueDate : '01/06/2021'},
    { refNo: 'INV21007864', invoiceId: 'AHYT786', invoiceAmt: '84576 USD',invDate : '26/02/2021',  invDueDate : '26/04/2021'},
   

      // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'Dwayne Jhonson'},
      // {position: 2, name: 'Helium', weight: 4.0026, symbol: ['Kevin peterson', 'Brett Lee']},
      // {position: 3, name: 'Lithium', weight: 6.941, symbol: ['Sachin Tendulakar', 'Yuvraj Sing']},
    //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: ['Be']},
    //   {position: 5, name: 'Boron', weight: 10.811, symbol: ['B']},
    //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: ['C']},
    //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: ['N']},
    //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: ['O']},
    //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: ['F']},
    //   {position: 10, name: 'Neon', weight: 20.1797, symbol: ['Ne']},
   ];
    isOpen = ""
    mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;
  modalRef: BsModalRef;


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
  constructor(public router: Router,private modalService: BsModalService) { }
 
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
      this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
      
    }

  

  goHome(){
    this.router.navigateByUrl('/sme-dashboard');
  }
}
