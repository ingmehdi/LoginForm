import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id:string;
  name:string="my first name is Mehdi";
  x:number=20;
  @Input() message :string;
  @Output() notify=new EventEmitter <number>();
  constructor(private route:ActivatedRoute) {

    //get optional params
    this.id=this.route.snapshot.paramMap.get('id');
    //this.name=this.route.snapshot.params['name'];
   // console.log(this.id,this.name);
   }

  ngOnInit() {
  }
  //send data to parent
  send(){
    this.notify.emit(this.x) ;
  }
  update (newV)
  {
    this.x=newV;

} 

}
