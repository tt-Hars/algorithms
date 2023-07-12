type iNode<T> = {
  value: T
  next?: iNode<T> | undefined
}

class QueueNode<T> implements iNode<T> {
  public value
  public next: iNode<T> | undefined
  constructor(value: T) {
    this.value = value
  }
}

export default class Queue<T> {
  public length: number
  public head?: iNode<T>
  public tail?: iNode<T>
  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node = new QueueNode(item)
    this.length++
    if(!this.tail) {
      this.tail = this.head = node 
      return
    }
    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if(!this.head) return undefined

    this.length--

    const head = this.head
    this.head = this.head.next

    head.next = undefined

    if(this.length === 0) {
      this.tail = undefined
    }

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
