import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPedidosComponent } from './user-pedidos/user-pedidos.component';
import { UserOrdenesComponent } from './user-ordenes/user-ordenes.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDashboardComponent,
    UserPedidosComponent,
    UserOrdenesComponent,
    UserHomeComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule,
    FormsModule      
  ],
  providers: [
      
  ],
})
export class ProtectedModule { }
