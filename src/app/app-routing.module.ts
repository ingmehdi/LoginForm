import { AppComponent } from './app.component';

import { NewComponent } from './new/new.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GuardGuard } from './services/guard.guard';



export const routes: Routes = [
  {path:'',
  component:AppComponent
  },
  //{path:'login',component:LoginComponent},
  //{path:'home/:id',component:HomeComponent},
  {path:'other',component:OtherComponent},
  {path:'first',component:FirstComponent},
  //{path:"*",component:OtherComponent},
  {path:'new/:id',
  canActivate:[GuardGuard],
  component:NewComponent
  },
  {path:'**',component:OtherComponent}
  //{path:"**",redirectTo:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
