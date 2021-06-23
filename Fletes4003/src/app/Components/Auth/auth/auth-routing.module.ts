import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from '../../Auth/pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { MainComponent } from '../pages/main/main.component';
import { ForgotPassComponent } from '../pages/forgot-pass/forgot-pass.component';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { ResetPassComponent } from '../pages/reset-pass/reset-pass.component';


const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home',
        component: HomeComponent
      },
      { path: 'login',
        component: LoginComponent
      },
      { path: 'sign-in',
        component: SignInComponent
      },
      { path: 'lost-pass',
        component: ForgotPassComponent
      },
      { path: 'navbar',
        component: NavbarComponent
      },
      { path: 'resetpass',
        component: ResetPassComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
