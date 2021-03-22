import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer/customer.service';
import { AuthenticationService } from '../../service/authentication/authentication.service';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatePipe } from '@angular/common';


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
  }
];

interface ICity{
  item_id: number;
  item_text: string;
}
@Component({
  selector: 'app-financier-onboarding',
  templateUrl: './financier-onboarding.component.html',
  styleUrls: ['./financier-onboarding.component.scss']
})
export class FinancierOnboardingComponent implements OnInit {
  
  customer: Customer;
  isOpen = '';

  constructor(private route: ActivatedRoute, private router: Router, private datePipe: DatePipe,
    private customerService: CustomerService,public authenticationService: AuthenticationService) {
    this.customer = new Customer();
  }

  dataSource = new MatTableDataSource(ELEMENT_DATA); //data
  displayedColumns: string[] = ['Name', 'Position', 'Address', 'TelephoneNo', 'Email'];

  name = "Angular";
  cities: Array<ICity> = [];
  selectedItems: Array<ICity> = [];
  dropdownSettings: IDropdownSettings = {
  };

  ngOnInit() {
    this.cities = [
      { item_id: 1, item_text: "India" },
      { item_id: 2, item_text: "Australia" },
      { item_id: 3, item_text: "America" },
      { item_id: 4, item_text: "Singapore" }
      
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true

    };
   
  }
  onItemSelect(item: any) {
    this.selectedItems.push(item)
  }
  onItemDeSelect(item: any) {
    this.selectedItems.push(item)
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

  onDropDownClose() {
    console.log('dropdown closed');
  }


  onSubmit() {
    let addrlst=[]
    let headAddr={
      'addressLine1':this.customer.headAddrLine1,
        'addressLine2':this.customer.headAddrLine2,
        'addressLine3':this.customer.headAddrLine3,
        'city':this.customer.headcity,
        'state':this.customer.headstate,
        // 'country':this.customer
        'telephoneNumber':this.customer.headtelephoneNumber,
        'email':this.customer.heademail,
        'faxNo':this.customer.headfaxNo,
        'swiftBic':this.customer.headswiftBic
    }
    let serviceAddr={
      'addressLine1':this.customer.servAddrLine1,
      'addressLine2':this.customer.servAddrLine2,
      'addressLine3':this.customer.servAddrLine3,
      'city':this.customer.servcity,
      'state':this.customer.servstate,
      // 'country':this.customer
      'telephoneNumber':this.customer.servtelephoneNumber,
      'email':this.customer.servemail,
      'faxNo':this.customer.servfaxNo,
      'swiftBic':this.customer.servswiftBic
    }
    // Object.values(headAddr).length && addrlst.push(headAddr)
    // Object.values(serviceAddr).length && addrlst.push(serviceAddr)
    addrlst.push(headAddr)
    addrlst.push(serviceAddr)
    let params={
      'corporateCode':this.customer.regNum,
      'financierNameConstitution':this.customer.fName,
      'taxIdentificationNumber':this.customer.taxIdNum,
      'expYear':this.customer.fExpYears,
      'registerDate':this.datePipe.transform(this.customer.regDate,"dd/MM/yyyy"),
      'activity':this.customer.activity,
      'principalBankAccount':this.customer.prnBankAcc,
      'principalBankBranch':this.customer.prnBankBrnh,
      'annualSCFTurnOver':this.customer.anlScfTrnOver,
      'transactionLimit':this.customer.transLimit,
      'addrlst':addrlst
    }
    this.customerService.save(params).subscribe(result => this.gotoPage());
  }

  gotoPage() {
    this.router.navigate(['/login']);
  }

  isOpenHandle(isTrue){
    this.isOpen = isTrue === 'inActive' ? 'active' : 'inActive';
    }

    logout(){
      this.authenticationService.logout()
    }
    goHome(){
      this.router.navigateByUrl('/icc-dashboard');
    }

}
