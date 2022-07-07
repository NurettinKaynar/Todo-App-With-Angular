import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];
  constructor() {
    this.name = 'Nurettin';
    this.items = [
      { description: 'Kahvaltı', action: true },
      { description: 'Alışveriş', action: false },
      { description: 'Spor', action: false },
      { description: 'Çalışma', action: true },
    ];
  }
}
