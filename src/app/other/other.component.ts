import { CallapiService } from './../services/callapi.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  name:string;
  id:string;
  status:string;
  posts:any;
  constructor( private route:ActivatedRoute,public shared:SharedService,
    private call :CallapiService) {

    //get params from queryparams
    this.id=this.route.snapshot.queryParamMap.get('id');
    this.name=this.route.snapshot.queryParamMap.get('name');
    this.status=this.route.snapshot.queryParamMap.get('status');
    console.log(this.shared.getToken());
    console.log(this.shared.getLogin());
    this.shared.setUser("new name from new component");

   }

  ngOnInit() {
  }
//call api
CallAPI(){
  this.call.getPosts().subscribe(
    next=>{
      console.log(next);
    },
    error=>{
      console.log(error)
    },
    ()=>{
      console.log('Done');
    }
  )
}
}
