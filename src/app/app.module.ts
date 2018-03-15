import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginService } from './services/login.service';
import { OtherComponent } from './other/other.component';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    OtherComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
