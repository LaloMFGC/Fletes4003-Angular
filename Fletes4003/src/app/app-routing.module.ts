import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ValidartokenGuard } from './Components/Guards/validartoken.guard';


const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./Components/Auth/auth/auth.module').then( m=>m.AuthModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./Components/Protected/protected/Users/protected.module').then( m=>m.ProtectedModule),
        canActivate: [ValidartokenGuard],
        canLoad: [ValidartokenGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('./Components/Protected/protected/Admin/adminprotected.module').then( m=>m.AdminprotectedModule),
        canActivate: [ValidartokenGuard],
        canLoad: [ValidartokenGuard]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
