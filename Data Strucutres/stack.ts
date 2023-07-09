type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

class Stack<T> {
  public length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item } as SNode<T>;
    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    const head = this.head;

    if (this.length === 0) {
      this.head = undefined;
      return head?.value;
    }

    this.head = this.head?.prev;

    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  display() {
    let nodeIteration = this.head;
    for (let i = 0; i < this.length; ++i) {
      console.log(nodeIteration?.value);
      nodeIteration = nodeIteration?.prev;
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.display();
