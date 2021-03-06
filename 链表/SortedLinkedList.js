import {LinkedList} from "./LinkedList.js";
import {defaultCompare, defaultEquals} from "../common/utils";


/**
 * 有序链表
 */
export class SortedLinkedList extends LinkedList{
  constructor(equalFn = defaultEquals, compareFn = defaultCompare) {
    super(equalFn);
    this.compareFn = compareFn;
  }

  /**
   * 向可排序链表中插入元素
   */
  insert(element, index) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }

    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  /**
   * 获取当前元素排序后的元素位置
   */
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === COMPARE.LESS_THAN) {
        return i;
      }
      current = current.next;
    }

    return i;
  }
}
