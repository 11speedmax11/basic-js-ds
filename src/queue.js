const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null; // голова очереди
    this.tail = null; // хвост очереди
  }

  enqueue(value) { // добавление элемента в конец очереди
    const newNode = new ListNode(value); // создаем новый узел списка
    if (!this.head) { // если очередь пуста
      this.head = newNode; // устанавливаем голову и хвост на новый узел
      this.tail = newNode;
    } else { // если очередь не пуста
      this.tail.next = newNode; // добавляем новый узел в конец списка
      this.tail = newNode; // обновляем указатель на хвост очереди
    }
  }

  dequeue() { // извлечение элемента из начала очереди
    if (!this.head) return null; // если очередь пуста, возвращаем null
    const value = this.head.value; // сохраняем значение элемента головы очереди
    this.head = this.head.next; // перемещаем указатель на голову на следующий узел списка
    return value; // возвращаем сохраненное значение элемента головы очереди
  }

  getUnderlyingList() { // получение списка узлов очереди
    return this.head; // возвращаем первый узел списка
  }
}

module.exports = {
  Queue
};
