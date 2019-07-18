import { ProfileModule } from './profile/profile.module';
import { AuthGuard } from './../common/guard/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SendMoneyConfirmComponent } from './send-money/send-money-confirm/send-money-confirm.component';
import { SendMoneySuccessComponent } from './send-money/send-money-success/send-money-success.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileCardBankComponent } from './profile/profile-card-bank/profile-card-bank.component';
import { ProfileNotificationsComponent } from './profile/profile-notifications/profile-notifications.component';
import { SendMoneyModule } from './send-money/send-money.module';

const routes: Routes = [
  { path: 'account', component: AccountComponent, canActivate: [ AuthGuard ] }, 
  { path: 'transactions', component: TransactionsComponent, canActivate: [ AuthGuard ] }
]; 

@NgModule({ 
  declarations: [
    AccountComponent, 
    TransactionsComponent, 
  ],
  imports: [
    SharedModule, 
    RouterModule.forChild(routes),
    ProfileModule,
    SendMoneyModule
  ],
  providers: [
    
  ], 
  exports: [
  ]
})
export class DashboardModule { }
