class ListNode {
  constructor(value) {
    this.nextNode = undefined;
    this.value = value;
  }
}
class LinkedList {
  constructor() {
    this.head = undefined;
    this.count = 0;
  }
  insert(value) {
    var newNode = new ListNode(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.count++;
  }
  remove(value) {
    if (this.size() === 0) {
      return false;
    } else if (this.head.value === value) {
      this.head = this.head.nextNode;
      this.count--;
      return true;
    } else {
      let previousNode = this.head;
      while (previousNode.nextNode && previousNode.nextNode.value !== value) {
        previousNode = previousNode.nextNode;
      }
      if (previousNode.nextNode && previousNode.nextNode.value === value) {
        previousNode.nextNode = previousNode.nextNode.nextNode;
        this.count--;
        return true;
      }
    }
    return false;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode !== undefined) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  size() {
    return this.count;
  }
  toString() {
    let output = "";
    let currentNode = this.head;
    while (currentNode !== undefined) {
      output += JSON.stringify(currentNode) + "\n";
      currentNode = currentNode.nextNode;
    }
    return output;
  }
}
module.exports.LinkedList = LinkedList;
