import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import { AdminOrdenesComponent } from './admin-ordenes/admin-ordenes.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SigninComponent } from './signin/signin.component';
import { AdminAsignarComponent } from './admin-asignar/admin-asignar.component';
import { AdminFacturacionComponent } from './admin-facturacion/admin-facturacion.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'Pedidos',
        component: AdminPedidosComponent
      },
      { path: 'Ordenes',
        component: AdminOrdenesComponent
      },
      { path: 'Home',
        component: AdminHomeComponent
      },
      { path: 'Profile',
        component: AdminProfileComponent
      },
      { path: 'SignIn',
        component: SigninComponent
      },
      { path: 'Asignar',
        component: AdminAsignarComponent
      },
      { path: 'Facturar',
        component: AdminFacturacionComponent
      },
      {
        path: '**',
        redirectTo: 'Home'
      }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminprotectedRoutingModule { }
