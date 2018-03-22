import { StreamService } from './../services/stream.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  id:string;

  constructor(private route:ActivatedRoute,public shared:SharedService,private MyStream:StreamService) {
    

    //get id from route
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.shared.getUser());
    console.log(this.shared.getLogin());
    this.shared.setToken("541654165454541");

   }

  ngOnInit() {
  }
  loadme(){
    this.MyStream.createStream().subscribe(
      next=>{
        console.log(next);
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("Done");
      },
      
    )
  };
  loadme2(){
    this.MyStream.createStream2().subscribe(
      next=>{
        console.log(next);
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("Done");
      },
      
    )
  };
}
