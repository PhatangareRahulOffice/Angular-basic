import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
// import {mainData} from './register/register.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-first-project';
  data = ' I am Learning Angular from Scratch';
  a:number = 12;
  b:number = 10;

  displayVal:string = ''
  getVal(a:number,b:number):number
  {
    return a+b
  }

  getName(name:string){
    alert(name)
  }
  // getData(val:string){
  //   console.warn(val)
  //   this.displayVal = val 
  // }
  

 

}


