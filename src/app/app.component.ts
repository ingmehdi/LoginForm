import { FirstComponent } from './first/first.component';
import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { SharedService } from './services/shared.service';

FirstComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

   name:string;
   password:string;
   statuts:boolean;
   names:Array<Object>;
   id:string="30003";
   //counter notify
   counter:number=0;
   user:{name,status,id ,age};

   @ViewChild (FirstComponent) myfirst:FirstComponent;
  constructor(private mylogin :LoginService,private myrouter:Router,
    public myshared:SharedService){
      //create user object

   this.user={name:'mehdi',status:false,age:60,id:25}
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
  
  //save token to user local storage
 // console.log("shared data has been setted");
  if (this.statuts){
  //login succes
  localStorage.setItem ('token','dfgfdsgfdsgfdg');

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
sendmessage(){
  return "mahdi fajraoui";

}
getFromChild(event){
  this.counter+=event;

}
changeX(){
  this.myfirst.update(13);

}
//get name from first component
getME(){console.log(this.myfirst.name);}
ngAfterViewInit(){

}
//change classes
changeClass(){
  return {
    'age':this.user.age>20,
    'id':this.user.id==25,
    'active':this.user.status

  }
}
//change style
changeStyle(){
  return{
    'color':this.user.status? 'green':'red',
    'background-color':this.user.id==25? 'gray':'blue',
    'font-size':this.user.age>30? '45px' :'20px'
  }

}

}
