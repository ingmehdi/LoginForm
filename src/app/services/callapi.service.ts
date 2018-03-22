import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class CallapiService {

  constructor(private http:Http) { }
//call api
getPosts(){

  return this.http.get('https://jsonplaceholder.typicode.com/posts');

}
}
