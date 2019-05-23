import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DatePickerModule } from 'ng2-datepicker';
// import { Http } from "@angular/http";
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePipe } from './pipes/date-pipe';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-listing/todo-listing.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { BaseService } from './services/base-service';
import { Constants } from './constants/constant';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  providers: [BaseService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
