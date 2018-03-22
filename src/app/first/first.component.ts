import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id:string;
  name:string;
  @Input() message :string;
  constructor(private route:ActivatedRoute) {

    //get optional params
    this.id=this.route.snapshot.paramMap.get('id');
    this.name=this.route.snapshot.params['name'];
    console.log(this.id,this.name);
   }

  ngOnInit() {
  }

}
