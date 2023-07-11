interface iNode<T> {
  value: T
  next: Node<T> | undefined
  prev: Node<T> | undefined
}

class Node<T> implements iNode<T> {
  public value
  public next: Node<T> | undefined
  public prev: Node<T> | undefined
  constructor(value: T) {
    this.value = value
  }
}
export interface iLinkedList<T> {
  length: number
  head?: Node<T> | undefined
  tail?: Node<T> | undefined
  getLength(): number
  traverse(index?: number): void
  remove(item: T): T | undefined
  append(item: T): void
  get(index: number): T | undefined
  insertAt(item: T, index: number): void
  removeAt(index: number): T | undefined
  prepend(item: T): void
}
export class SinglyLinkedList<T> implements iLinkedList<T> {
  public head?: Node<T> | undefined
  public tail?: Node<T> | undefined
  public length: number

  constructor() {
    this.length = 0
  }

  prepend(item: T): void {
    const node = new Node(item)
    this.length++
    if (!this.head) {
      this.head = this.tail = node
      return
    }
    node.next = this.head
    this.head.prev = node
    this.head = node
  }
  
  insertAt(item: T, idx: number): void {
    if (idx > this.length) throw new Error('mind the length')
    else if (idx === this.length) {
      this.append(item)
      return
    } else if (idx === 0) {
      this.prepend(item)
    }
    this.length++

    let curr = this.getAt(idx) as iNode<T>
    const node = new Node(item)
    node.next = curr
    node.prev = curr?.prev
    curr.prev = node
    if (node.prev) node.prev.next = node
  }

  append(item: T): void {
    this.length++
    const node = new Node(item)
    if (!this.tail) {
      this.head = this.tail = node
      return
    }
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  remove(item: T): T | undefined {
    let curr = this.head
    while (curr) {
      if (curr.value === item) break
      curr = curr.next
    }
    if (!curr) return

    return this.removeNode(curr)
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx)
    if (!node) return

    return this.removeNode(node)
  }

  getLength(): number {
    return this.length
  }

  traverse(index?: number): void {
    let curr = this.head
    if (!this.head) {
      return
    }
    while (curr) {
      console.log(curr)
      curr = curr.next
    }
  }

  getAt(idx: number): iNode<T> | undefined {
    let curr = this.head
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next
    }
    return curr
  }

  removeNode(node: iNode<T>): T | undefined {
    this.length--

    if (this.length === 0) {
      const out = this.head?.value
      this.head = this.tail = undefined
      return out
    }
    if (node.prev) node.prev.next = node.next

    if (node.next) node.next.prev = node.prev

    if (node === this.head) this.head = node.next

    if (node === this.tail) this.tail = node.next

    node.prev = node.next = undefined

    return node.value
  }
}

export default class DoublyLinkedList<T> extends SinglyLinkedList<T> {
  public length: number
  public head?: Node<T>
  public tail?: Node<T>

  constructor() {
    super()
    this.length = 0
  }

  prepend(item: T): void {
    const node = new Node(item)
    this.length++
    if (!this.head) {
      this.head = this.tail = node
      return
    }
    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) throw new Error('mind the length')
    else if (idx === this.length) {
      this.append(item)
      return
    } else if (idx === 0) {
      this.prepend(item)
    }
    this.length++

    let curr = this.getAt(idx) as iNode<T>
    const node = new Node(item)
    node.next = curr
    node.prev = curr?.prev
    curr.prev = node
    if (node.prev) node.prev.next = node
  }

  append(item: T): void {
    this.length++
    const node = new Node(item)
    if (!this.tail) {
      this.head = this.tail = node
      return
    }
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  remove(item: T): T | undefined {
    let curr = this.head
    while (curr) {
      if (curr.value === item) break
      curr = curr.next
    }
    if (!curr) return

    return this.removeNode(curr)
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx)
    if (!node) return

    return this.removeNode(node)
  }

  getLength(): number {
    return this.length
  }

  traverse(index?: number): void {
    let curr = this.head
    if (!this.head) {
      return
    }
    while (curr) {
      console.log(curr)
      curr = curr.next
    }
  }

  getAt(idx: number): iNode<T> | undefined {
    let curr = this.head
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next
    }
    return curr
  }

  removeNode(node: iNode<T>): T | undefined {
    this.length--

    if (this.length === 0) {
      const out = this.head?.value
      this.head = this.tail = undefined
      return out
    }
    if (node.prev) node.prev.next = node.next

    if (node.next) node.next.prev = node.prev

    if (node === this.head) this.head = node.next

    if (node === this.tail) this.tail = node.next

    node.prev = node.next = undefined

    return node.value
  }
}
