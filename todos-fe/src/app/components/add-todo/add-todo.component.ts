import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base-service';
import { Constants } from '../../constants/constant';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
    selector: 'todo-add',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
    public submitAttempt: boolean = false;
    public todoId: any;
    todoForm : FormGroup;

    date: DateModel;
    options: DatePickerOptions;

    constructor(
        public _formBuilder: FormBuilder,
        public _baseService : BaseService,
        public _constants : Constants,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.options = new DatePickerOptions();
        //form initialisation using form builder
        this.todoForm = _formBuilder.group({
            'name': ['', Validators.compose([Validators.required])],
            'description': [''],
            'dueDate': ['', Validators.compose([Validators.required])],
            'priority': ['', Validators.compose([Validators.required])],
        });

    }

    ngOnInit() {
        //get route params for update form
        //if id params will be there then it will get the details according to id
        this._route.params.subscribe(params => {
            var id = params['id'];
            this.todoId = id;
            if(id) {
                this._baseService.getMethod('/task/'+id).subscribe(
                (data)=> {
                    this.todoForm.controls['name'].setValue(data.name);
                    this.todoForm.controls['dueDate'].setValue('2017-03-03');
                    this.todoForm.controls['priority'].setValue(data.priority);
                    this.todoForm.controls['description'].setValue(data.description);
                }, (error)=> {

                })

            }
        });

    }

    //for submitting the todo add/update form
    onSubmit() {
        this.submitAttempt =  true;
        //to check if form is valid or not
        if(this.todoForm.valid) {
            this.todoForm.value.dueDate = this.todoForm.value.dueDate.formatted;
            if(!this.todoId) {
                //for adding todo task
                this._baseService.postMethod(this.todoForm.value, '/task').subscribe(
                (data)=> {
                    this._router.navigate(['/']);
                }, (error)=> {
                    //@TODO need to handle error
                })
            } else {
                //for update todo task
                this._baseService.putMethod(this.todoForm.value, '/task/'+this.todoId).subscribe(
                (data)=> {
                    this._router.navigate(['/']);
                }, (error)=> {
                    //@TODO need to handle error
                })
            }
        }
    }
}
