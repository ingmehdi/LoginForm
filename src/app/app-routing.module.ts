import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { componentFactoryName } from '@angular/compiler';

export const routes: Routes = [
  {path:'',component:OtherComponent},
  {path:'other',component:OtherComponent},
  {path:'first',component:FirstComponent},
  {path:"*",component:OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
