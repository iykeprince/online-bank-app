import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    HomeModule,
    AuthModule,
    DashboardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
