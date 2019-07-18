import { AuthGuard } from './../../common/guard/auth.guard';
import { SendMoneySuccessComponent } from './send-money-success/send-money-success.component';
import { SendMoneyComponent } from './../../customer/send-money/send-money.component';
import { SendMoneyConfirmComponent } from './send-money-confirm/send-money-confirm.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMoneyMainComponent } from './send-money-main/send-money-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'send-money', component: SendMoneyComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: SendMoneyMainComponent },
      { path: 'confirm', component: SendMoneyConfirmComponent },
      { path: 'success', component: SendMoneySuccessComponent },
    ]
  }
];

@NgModule({
  declarations: [
    SendMoneyComponent,
    SendMoneyMainComponent,
    SendMoneyConfirmComponent,
    SendMoneySuccessComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    
  ]
})
export class SendMoneyModule { }
