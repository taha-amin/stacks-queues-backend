class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  // methods

  pushItem(item) {
    this.#list.push(item);
  }

  removeLast(item) {
    this.#list.pop(item);
  }

  topItem(item) {
    this.#list.peek(item);
  }

  //   get readableList() {
  //     return this.#list.toString();
  //   }

  //   get count() {
  //     return this.#list.length;
  //   }
}

class Queue {}

module.exports = { Stack, Queue };
