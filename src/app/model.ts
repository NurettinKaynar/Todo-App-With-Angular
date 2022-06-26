import { TodoItem } from "./todoItem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = "Nurettin";
    this.items = [
      { description: "kahvaltı", action: "yes" },
      { description: "spor", action: "yes" },
      { description: "alışveriş", action: "no" }
    ];
  }
}
