import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '.app-root',
  // selector: '#app-root',
  selector: 'app',
  templateUrl: './app.component.html',
  // template:"<product></product>"
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';
  todoItem = {
    description: 'Breakfast',
    action: true,
  };
  getTitle() {
    return this.title;
  }
}
