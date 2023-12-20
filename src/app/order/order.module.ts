import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgToastModule } from 'ng-angular-popup';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from '../app-routing.module';
import { PlaceOrderComponent } from './place-order/place-order.component';

@NgModule({
  declarations: [PlaceOrderComponent],
  imports: [
    CommonModule,
    NgToastModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [PlaceOrderComponent],
})
export class OrderModule {}