import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import {Route, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TableComponent } from './table/table.component';
import { MatSortModule, MatTableModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const routes: Route[] = [
  {path: 'board', component: BoardComponent},
  {path: 'table', component: TableComponent}
];
const appRoutes = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    CreateTodoComponent,
    ConfirmationModalComponent,
    BoardComponent,
    TodoEditComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatSortModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent, TodoEditComponent]
})
export class AppModule { }
