import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-listing/todo-listing.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

const routes: Routes = [
    {
        path: '',
        component: TodoListComponent,
    },
    {
        path: 'add',
        component: AddTodoComponent,
    },
    {
        path: 'add/:id',
        component: AddTodoComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
