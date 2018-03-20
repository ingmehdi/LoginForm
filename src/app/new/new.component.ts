import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  id:string;

  constructor(private route:ActivatedRoute) {
    

    //get id from route
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);

   }

  ngOnInit() {
  }

}
