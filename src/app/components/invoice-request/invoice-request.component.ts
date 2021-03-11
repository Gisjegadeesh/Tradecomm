import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-invoice-request',
  templateUrl: './invoice-request.component.html',
  styleUrls: ['./invoice-request.component.scss']
})
export class InvoiceRequestComponent implements OnInit {
  tcode: string;
   ELEMENT_DATA: any[] = [
    {
      Name: 'INV64320',
      Position: 'ISBGF5643',
      DateOfInvoice: '11/3/2021',
      Seller: 'SME1',
      Buyer: 'BUYER1',
      InvoiceAmount: '563489',
      NOfCalls: 'Acive'
    },
    {
      Name: 'INV64320',
      Position: 'ISBGF5643',
      DateOfInvoice: '11/3/2021',
      Seller: 'SME1',
      Buyer: 'BUYER1',
      InvoiceAmount: '563489',
      NOfCalls: 'Acive'
    },
    {
      Name: 'INV64320',
      Position: 'ISBGF5643',
      DateOfInvoice: '11/3/2021',
      Seller: 'SME1',
      Buyer: 'BUYER1',
      InvoiceAmount: '563489',
      NOfCalls: 'Acive'
    },
  ];

  ELEMENT_DATA1: any[] = [
    {
      Name: '',
      Position: '',
      DateOfInvoice: '',
      Seller: '',
      Buyer: '',
      InvoiceAmount: '',
      NOfCalls: ''
    },
    {
      Name: '',
      Position: '',
      DateOfInvoice: '',
      Seller: '',
      Buyer: '',
      InvoiceAmount: '',
      NOfCalls: ''
    },
    {
      Name: '',
      Position: '',
      DateOfInvoice: '',
      Seller: '',
      Buyer: '',
      InvoiceAmount: '',
      NOfCalls: ''
    },
];
title = 'New Invoice';
hide = true;
  addGoods = new MatTableDataSource(this.ELEMENT_DATA1);
  displayedColumnsn: string[] = ['StatusCode', 'DateTime', 'IdNo', 'Quantity', 'Rate', 'Amount', 'DiscAmount',
  'NetAmount', 'TaxRate', 'TaxAmount', 'NOfCalls'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  displayedColumns: string[] = ['StatusCode', 'DateTime', 'DateOfInvoice', 'Seller', 'Buyer', 'InvoiceAmount', 'NOfCalls'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
    // tslint:disable-next-line: typedef
    ngOnInit(){}
  // tslint:disable-next-line: typedef
  onSubmit() {}
  
}
