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
  lenses=["-2.00","-2.25","-2.75","+2.00","+2.25","+2.75",'3.00','3.25',"-3.75","+3.00","+3.25","+3.75",'4.00','-4.25',"-4.75","+4.00","+4.25","+4.75", "-5.00"]
  jsObject = {
    '2': ["-2.00","-2.25","-2.75","+2.00","+2.25","+2.75"],
    '3': ["-3.00","-3.25","-3.75","+3.00","+3.25","+3.75"],
    '4': ["-4.00","-4.25","-4.75","+4.00","+4.25","+4.75"],
    '5': ["-5.00","-5.25","-5.75","+5.00","+5.25","+5.75"],
    '6': ["-6.00","-6.25","-6.75","+6.00","+6.25","+6.75"],
    '7': ["-7.00","-7.25","-7.75","+7.00","+7.25","+7.75"],
    '8': ["-8.00","-8.25","-8.75","+8.00","+8.25","+8.75"],
    '9': ["-9.00","-9.25","-9.75","+9.00","+9.25","+9.75"],
    '10': ["-10.00","-10.25","-10.75","+10.00","+10.25","+10.75"],
    '11': ["-11.00","-11.25","-11.75","+11.00","+11.25","+11.75"],
};
  searchlense="+2.00"
  searchlense1
  searchModel
  numberfor=0
  newArray=[]
  value=[]
  constructor() { }
  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    return items.filter(it => it[field] == value);
  }
  focusFunction() {
    document.getElementById("myForm").style.display = "block";
   
   
   
    
   
  }
  focusOutFunction() {
    document.getElementById("myForm").style.display = "none";
    
  }
  arrayFor(){
    console.log(this.searchlense.length);
   
      if(this.searchlense.length==6){
        this.searchlense1=this.searchlense.slice(1,3)
        console.log(this.searchlense1);
        
    }
    
   if(this.searchlense.length>1 && (this.searchlense.charAt(0)=='-') || (this.searchlense.charAt(0)=='+')){
    this.searchlense1=this.searchlense.charAt(1)
   }
   if(this.searchlense.length==1){
    this.searchlense1=this.searchlense.charAt(0)
   }
    var item;
    if( this.jsObject.hasOwnProperty(this.searchlense1) ) {
        item = this.jsObject[this.searchlense1];
        this.value=item;
        console.log( this.value);
    }
  }
  number(number){
    console.log(number);
    var str1="+"
    var str2="-"
    var str3=str1.concat(str2);
    console.log(str3);
    
    if(number=='+'){
      this.searchlense=number
      this.numberfor=(this.numberfor+number)*10/10
      this.searchlense=this.searchlense.concat(this.numberfor.toString())
    }
    // this.numberfor=(this.numberfor+number)*10/10
    // this.searchlense=this.numberfor.toString()
    // console.log(this.numberfor);
    
      
  }
  ngOnInit() 
  {
    this.arrayFor()
  }

}
