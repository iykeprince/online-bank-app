import { ProfileComponent } from './profile.component';
import { AuthGuard } from './../../common/guard/auth.guard';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';
import { ProfileCardBankComponent } from './profile-card-bank/profile-card-bank.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAccountComponent } from './profile-account/profile-account.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileAccountComponent },
      { path: 'card-bank-account', component: ProfileCardBankComponent },
      { path: 'notifications', component: ProfileNotificationsComponent }
    ]
  } 
]

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCardBankComponent,
    ProfileNotificationsComponent, 
    ProfileAccountComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
