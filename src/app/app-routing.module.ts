import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SmeOnboardingComponent } from './components/sme-onboarding/sme-onboarding.component';
import { SmeDashboardComponent } from './components/sme-dashboard/sme-dashboard.component';
import { FinancierOnboardingComponent } from './components/financier-onboarding/financier-onboarding.component';
import { FinancierDashboardComponent } from './components/financier-dashboard/financier-dashboard.component';
import { FinancierBiddingComponent } from './components/financier-bidding/financier-bidding.component';
import { InvoiceRequestComponent } from './components/invoice-request/invoice-request.component';
import { FinanceBiddingComponent } from './components/finance-bidding/finance-bidding.component';
import { InvoiceDetailsComponent } from './components/finance-bidding/invoice-details/invoice-details.component';
import { IccDashboardComponent} from './components/icc-dashboard/icc-dashboard.component';
import {SmeFinanceforBiddingComponent} from './components/sme-financefor-bidding/sme-financefor-bidding.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sme-onboarding', component: SmeOnboardingComponent,  data : {"HeaderName" : "Sme Onboarding"} },
  { path: 'sme-dashboard', component: SmeDashboardComponent,  data : {"HeaderName" : "Seller Dashboard"}  },
  { path: 'financier-onboarding', component: FinancierOnboardingComponent ,  data : {"HeaderName" : "Financier Onboarding"}},
  { path: 'financier-dashboard', component: FinancierDashboardComponent ,  data : {"HeaderName" : "Financier Dashboard"}},
  { path: 'sme-bidding', component: FinancierBiddingComponent ,  data : {"HeaderName" : "SME Bidding"}},
  { path: 'finance-bidding', component: FinanceBiddingComponent, data : {"HeaderName" : "Financier Bidding"} },
  { path: 'invoice-request', component: InvoiceRequestComponent , data : {"HeaderName" : "New Invoice Entry"}},
  { path: 'sme-finance-for-bidding', component: SmeFinanceforBiddingComponent , data : {"HeaderName" : "Finance For Bidding"}},
  { path: 'finance-bidding/invoice-details', component: InvoiceDetailsComponent , data : {"HeaderName" : "Invoice Details"}},
  { path: 'icc-dashboard', component: IccDashboardComponent , data : {"HeaderName" : "ICC TradeComm Dashboard"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
