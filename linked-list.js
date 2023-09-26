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
      this.tail = this.head
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (this.head == null) {
      this.head = newNode;
    }
    else {
      let currentHead = this.head
      newNode.next = currentHead;
      this.head = newNode;
    }
    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw "error";

    }
    if (this.head === this.tail) {
      let popNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return popNode.val;

    }
    else {
      let currentNode = this.head;
      let popNode = this.tail;
      while (currentNode.next !== popNode) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.tail.next = null;
      this.length -= 1;
      return popNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw "error";
    }
    if (this.length === 1) {
      let shiftNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return shiftNode.val;
    }
    else {
      let shiftNode = this.head;
      this.head = shiftNode.next;
      this.length -= 1;
      return shiftNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw "Error";
    }
    else {
      let currentNode = this.head;
      let count = 0;
      while (count !== idx) {
        count += 1;
        currentNode = currentNode.next
      }
      return currentNode.val;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw "Error";
    }
    else {
      let currentNode = this.head;
      let count = 0;
      while (count !== idx) {
        count += 1;
        currentNode = currentNode.next
      }
      currentNode.val = val;
    }

  }

  /** insertAt(idx, val): add node
   *  w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if (idx > this.length || idx < 0) {
      throw "Error, invalid index";
    }
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    else if (this.length === idx) {
      this.push(val);
      this.length += 1;
    }
    else {
      let currentNode = this.head;
      let count = 0;
      let udx = idx - 1;
      while (count !== udx) {
        count += 1;
        currentNode = currentNode.next
      }
      let continuation = currentNode.next
      currentNode.next = newNode
      newNode.next = continuation;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw "Error";
    }
    if (this.length === idx - 1) {
      this.pop()
      this.length -= 1;
    }
    else if (this.length === 1) {
      this.pop()
    }
    else {
      let currentNode = this.head;
      let count = 0;
      let udx = idx - 1;
      while (count !== udx) {
        count += 1;
        currentNode = currentNode.next
      }
      this.length -= 1;
      let removalVal = currentNode.next;
      currentNode.next = removalVal.next;
      return removalVal.val;

    }

  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let allvalues = 0;
    if (this.length === 0) {
      return 0;
    }
    else {
      while (currentNode !== this.tail) {
        allvalues += currentNode.val;
        currentNode = currentNode.next;
      }
      allvalues += this.tail.val;
      return (allvalues / this.length)
    }
  }
}

module.exports = LinkedList;

