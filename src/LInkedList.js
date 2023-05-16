import Node from './Node';

class LinkedList {
  constructor(value = null) {
    this.head = value ? new Node(value) : undefined;
    this.tail = this.head;
    this.size = value ? 1 : 0;
  }

  append(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
}
