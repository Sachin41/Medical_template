import { Component, OnInit, Pipe } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class MyOrderComponent implements OnInit {
  lense=["-2.00","-2.25","-2.75","+2.00","+2.25","+2.75",]
  lenseSize=[
    {
    '2':["-2.00","-2.25","-2.75","+2.00","+2.25","+2.75"]
    },
    {
    '3':['3.00','3.25']
    },
    {
    '4':['4.00','-4.25']
    }
    ];
  searchlense
  searchModel
  constructor() { }
  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    return items.filter(it => it[field] == value);
  }
  focusFunction() {
    document.getElementById("myForm").style.display = "block";
    console.log(this.lenseSize);
    
   
  }
  
  focusOutFunction() {
    document.getElementById("myForm").style.display = "none";
    
  }
  number(number){
    console.log(number)
    // this.searchlense=(this.searchlense*10)+number
    console.log(this.searchlense)
  }
  ngOnInit() {
  }

}
