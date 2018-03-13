import { FirstComponent } from './first/first.component';
import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

FirstComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   name:string;
   password:string;
  constructor(private mylogin :LoginService){
   var first= this.mylogin.login('admin','admin');
   var second= this.mylogin.login('admin','admin2');
   //console.log(first,second);
  console.log(this.name)
  }
  // show(){
  //   console.log(this.name)
  // }
  // select(){
  //   console.log("you have been selected some text")
  // }
  // blur(){
  //   console.log("input has benn lose focus")
  // }
  // focus(){
  //   console.log("input has benn onfoucs")
  // }
login(){

  var result=this.mylogin.login(this.name,this.password);
  console.log(result);
}

}
