type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor(length = 10) {
    this.length = length;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node: Node<T> = {
      value: item,
    };

    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;

    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error('Index out of bounds');
    }

    this.length++;

    if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }

    let curr = this.head;

    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next;
    }

    curr = curr as Node<T>;

    const node: Node<T> = {
      value: item,
    };

    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;

    if (curr.prev) {
      curr.prev.next = curr;
    }
  }

  append(item: T): void {
    this.length++;

    const node: Node<T> = {
      value: item,
    };

    if (!this.tail) {
      this.head = this.tail = node;

      return;
    }

    node.prev = this.tail;
    this.tail.next = node;

    this.tail = node;
  }

  remove(item: T): T | undefined {}

  get(idx: number): T | undefined {}

  removeAt(idx: number): T | undefined {}
}
