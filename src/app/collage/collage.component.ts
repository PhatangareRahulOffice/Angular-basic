import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css']
})
export class CollageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //   Todo App
todoApp(todo:string){
  console.warn(todo);
  }

  name:string = "Rahul";
  //  IF Else condition start
  show = true;
 sname =false;
 data = true;
 data1:string= 'yes'

  //  IF Else condition end
// else condition start

// color = 'red';

// else condition end


// for loop as well as nested for loop
title:string = "Angular Learning"
users = ["Rahul", "Shivam", "Sagar", "Vaibhav"]
detabase:any=[
  {name:'Rahul', mail:'rahul@gmail.com', phone:'1111',accounts:['Bank', 'youtube']},
  {name:'Shivam', mail:'shivam@gmail.com', phone:'2222',accounts:['FaceBook', 'WhatsUp']},
  {name:'Sagar', mail:'sagar@gmail.com', phone:'3333',accounts:['Yahoo', 'Google']},

]


// style binding
// color="red";
// updatePaint(){
//   this.color = 'green'
// }

// bgColor = 'yellow'
// updateBgColor(){
//   this.bgColor = 'gray'
// }


 //  Toggle button
 display = true;
 toggle(){
  this.display = !this.display
 }



}


