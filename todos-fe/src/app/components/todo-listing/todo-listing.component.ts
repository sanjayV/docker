import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { BaseService } from '../../services/base-service';

@Component({
  selector: 'todo-listing',
  templateUrl: './todo-listing.component.html',
  styleUrls: ['./todo-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
    public todoListData: any = [];
    public taskStatus:boolean = true;
  constructor(
      public _baseService : BaseService
  ) {

  }
  ngOnInit() {
     this.getTasksList('pending');
  }

//func() for delete todo task
/**
params todoId it will be sent from html according to the clicked button
*/
  deleteTodo(todoId) {
      if(confirm("Are you sure to delete this task")) {
          this._baseService.deleteMethod('/task/'+todoId).subscribe(
          (data)=> {
              this.getTasksList('pending');
          }, (error)=> {
              //@TODO need to handle error
          });
      }
  }

//func() for getting the todo task list according to type overdue or pending
  getTasksList(type) {
      this.taskStatus = (type=='pending')?true:false;
      this._baseService.getMethod('/task').subscribe(
      (data)=> {
          this.todoListData = data;
      }, (error)=> {
           //@TODO need to handle error
      })
  }
}
