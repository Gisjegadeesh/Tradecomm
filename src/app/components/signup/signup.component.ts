import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../service/authentication/authentication.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


interface ICity{
  item_id: number;
  item_text: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  country: string;
  uen: string;
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

  signup() {
    if (this.country.valueOf() !== '' || this.uen.valueOf() !== '') {
      this.router.navigate(['sme-onboarding'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  // onSubmit() {
  //   this.router.navigate(['sme-onboarding']);
  //   alert(this.selectedRole);
  //   console.log(this.selectedRole)  //Will give you the role selected;
  //   if (this.selectedRole == "SME") {
  //     this.router.navigate(['sme-onboarding'])
  //   }
  //   else if (this.selectedRole == "ICC User") {
  //     this.router.navigate(['financier-onboarding'])
  //   }
  // }

}
