import { Injectable } from '@angular/core';

@Injectable()
export class SigninService {

  constructor() { }

  //login service logic
  session(email,password){
    if(email=="test@gmail.com"&& password=="1234"){
      return true;
    }
    else {return false;}
  }
}
