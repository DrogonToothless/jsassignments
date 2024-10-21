class Queue {
  constructor() {
    this.data = [];
    this.otherData = [];
  }
  enqueue(element) {
    this.data.push(element);
  }
  dequeue() {
    this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  size() {
    return this.data.length;
  }
}
