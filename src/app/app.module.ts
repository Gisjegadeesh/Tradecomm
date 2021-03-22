import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { SkeletonTextModule } from '@ffdc/uxg-angular-components/skeleton-text';
// import { UxgUserProfileMenuModule } from '@ffdc/uxg-angular-components/user-profile-menu';
import { AccountCardModule } from '@ffdc/uxg-angular-components/cards/account-card';
import { UxgTableModule } from '@ffdc/uxg-angular-components/table';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SmeOnboardingComponent } from './components/sme-onboarding/sme-onboarding.component';
import { FinancierOnboardingComponent } from './components/financier-onboarding/financier-onboarding.component';
import { CustomerService } from './service/customer/customer.service';
import { FinancierDashboardComponent } from './components/financier-dashboard/financier-dashboard.component';
import { SmeDashboardComponent } from './components/sme-dashboard/sme-dashboard.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { ChartsModule } from 'ng2-charts';
import { SmeBiddingComponent } from './components/sme-bidding/sme-bidding.component';
import {MatChipsModule} from '@angular/material/chips';
import {ModalDialogService} from './service/modal-dialog.service';
import {ApiService} from './service/api.service';
import {InvoiceRequestServices} from '../app/components/invoice-request/invoice-service';
import {FinanceRequestServices} from '../app/components/finance-bidding/finance-service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './shared/modals';
import { FinanceBiddingComponent } from './components/finance-bidding/finance-bidding.component';
import { InvoiceDetailsComponent } from './components/finance-bidding/invoice-details/invoice-details.component';
import { InvoiceRequestComponent } from './components/invoice-request/invoice-request.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { IccDashboardComponent } from './components/icc-dashboard/icc-dashboard.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {DatePipe} from '@angular/common';
import { FinancierService } from './service/financier/financier.service';
import { FinanceBiddingService } from './service/finance_bidding/finance-bidding.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { SmeFinanceforBiddingComponent } from './components/sme-financefor-bidding/sme-financefor-bidding.component';
import { SmeFinancierForBiddingServices } from './components/sme-financefor-bidding/sme-financefor-bidding-service';
import { SmeDashboardServices } from './components/sme-dashboard/sme-dashboard-service';
import { FinancierDashboardServices } from './components/financier-dashboard/financier-dashboard-services';
import { IccDashboardServices } from './components/icc-dashboard/icc-dashboard-services';
import { AcceptedFinanceComponent } from './components/accepted-finance/accepted-finance.component';
import {AcceptedFinanceServices} from './components/accepted-finance/accepted-finance-service'

import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SmeOnboardingComponent,
    FinancierOnboardingComponent,
    FinancierDashboardComponent,
    SmeDashboardComponent,
    SmeBiddingComponent,
    FinanceBiddingComponent,
    InvoiceDetailsComponent,
    InvoiceRequestComponent,
    IccDashboardComponent,
    NavbarComponent,
    SidebarComponent,
    SmeFinanceforBiddingComponent,
    AcceptedFinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ChartsModule,
    MatTabsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatDividerModule,
    MatTableModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    SkeletonTextModule,
    // UxgUserProfileMenuModule,
    AccountCardModule,
    UxgTableModule,
    InlineSVGModule.forRoot(),
    MatChipsModule,
    ModalModule.forRoot(),
    MatSlideToggleModule,
    AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [CustomerService, SmeDashboardComponent, ModalDialogService,ApiService,InvoiceRequestServices,
    FinanceRequestServices,DatePipe,FinancierService,FinanceBiddingService,SmeFinancierForBiddingServices,SmeDashboardServices,
    FinancierDashboardServices,IccDashboardServices,AcceptedFinanceServices,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } }
  ],
  bootstrap: [AppComponent],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    entryComponents: [ModalComponent]
})
export class AppModule { }
