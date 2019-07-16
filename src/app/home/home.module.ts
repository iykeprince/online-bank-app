import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [IndexComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
