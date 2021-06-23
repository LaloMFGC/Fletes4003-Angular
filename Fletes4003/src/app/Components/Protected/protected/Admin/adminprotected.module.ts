import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminprotectedRoutingModule } from './adminprotected-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOrdenesComponent } from './admin-ordenes/admin-ordenes.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import { SigninComponent } from './signin/signin.component';
import { AdminAsignarComponent } from './admin-asignar/admin-asignar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminFacturacionComponent } from './admin-facturacion/admin-facturacion.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminOrdenesComponent,
    AdminProfileComponent,
    AdminPedidosComponent,
    SigninComponent,
    AdminAsignarComponent,
    AdminFacturacionComponent
  ],
  imports: [
    CommonModule,
    AdminprotectedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    
  ],
})
export class AdminprotectedModule { }
