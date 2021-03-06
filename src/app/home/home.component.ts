import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id:string;

  constructor(private myroute:ActivatedRoute) {
    this.id=this.myroute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
