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
import { TablesComponent } from './Component/tables/tables.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { MatSortModule, MatTableModule } from '@angular/material';

const routes: Route[] = [
  {path: 'board', component: BoardComponent},
  {path: 'table', component: TablesComponent}
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
    TablesComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatSortModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationModalComponent, TodoEditComponent]
})
export class AppModule { }
