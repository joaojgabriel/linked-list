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

    let curr = this.head;
    for (let i = 0; i < this.size; ++i) {
      if (curr.value === value) return true;
      curr = curr.next;
    }

    return false;
  }

  find(value) {
    if (!this.size) return undefined;

    let curr = this.head;
    for (let i = 0; i < this.size; ++i) {
      if (curr.value === value) return i;
      curr = curr.next;
    }

    return null;
  }

  toString() {
    if (!this.size) return undefined;

    let str = '';

    let curr = this.head;
    for (let i = 0; i < this.size; ++i) {
      str += `( ${curr.value} ) -> `;
      curr = curr.next;
    }

    return `${str}null`;
  }

  insertAt(value, index) {
    if (this.size === index) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (this.size < index || index < 0) {
      return undefined;
    }

    this.size++;
    const node = new Node(value);
    const prev = this.#nodeAt(index - 1);
    node.prev = prev;
    node.next = prev.next;
    prev.next.prev = node;
    prev.next = node;

    return node;
  }

  removeAt(index) {
    if (this.size - 1 === index) {
      return this.pop();
    }

    if (this.size <= index || index < 0) {
      return undefined;
    }

    this.size--;
    if (index === 0) {
      const { head } = this;
      this.head = head.next;
      this.head.prev = null;
      return head.value;
    }

    const prev = this.#nodeAt(index - 1);
    const node = prev.next;
    prev.next = node.next;
    prev.next.prev = prev;

    return node.value;
  }
}
