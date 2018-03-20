import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  name:string;
  id:string;
  status:string;
  constructor( private route:ActivatedRoute) {

    //get params from queryparams
    this.id=this.route.snapshot.queryParamMap.get('id');
    this.name=this.route.snapshot.queryParamMap.get('name');
    this.status=this.route.snapshot.queryParamMap.get('status');
    console.log(this.id,this.name,this.status);


   }

  ngOnInit() {
  }

}
