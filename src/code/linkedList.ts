interface iLinkedList<T> {
  getLength(): number
  insertAt(item: T, index: number): void
  remove(item: T): T | undefined
  removeAt(index: number): T | undefined
  append(item: T): void
  prepend(item: T): void
  get(index: number): T | undefined
}

type tListNode<T> = {
  value: T,
  next?: tListNode<T>,
  prev?: tListNode<T>,
}

export default class SinglyLinkedList implements iLinkedList<number> {
  public length: number
  public head: any
  public node: tListNode<number> | null

  constructor(length: number, head: any | undefined) {
    this.length = length
    this.head = head
    this.node = null
  }

  getLength(): number {
    const length = 0
    return length
  }

  insertAt(item: number, index: number): void {

  }

  remove(item: number): number | undefined {
    return
  }

  removeAt(index: number): number | undefined {
    return
  }

  append(item: number): void {

  }

  prepend(item: number): void {

  }

  get(index: number): number | undefined {
    return
  }

}

const a = new SinglyLinkedList(12, undefined)
