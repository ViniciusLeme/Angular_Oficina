import { CarFormComponent } from './car-form/car-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceOrderFormComponent } from './service-order-form/service-order-form.component';

const routes: Routes = [
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'dataForm', component: DataFormComponent },
  { path: 'formBuilder', component: FormBuilderComponent },
  { path: 'ownerForm', component: OwnerFormComponent },
  { path: 'carForm', component: CarFormComponent },
  { path: 'serviceForm', component: ServiceFormComponent },
  { path: 'serviceOrderForm', component: ServiceOrderFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'templateForm' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
