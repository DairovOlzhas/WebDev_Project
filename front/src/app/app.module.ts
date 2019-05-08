import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import {QrscannerComponent} from './qrscanner/qrscanner.component';
import { MainComponent } from './main/main.component';
import { WaiterComponent } from './waiter/waiter.component';
import { ShefComponent } from './shef/shef.component';
import { AdminComponent } from './admin/admin.component';
import {ApiService} from './shared/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    QrscannerComponent,
    MainComponent,
    WaiterComponent,
    ShefComponent,
    AdminComponent
  ],
  imports: [
    NgQrScannerModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
