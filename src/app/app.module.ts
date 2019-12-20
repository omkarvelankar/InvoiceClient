import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './materials/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { InvoiceService } from './services/invoice.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceformComponent } from './components/invoiceform/invoiceform.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { VendermasterComponent } from './components/vendermaster/vendermaster.component';
import { InvoicemasterComponent } from './components/invoicemaster/invoicemaster.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvoiceformComponent,
    NavigationComponent,
    InvoiceComponent,
    VendermasterComponent,
    InvoicemasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [InvoiceformComponent]
})
export class AppModule { }
