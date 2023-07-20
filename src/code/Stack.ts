type Node<T> = {
  value: T
  prev: Node<T> | undefined
}

class StackNode<T> implements Node<T> {
  public value
  public prev: Node<T> | undefined
  constructor(value: T) {
    this.value = value
  }
}

export default class Stack<T> {
  public length: number
  private head?: Node<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    const node = new StackNode(item)

    this.length ++
    if(!this.head) {
      this.head = node;
      return
    }

    node.prev = this.head
    this.head = node
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length -1)
    const head = this.head as Node<T>

    if(this.length === 0) {
      this.head = undefined
      return head?.value
    }
    this.head = head.prev

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
