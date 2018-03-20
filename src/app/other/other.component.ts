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
  constructor( private route:ActivatedRoute,public shared:SharedService) {

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

}
