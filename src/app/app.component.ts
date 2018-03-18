import { FirstComponent } from './first/first.component';
import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

FirstComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   name:string;
   password:string;
   statuts:boolean;
   names:Array<Object>;
   id:string="30003";
  constructor(private mylogin :LoginService,private myrouter:Router){
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
  this.statuts=result;
  if (this.statuts){
  //login succes
    this.myrouter.navigate(['/new']);
  }
  else{
    this.myrouter.navigate(['/other']);
  }
  this.loadnames();
  console.log(this.names);
}
loadnames(){
  this.names=this.mylogin.load()
}

}
