import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any[] = [
  {
    IccTraComRef: 'INV098765',
    InvId: 'VGRE4567',
    SellerName: 'Midweat Corp',
    BuyerName: 'AramCo',
    SellerRating: '7/10',
    BuyerRating: '9/10',
    InvDate: '01/03/2021',
    InvAmt: '84576 USD'
  }
];

@Component({
  selector: 'app-finance-bidding',
  templateUrl: './finance-bidding.component.html',
  styleUrls: ['./finance-bidding.component.scss']
})
export class FinanceBiddingComponent implements OnInit {

  constructor() { }

  dataSource = new MatTableDataSource(ELEMENT_DATA); //data
  displayedColumns: string[] = [
    'IccTraComRef',
    'InvId',
    'SellerName',
    'BuyerName',
    'SellerRating',
    'BuyerRating',
    'InvDate',
    'InvAmt'
  ];

  ngOnInit(): void {
  }

}
