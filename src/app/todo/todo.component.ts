import { Component, OnInit } from '@angular/core';
import { Model } from '../model/model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  displayAll: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  model = new Model();
  // message = '';
  //addItem(txtItem:any){
  //console.log(txtItem.value)
  //}
  getName() {
    return this.model.name;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  addItem(value: string) {
    // this.message = value;
    if (value != '') {
      this.model.items.push({ description: value, action: false });
    } else alert('bilgi gir');
  }
}
