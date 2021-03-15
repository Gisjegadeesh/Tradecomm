import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
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
  },
];

interface ICity{
  item_id: number;
  item_text: string;
}
@Component({
  selector: 'app-sme-onboarding',
  templateUrl: './sme-onboarding.component.html',
  styleUrls: ['./sme-onboarding.component.scss']
})
export class SmeOnboardingComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['Name', 'Position', 'Address', 'TelephoneNo', 'Email'];

  sName: string;
  taxId: string;
  
  state: string;
  country: string;
  invalidLogin = false

  constructor(private router: Router) { }

  
  name = "Angular";
  cities: Array<ICity> = [];
  selectedItems: Array<ICity> = [];
  dropdownSettings: IDropdownSettings = {};

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
      itemsShowLimit: 3
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
    if (this.sName.valueOf() !== '' || this.taxId.valueOf() !== '') {
      if (this.state.valueOf() !== '' || this.state.valueOf() !== '') {
        this.router.navigate(['sme-dashboard']);
        this.invalidLogin = false;
      }
    } else {
      this.invalidLogin = true
    }
  }

}
