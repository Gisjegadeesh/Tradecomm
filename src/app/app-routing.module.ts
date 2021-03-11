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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'sme-onboarding', component: SmeOnboardingComponent },
  { path: 'sme-dashboard', component: SmeDashboardComponent },
  { path: 'financier-onboarding', component: FinancierOnboardingComponent },
  { path: 'financier-dashboard', component: FinancierDashboardComponent },
  { path: 'financier-bidding', component: FinancierBiddingComponent },
  { path: 'invoice-request', component: InvoiceRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
