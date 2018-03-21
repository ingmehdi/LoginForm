import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //define user data
  email:string;
  password:string;
  status:boolean;
  error:boolean;

  constructor(private signin :SigninService,private router:Router) {
    
   }

  ngOnInit() {
  }
  //singin user
  singIn(){
    //call for service

    this.status=this.signin.session(this.email,this.password);
    if(this.status){

      this.router.navigate(['home/1234']);
    }
    else{ this.error=true;}
  }

}
