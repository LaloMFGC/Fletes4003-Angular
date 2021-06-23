import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPedidosComponent } from './user-pedidos/user-pedidos.component';
import { UserOrdenesComponent } from './user-ordenes/user-ordenes.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: 'Pedidos',
        component: UserPedidosComponent
      },
      { path: 'Ordenes',
        component: UserOrdenesComponent
      },
      { path: 'Home',
        component: UserHomeComponent
      },
      { path: 'Profile',
        component: UserProfileComponent
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
export class ProtectedRoutingModule { }
