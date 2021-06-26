import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { ITodo } from 'src/app/interfaces/itodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  displayedcolumns: string[] = ['title', 'description', 'status'];
  datasource: MatTableDataSource<ITodo>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private todo: TodoService) { }

  ngOnInit() {
    this.datasource = new MatTableDataSource(this.todo.getTodos())
    this.datasource.sort = this.sort;
  }

}
