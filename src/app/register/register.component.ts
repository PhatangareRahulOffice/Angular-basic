import { Component, ComponentFactoryResolver, NgModule, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' 
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// @NgModule({
//   declarations :[AppComponent,RegisterComponent],
//   imports:[BrowserModule,
//   ],
//   providers:[],
//   bootstrap:[AppComponent]
// })
export class RegisterComponent implements OnInit {

  userData:any = {}
  getData(data:NgForm){
    console.log(data)
    this.userData = data
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}


