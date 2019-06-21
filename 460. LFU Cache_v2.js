/**
 * @param {number} capacity
 */
class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.set = new Map(); // key -> node
    this.lists = new Map(); // count -> listNode
    this.min = 1;
  }
  get(key) {
    if (!this.set.has(key)) return -1;
    // update the counter
    this.update(this.set.get(key));

    return this.set.get(key).val;
  }

  update(node) {
    // 1.update counter
    let prev_count = node.count;
    let curr_count = ++node.count;

    // 2.delete entry node in counter lists
    this.lists.get(prev_count).erase(node.listNode);

    if (this.lists.get(prev_count).head === null && prev_count === this.min) {
      // delete the min counter
      this.lists.delete(prev_count);
      this.min++;
    }

    // 3.append the node on the front
    if (!this.lists.has(curr_count)) {
      this.lists.set(curr_count, new DoublyLinkedList());
    }
    this.lists.get(curr_count).prepend(node.key);

    // 4.update new pointer
    node.listNode = this.lists.get(curr_count).head;
  }

  put(key, value) {
    if (this.capacity <= 0) return;

    //if key already exist
    if (this.set.has(key)) {
      this.set.get(key).val = value;
      this.update(this.set.get(key));
    } else {
      // if size reach the capacity
      if (this.set.size === this.capacity) {
        //delete the last Listnode
        let evict = this.lists.get(this.min).tail.value;

        this.lists.get(this.min).deleteTail();

        //delete
        this.set.delete(evict);
      }

      this.min = 1;

      if (!this.lists.has(this.min)) {
        this.lists.set(this.min, new DoublyLinkedList());
      }

      this.lists.get(this.min).prepend(key);

      this.set.set(
        key,
        new node(key, value, this.min, this.lists.get(this.min).head)
      );
    }
  }
}
/** assets **/
/**
 * Node object
 * @param {number} key
 * @param {number} value
 * @param {number} counter
 * @param {listNode} point to double linked-list
 */
class node {
  constructor(key, value, count, listNode) {
    this.key = key;
    this.val = value;
    this.count = count;
    this.listNode = listNode;
  }
}

class Comparator {
  /**
   * @param {function(a: *, b: *)} [compareFunction]
   */
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }
}

class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  erase(node) {
    if (node === this.head) {
      return this.deleteHead();
    } else if (node === this.tail) {
      return this.deleteTail();
    }
    if (node.previous !== null) {
      node.previous.next = node.next;
    }
    if (node.next !== null) {
      node.next.previous = node.previous;
    }
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new DoublyLinkedListNode(value, this.head);

    // If there is head, then it won't be head anymore.
    // Therefore, make its previous reference to be new node (new head).
    // Then mark the new node as head.
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;

    // Attach current tail to the new node's previous reference.
    newNode.previous = this.tail;

    // Set new node to be the tail of linked list.
    this.tail = newNode;

    return this;
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      // No tail to delete.
      return null;
    }

    if (this.head === this.tail) {
      // There is only one node in linked list.
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes in linked list...
    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedTail;
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }
}
