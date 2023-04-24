import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryComponent } from './country/country.component';
import { CounterComponent } from './counter/counter.component';
import { CollageComponent } from './collage/collage.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { ModelsComponent } from './models/models.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    StudentListComponent,
    CountryComponent,
    CounterComponent,
    CollageComponent,
    TodoAppComponent,
    ModelsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
