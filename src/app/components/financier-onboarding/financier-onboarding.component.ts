import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer/customer.service';
import { AuthenticationService } from '../../service/authentication/authentication.service';

import { IDropdownSettings } from 'ng-multiselect-dropdown';


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

  constructor(private route: ActivatedRoute, private router: Router, 
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
    this.selectedItems = [
      { item_id: 4, item_text: "Pune" },
      { item_id: 6, item_text: "Navsari" }
    ];
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
    console.log('onItemSelect', item);
  }
  onItemDeSelect(item: any) {
    console.log('onItem DeSelect', item);
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

  onDropDownClose() {
    console.log('dropdown closed');
  }


  onSubmit() {
    this.customerService.save(this.customer).subscribe(result => this.gotoPage());
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
