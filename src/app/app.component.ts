import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskBoardComponent } from "./components/task-board/task-board.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent, AddTaskComponent, TaskBoardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task Management'
}
