/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
    }
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    let currentHead = this.head
    newNode.next = currentHead;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw "error";
    }
    else {
      let currentNode = this.head;
      let popNode = this.tail;
      while (currentNode !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
      return popNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw "error";
    }
    else {
      let shiftNode = this.head;
      this.head = shiftNode.next
      return shiftNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let count = 0;
    while (count !== idx) {
      count += 1;
      currentNode = currentNode.next
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let count = 0;
    while (count === idx) {
      count += 1;
      currentNode = currentNode.next
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let count = 0;
    let udx = idx - 1;
    while (count < udx) {
      count += 1;
      currentNode = currentNode.next
    }
    currentNode.val = val;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let count = 0;
    let udx = idx - 1;
    while (count < udx) {
      count += 1;
      currentNode = currentNode.next
    }
    let removalVal = currentNode.next;
    currentNode.next = removalVal.next;
    return removalVal.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let count = 0;
    let allvalues = 0;
    while (currentNode !== this.tail) {
      currentNode = currentNode.next;
      count += 1;
      allvalues += currentNode.val;
    }
    console.log(allvalues / count)
  }
}

module.exports = LinkedList;

