import { FirstComponent } from './first/first.component';
import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service';

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
  constructor(private mylogin :LoginService,private myrouter:Router,
    public myshared:SharedService){
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
  this.myshared.setUser('mehdi');
  this.myshared.setToken('fdgfgfgfdgfg');
  this.myshared.setLogin(true);
  console.log("shared data has been setted");
  if (this.statuts){
  //login succes
    this.myrouter.navigate(['/new']);
  }
  else{
    this.myrouter.navigate(['/other']);
  }
  this.loadnames();
  //console.log(this.names);
}
loadnames(){
  this.names=this.mylogin.load()
}
//navigate from typescript
//send optional params
goToFirst(){
  this.myrouter.navigate(['/first',{id:39494,name:'mehdi'}])
}
//send queryparams
goToOther(){
  this.myrouter.navigate(['/other'],{queryParams:{id:this.id,name:'mehdi',status:true}})
}
//send req params
goToNew(){
  this.myrouter.navigate(['/new',this.id])
}

}
