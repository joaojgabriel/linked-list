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
    if (!value) return undefined;

    this.size++;
    if (this.size === 1) {
      return this.#addFirst(value);
    }

    const node = new Node(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    return node;
  }

  prepend(value) {
    if (!value) return undefined;

    this.size++;
    if (this.size === 1) {
      return this.#addFirst(value);
    }

    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return node;
  }

  #nodeAt(index) {
    if (index >= this.size) return undefined;

    let curr = this.head;
    for (let i = 0; i < index; ++i) {
      curr = curr.next;
    }

    return curr;
  }

  at(index) {
    return this.#nodeAt(index)?.value;
  }

  pop() {
    if (!this.size) return undefined;

    const { tail } = this;

    this.size--;
    if (this.size) {
      this.tail = tail.prev;
      this.tail.next = null;
    }

    return tail.value;
  }

  contains(value) {
    if (!this.size) return undefined;

    const curr = this.head;
    for (let i = 0; i < this.size; ++i) {
      if (curr.value === value) return true;
    }

    return false;
  }
}
