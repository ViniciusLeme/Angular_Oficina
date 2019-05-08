import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormDebuggerComponent } from './form-debugger/form-debugger.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { SharedModule } from '@shared/shared.module';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { CarFormComponent } from './car-form/car-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TemplateFormComponent,
    DataFormComponent,
    FormDebuggerComponent,
    FormBuilderComponent,
    OwnerFormComponent,
    CarFormComponent,
    ServiceFormComponent,
    ServiceOrderFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
