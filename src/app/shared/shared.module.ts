import { AuthGuard } from './../common/guard/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfileSecondaryHeaderMenuComponent } from './profile-secondary-header-menu/profile-secondary-header-menu.component';
import { SendMoneyHeaderMenuComponent } from './send-money-header-menu/send-money-header-menu.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent, 
    SideBarComponent, 
    ProfileSecondaryHeaderMenuComponent, 
    SendMoneyHeaderMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SideBarComponent,
    ProfileSecondaryHeaderMenuComponent,
    SendMoneyHeaderMenuComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
