import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { FeesComponent } from './fees/fees.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'help', component: HelpComponent }
]

@NgModule({
  declarations: [
    IndexComponent, 
    AboutUsComponent, 
    ContactUsComponent, 
    HelpComponent, FeesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes) 
  ] 
})
export class HomeModule { }
