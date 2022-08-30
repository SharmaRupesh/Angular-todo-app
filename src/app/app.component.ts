import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { Guid } from 'guid-typescript';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos: Todo[]= [];
  
  showCompleted: boolean= false;

  onSubmit(form: NgForm)
  {
    if(form.value.title=="")
    {
      alert("Please enter something.")
    }
    else
    {
      let todo = new Todo(Guid.create(),form.value.title, false);
      this.todos.push(todo);
      form.resetForm();
    }
  }
  
  onDelete(id: Guid)
  {
    let todo = this.todos.filter(x=>x.id===id)[0];
    let index = this.todos.indexOf(todo,0);
    if(index>-1)
    {
      this.todos.splice(index,1);
    }
    if(this.todos.length==0)
    {
      this.showCompleted=false;
    }
  }

  onComplete(id: Guid)
  {
    this.showCompleted=true;
    let todo = this.todos.filter(x => x.id===id)[0];
    todo.isComplete=true; 
  }

}