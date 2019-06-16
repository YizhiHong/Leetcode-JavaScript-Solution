/**
 Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
**/

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.hashMap = new Map();
    this.capacity = capacity;
    this.cache = new DoublyLinkedList();
  }
  get(key) {
    if (this.hashMap.has(key)) {
      let node = this.hashMap.get(key)
      this.update(node);
      return node.value; // return the value
    } else return -1;
  }
  // this method is to update if any get/put current node in the cache
  update(node, value = null) {
    let newNode = this.cache.append(node.key, value || node.value).tail; // 
    this.cache.erase(node); // erase the node
    this.hashMap.set(node.key, newNode); // overwrite the newNode to hashMap
  }
  put(key, value) {
    if (this.hashMap.has(key)) {
      this.update(this.hashMap.get(key), value);
    } else {
      if (this.hashMap.size === this.capacity) {
        let delNode = this.cache.deleteHead(); // reach the capacity, delete the first node, remove from hashMap
        this.hashMap.delete(delNode.key);
      }
      let newNode = this.cache.append(key, value).tail; // get appended node
      this.hashMap.set(key, newNode); // ref the node to map
    }
  }
}

/** With data pravicy 
 * 
 * 
 * 
 class LRUCache {
  constructor(capacity) {
    const hashMap = new Map();
    const cp = capacity;
    const cache = new DoublyLinkedList();
      
    this.hashMapSet = (k,v) => {hashMap.set(k,v)}
    this.hashMapHas = (key) => hashMap.has(key)
    this.hashMapGet = (key) => hashMap.get(key)
    this.hashMapDelete = (key) => hashMap.delete(key)
    this.size = () => hashMap.size
    this.getCapacity = () => cp
    this.getCache = () => cache
  }
  get(key) {
    if (this.hashMapHas(key)) {
      let node = this.hashMapGet(key)
      this.update(node);
      return node.value; // return the value
    } else return -1;
  }
  update(node, value = null) {
    let newNode = this.getCache().append(node.key, value || node.value).tail; // 
    this.getCache().erase(node); // erase the node
    this.hashMapSet(node.key, newNode); // overwrite the newNode to hashMap
  }
  put(key, value) {
    if (this.hashMapHas(key)) {
      this.update(this.hashMapGet(key), value);
    } else {
      if (this.size() === this.getCapacity() ){
        let delNode = this.getCache().deleteHead(); // reach the capacity, delete the first node, remove from hashMap
        this.hashMapDelete(delNode.key);
      }
      let newNode = this.getCache().append(key, value).tail; // get appended node
      this.hashMapSet(key, newNode); // ref the node to map
    }
  }
}
 * 
*/

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class DoublyLinkedListNode {
  constructor(key, value, next = null, previous = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class Comparator {
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

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


class DoublyLinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }
    
    erase(node){
        if(node === this.head){
            return this.deleteHead()
        }else if(node === this.tail) {
            return this.deleteTail()
        }
        if(node.previous !== null){
            node.previous.next = node.next
        }
        if(node.next !== null){
            node.next.previous = node.previous
        }
    }
    
  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  prepend(key, value) {
    // Make new node to be a head.
    const newNode = new DoublyLinkedListNode(key ,value, this.head);

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
  append(key, value) {
    const newNode = new DoublyLinkedListNode(key, value);

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
/** testing */
let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
// console.log(cache.cache)
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
