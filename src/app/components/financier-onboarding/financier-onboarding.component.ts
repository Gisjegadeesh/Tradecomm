import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer/customer.service';

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

@Component({
  selector: 'app-financier-onboarding',
  templateUrl: './financier-onboarding.component.html',
  styleUrls: ['./financier-onboarding.component.scss']
})
export class FinancierOnboardingComponent implements OnInit {
  
  customer: Customer;
  
  constructor(private route: ActivatedRoute, private router: Router, 
    private customerService: CustomerService) {
    this.customer = new Customer();
  }

  dataSource = new MatTableDataSource(ELEMENT_DATA); //data
  displayedColumns: string[] = ['Name', 'Position', 'Address', 'TelephoneNo', 'Email'];

  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.save(this.customer).subscribe(result => this.gotoPage());
  }

  gotoPage() {
    this.router.navigate(['/login']);
  }

}
