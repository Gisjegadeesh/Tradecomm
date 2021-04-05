import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SmeOnboardingComponent } from './components/sme-onboarding/sme-onboarding.component';
import { SmeDashboardComponent } from './components/sme-dashboard/sme-dashboard.component';
import { FinancierOnboardingComponent } from './components/financier-onboarding/financier-onboarding.component';
import { FinancierOnboardingListComponent } from './components/financier-onboarding/financier-onboarding-list/financier-onboarding-list.component';
import { FinancierDashboardComponent } from './components/financier-dashboard/financier-dashboard.component';
import { SmeBiddingComponent } from './components/sme-bidding/sme-bidding.component';
import { SmeBiddingDetailsComponent } from './components/sme-bidding/sme-bidding-details/sme-bidding-details.component';
import { InvoiceRequestComponent } from './components/invoice-request/invoice-request.component';
import { FinanceBiddingComponent } from './components/finance-bidding/finance-bidding.component';
import {FinanceBiddingExpiredComponent} from './components/finance-bidding-expired/finance-bidding-expired.component'
import { InvoiceDetailsComponent } from './components/finance-bidding/invoice-details/invoice-details.component';
import { IccDashboardComponent} from './components/icc-dashboard/icc-dashboard.component';
import {SmeFinanceforBiddingComponent} from './components/sme-financefor-bidding/sme-financefor-bidding.component'
import {AcceptedFinanceComponent} from './components/accepted-finance/accepted-finance.component'
import {FinanceBiddingAcceptsComponent} from './components/finance-bids-accept/finance-bids-accept.component'
import { FinanceBiddingAcceptsDetailsComponent } from './components/finance-bids-accept/finance-bids-accept-details/finance-bids-accept-details.component';
import {InvoiceDetailsExpiredComponent} from './components/finance-bidding-expired/invoice-details-expired/invoice-details-expired.component'
import {FinanceBiddingRejectedComponent} from './components/finance-bidding-rejected/finance-bidding-rejected.component'
import {InvoiceDetailsRejectedComponent} from './components/finance-bidding-rejected/invoice-details-rejected/invoice-details-rejected.component'
import {ICCacceptancedetailsComponent} from './components/icc-offer-acceptance/icc-acceptance-details/icc-acceptance-details.component'
import {IccFundingRequestComponent} from './components/icc-funding-request/icc-funding-request.component'
import {IccOfferAcceptanceComponent}  from './components/icc-offer-acceptance/icc-offer-acceptance.component'
import {IccFinanceMasterComponent} from './components/icc-finance-master/icc-finance-master.component';
import {IccInvoiceMasterComponent} from './components/icc-invoice-master/icc-invoice-master.component';
import {IccFinanceTodayComponent} from './components/icc-finance-today/icc-finance-today.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sme-onboarding', component: SmeOnboardingComponent,  data : {"HeaderName" : "Sme Onboarding","homePath" : "/sme-dashboard"} },
  { path: 'sme-dashboard', component: SmeDashboardComponent,  data : {"HeaderName" : "Seller Dashboard","homePath" : "/sme-dashboard"}  },
  { path: 'sme-bidding', component: SmeBiddingComponent ,  data : {"HeaderName" : "SME Bidding","homePath" : "/sme-dashboard"}},
  { path: 'sme-bidding/:id', component: SmeBiddingDetailsComponent ,  data : {"HeaderName" : "SME Bidding","homePath" : "/sme-dashboard"}},
  { path: 'sme-finance-for-bidding', component: SmeFinanceforBiddingComponent , data : {"HeaderName" : "Finance For Bidding","homePath" : "/sme-dashboard"}},
  { path: 'accepted-finance', component: AcceptedFinanceComponent , data : {"HeaderName" : "Accepted Finance","homePath" : "/sme-dashboard"}},
  { path: 'invoice-request', component: InvoiceRequestComponent , data : {"HeaderName" : "New Funding Request","homePath" : "/sme-dashboard"}},


  { path: 'financier-onboarding', component: FinancierOnboardingComponent ,  data : {"HeaderName" : "Financier Onboarding","homePath" : "/icc-dashboard"}},
  { path: 'financier-onboarding-list', component: FinancierOnboardingListComponent ,  data : {"HeaderName" : "ICC TradeComm Dashboard","homePath" : "/icc-dashboard"}},
  { path: 'financier-onboarding/:edit/:id', component: FinancierOnboardingComponent ,  data : {"HeaderName" : "Financier Onboarding","homePath" : "/icc-dashboard"}},
  { path: 'financier-onboarding/:view/:id', component: FinancierOnboardingComponent ,  data : {"HeaderName" : "Financier Onboarding","homePath" : "/icc-dashboard"}},

  { path: 'financier-bids-accept', component: FinanceBiddingAcceptsComponent ,  data : {"HeaderName" : "Financier Dashboard","homePath" : "/financier-dashboard"}},
  { path: 'financier-bids-accept-Details/:type/:id', component: FinanceBiddingAcceptsDetailsComponent ,  data : {"HeaderName" : "Bids to be Accepted","homePath" : "/financier-dashboard"}},

  { path: 'financier-dashboard', component: FinancierDashboardComponent ,  data : {"HeaderName" : "Financier Dashboard","homePath" : "/financier-dashboard"}},
  { path: 'finance-bidding', component: FinanceBiddingComponent, data : {"HeaderName" : "Financier Bidding","homePath" : "/financier-dashboard"} },
  { path: 'finance-bidding/:id', component: InvoiceDetailsComponent , data : {"HeaderName" : "Invoice Details","homePath" : "/financier-dashboard"}},
  { path: 'invoice-request', component: InvoiceRequestComponent , data : {"HeaderName" : "New Funding Request","homePath" : "/financier-dashboard"}},
  { path: 'finance-bidding-expired', component: FinanceBiddingExpiredComponent, data : {"HeaderName" : "Financier Dashboard","homePath" : "/financier-dashboard"} },
  { path: 'finance-bidding-expired-details/:type/:id', component: InvoiceDetailsExpiredComponent , data : {"HeaderName" : "Financier Offer Expired","homePath" : "/financier-dashboard"}},
  { path: 'finance-bidding-rejected', component: FinanceBiddingRejectedComponent, data : {"HeaderName" : "Financier Dashboard","homePath" : "/financier-dashboard"} },
  { path: 'finance-bidding-rejected/:type/:id', component: InvoiceDetailsRejectedComponent , data : {"HeaderName" : "Financier Offer rejected","homePath" : "/financier-dashboard"}},
  { path: 'icc-dashboard', component: IccDashboardComponent , data : {"HeaderName" : "ICC TradeComm Dashboard"}},

  { path: 'icc-dashboard', component: IccDashboardComponent , data : {"HeaderName" : "ICC TradeComm Dashboard"}},
  { path: 'icc-finance-today', component: IccFinanceTodayComponent , data : {"HeaderName" : "Finance-Today","homePath" : "/icc-dashboard"}},
  { path: 'icc-finance-master', component: IccFinanceMasterComponent , data : {"HeaderName" : "Finance-Master","homePath" : "/icc-dashboard"}},
  { path: 'icc-invoice-master', component: IccInvoiceMasterComponent , data : {"HeaderName" : "Invoice-Master","homePath" : "/icc-dashboard"}},
  // { path: 'icc-dashboard', component: IccDashboardComponent , data : {"HeaderName" : "ICC TradeComm Dashboard"}},
  { path: 'icc-funding-request', component: IccFundingRequestComponent , data : {"HeaderName" : "ICC Open Funding","homePath" : "/icc-dashboard"}},  
  { path: 'icc-offer-acceptance', component: IccOfferAcceptanceComponent , data : {"HeaderName" : "ICC TradeComm Dashboard","homePath" : "/icc-dashboard"}},
  { path: 'icc-offer-acceptance-details/:type/:id', component: ICCacceptancedetailsComponent , data : {"HeaderName" : "ICC TradeComm Dashboard / ICC Offer Acceptance","homePath" : "/icc-dashboard"}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
