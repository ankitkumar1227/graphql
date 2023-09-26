import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TODOS } from '../graphql.operations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_TODOS,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.todos = data.getTodos;
        console.log(data);
      });
  }
}
