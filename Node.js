export default class Node {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
