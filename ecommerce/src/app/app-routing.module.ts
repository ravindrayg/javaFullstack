import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [{
  path: '',
  component: HeaderComponent,
  children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
  ]
},
{ path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
