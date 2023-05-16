/* eslint-disable no-plusplus */
import Node from './Node';

class LinkedList {
  constructor(value = null) {
    if (value) this.#addFirst(value);
    else {
      this.head = undefined;
      this.tail = this.head;
      this.size = 0;
    }
  }

  #addFirst(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.size = 1;
    return node;
  }

  append(value) {
    this.size++;
    if (this.size === 1) {
      return this.#addFirst(value);
    }
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    return node;
  }

  prepend(value) {
    this.size++;
    if (this.size === 1) {
      return this.#addFirst(value);
    }
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return node;
  }
}
