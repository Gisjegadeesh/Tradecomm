import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

interface Status {
  value: string;
  viewValue: string;
}

const DATA_ONE: any[] = [
  {
    SNo: 1,
    DescGoods: 'Steel Rod',
    IdNo: 'a456',
    Qty: '100t',
    Rate: '678.0',
    Amt: 67800,
    DiscAmt: '-',
    NetAmt: 67800,
    TaxRate: 2,
    TaxAmt: 1356,
    Total: 63156
  },
  {
    SNo: 2,
    DescGoods: 'Nuts',
    IdNo: 'D435',
    Qty: '25t',
    Rate: '876.0',
    Amt: 21900,
    DiscAmt: 900,
    NetAmt: 21000,
    TaxRate: 2,
    TaxAmt: 420,
    Total: 21420
  }
];

const DATA_TWO: any[] = [
  {
    BidID: 'BID03456',
    FinOffAmt: 102700,
    Ccy: 'SGD',
    FxRateDiff: '1.35',
    Margin: 10,
    DiscRate: 3,
    DiscAmt: 760,
    NetAmtPay: 101940,
    DueDate: '90D/10Mar21',
    OffExpPrd: '4 PM',
    Status: 'A'
  }
];

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  status: Status[] = [
    {value: 'A', viewValue: 'A'},
    {value: 'R', viewValue: 'R'},
  ];

  constructor() { }

  dataSourceOne = new MatTableDataSource(DATA_ONE); //data
  displayedColumnsOne: string[] = [
    'SNo',
    'DescGoods',
    'IdNo',
    'Qty',
    'Rate',
    'Amt',
    'DiscAmt',
    'NetAmt',
    'TaxRate',
    'TaxAmt',
    'Total'
  ];

  dataSourceTwo = new MatTableDataSource(DATA_TWO); //data
  displayedColumnsTwo: string[] = [
    'BidID',
    'FinOffAmt',
    'Ccy',
    'FxRateDiff',
    'Margin',
    'DiscRate',
    'DiscAmt',
    'NetAmtPay',
    'DueDate',
    'OffExpPrd',
    'Status'
  ];

  ngOnInit(): void {
  }

}
