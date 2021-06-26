import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, MatTableDataSource } from '@angular/material';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'status'];
  dataSource: MatTableDataSource<ITodo>;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ITodo>(this.todoService.getTodos());
    this.dataSource.sort = this.sort;
  }

}
