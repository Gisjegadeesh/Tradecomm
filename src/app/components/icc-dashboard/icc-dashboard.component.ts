import { Component, OnInit, ElementRef, HostListener, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { IccDashboardServices } from './icc-dashboard-services'
import {ICCDASHBOARDCONSTANTS} from '../../shared/constants/constants'

export interface FinancierDatas {
  financierId: string;
  financierName: string;
  regNumber: number;
  action: string;
}
let FINANACIERLIST: FinancierDatas[] = [
  // {financierId: 1, financierName: 'Jack', regNumber: 1.0079, action: 'edit'},
]
@Component({
  selector: "app-icc-dashboard",
  templateUrl: "./icc-dashboard.component.html",
  styleUrls: ["./icc-dashboard.component.scss"],
})
export class IccDashboardComponent implements OnInit {
  mobileScreen = false;
  end = false;
  start = true;
  currentPage = 0;
  pageCount = 1;
  limit = 7;
  isOpen = "active";
  displayedColumns: string[] = ['financierId', 'financierName', 'regNumber', 'action'];
  dataSource = [];
  @ViewChild("accountList", { read: ElementRef })
  public accountList: ElementRef<any>;

  @HostListener("window:resize", ["$event"])
  onResize() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    } else {
      this.mobileScreen = false;
    }
  }
  dashboardTooltip=ICCDASHBOARDCONSTANTS
  financierListDatas=[]
  constructor(public router: Router,private authenticationService: AuthenticationService,private iccDashboardServices: IccDashboardServices ) { }

  ngOnInit() {
    if (window.innerWidth < 415) {
      this.mobileScreen = true;
    }
    this.getIccDashDetails()
    this.getFinancierDetails()
    this.dataSource=[]
  }
  getFinancierDetails(){
    this.iccDashboardServices.getFinancierList().subscribe(resp=>{
      if(resp){
        FINANACIERLIST = []      
        resp.length && resp.map((item=>{
            let obj={
              "financierId":'FIN' + item.namedPKKey,
              "financierName":item.financierNameConstitution,
              "regNumber":item.locregno,
              "action":'edit'
            }
            FINANACIERLIST.push(obj)
            this.dataSource=FINANACIERLIST
          }))
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
        behavior: "smooth",
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
      behavior: "smooth",
    });
  }

  isOpenHandle(isTrue) {
    this.isOpen = isTrue == "inActive" ? "active" : "inActive";
  }

  chartType = "line";
  chartOptions = {
    responsive: true,
  };
  chartData = [
    { data: [350, 600, 260, 700, 650, 416, 400, 300, 556, 500, 600, 580], label: "Funding Requested" },
    { data: [500, 410, 450, 600, 550, 680, 720, 380, 350, 450, 650, 700], label: "Actual Funding" },
    { data: [120, 200, 700], label: "Repayment" },
  ];
  chartLabels = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  chartColors = [
    {
      backgroundColor: "rgba(204, 51, 0, .3)",
      borderColor: "rgba(204, 51, 0, .7)",
    },
    {
      backgroundColor: "rgba(0, 137, 132, .3)",
      borderColor: "rgba(0, 10, 130, .7)",
    },
    {
      backgroundColor: "rgba(0, 128, 43, .3)",
      borderColor: "rgba(0, 128, 43, .7)",
    }
  ];
  
  logout(){
    this.authenticationService.logout()
    }
    navigateFinancierOnboard(){
      this.router.navigateByUrl('/financier-onboarding');
    }
    getIccDashDetails(){
      this.iccDashboardServices.getIccDashDetails().subscribe(resp => {
        // const ELEMENT_DATA: financeForBiddingData[] = resp;
        // this.dataSource = new MatTableDataSource(resp);
      })
    }
    editFinancier(id,type){
      if(type == 'edit'){
        this.router.navigateByUrl('/financier-onboarding/edit/' + id)
      }
      else{
        this.router.navigateByUrl('/financier-onboarding/view/' + id)
      }
    }
}
