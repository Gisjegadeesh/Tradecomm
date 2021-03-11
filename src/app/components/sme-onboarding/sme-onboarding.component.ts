import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
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
