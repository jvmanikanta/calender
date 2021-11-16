import { Component, OnInit } from '@angular/core';
import { NgModule  } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  datesList: Date[] = [];
  constructor() { }
  year:number = new Date().getFullYear();
  month:number = new Date().getMonth(); 
  inputYear:string ;
  numberOfDays: number = new Date(this.year,this.month+1,0).getDate();

  ngOnInit(): void {
    console.log(this.month);
    console.log(this.numberOfDays);
    for(let i = 1; i <= this.numberOfDays; i++){
      if(i != this.numberOfDays){
        console.log(i);
      let newDate = new Date(this.year,this.month,i);
      this.datesList.push(newDate);
      }else{
        console.log(i);
        let newDate = new Date(this.year,this.month+1,0);
        this.datesList.push(newDate)
      }
    }
    
    
  }
  next = () => {
     if(this.month < 11){
       this.month += 1;
       console.log("month " + this.month);
       this.numberOfDays = new Date(this.year,this.month+1,0).getDate();
       this.datesList = [];
       for(let i = 1; i <= this.numberOfDays; i++){
        if(i != this.numberOfDays){
        let newDate = new Date(this.year,this.month,i);
        this.datesList.push(newDate);
        }else{
          let newDate = new Date(this.year,this.month+1,0);
          this.datesList.push(newDate)
        }
      }
     }
  }

  prev = () => {
    if(this.month > 0){
      this.month -= 1;
      console.log("month " + this.month);
      this.numberOfDays = new Date(this.year,this.month+1,0).getDate();
       this.datesList = [];
       for(let i = 1; i <= this.numberOfDays; i++){
        if(i != this.numberOfDays){
        let newDate = new Date(this.year,this.month,i);
        this.datesList.push(newDate);
        }else{
          let newDate = new Date(this.year,this.month+1,0);
          this.datesList.push(newDate)
        }
      }
    }
  }

  yearChange = () => {
    let yearEl = <HTMLInputElement> document.getElementById("inputYear");
    let year = parseInt(yearEl.value);
    console.log(year);
    this.year = year;
    this.numberOfDays = new Date(this.year,this.month,0).getDate();
       this.datesList = [];
       for(let i = 1; i <= this.numberOfDays; i++){
        if(i != this.numberOfDays){
        let newDate = new Date(this.year,this.month,i);
        this.datesList.push(newDate);
        }else{
          let newDate = new Date(this.year,this.month+1,0);
          this.datesList.push(newDate)
        }
      }
  }


}
