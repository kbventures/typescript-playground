

// PREP
// Parameter for the LRU Cache Creation is max Capacity
// For indvidual nodes initial value
// 
// Constraints:
// Capcity is at least 1
// Why can be 0?

namespace LruCache {

        class Node{
        // So we can find any node in the hashmap o(1)
        key: number
        value: number
        next: Node | null
        prev: Node | null

        constructor(key:number,value:number){
            this.key = key; 
            this.value = value;
            this.next = null;
            this.prev = null; 
        }
    }

    export class LRUCache {

    capacity: number
    hashMap: Map<number,Node>
    size: number
    tail: Node | null
    head: Node | null

    constructor(capacity: number) {
        if(capacity <= 0){
            throw new Error("Capacity minimum is 1");1
        }
        this.capacity = capacity;
        this.size = 0; 
        this.hashMap = new Map<number,Node>()
        this.tail = null
        this.head = null
    }

//     int get(int key) Return the value of the key if the key exists, otherwise return -1.
//     void put(int key, int value) Update the value of the key if the key exists. 
//     Otherwise, add the key-value pair to the cache. 
//     If the number of keys exceeds the capacity from this operation, evict the least recently used key.
//     Operations thave moe the node to the front whenever they are accessed 



    // If Node exist
    get(key: number): Node | number{
        const nodeExist = this.hashMap.get(key)
        if(nodeExist){
            this.moveNodeToFront(key, nodeExist)
            return nodeExist
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        let nodeExist = this.hashMap.get(key)
        if(nodeExist){
            nodeExist.value = value; 
            this.moveNodeToFront(key,nodeExist)
        } else {
            this.enqueue(key,value)
        }
        
        if(this.size > this.capacity){
            this.dequeue()
        }   
        
    }

    enqueue(k:number,v:number){
        const newNode = new Node(k,v)
        this.hashMap.set(k,newNode)
        if(this.size == 0){
            this.tail = newNode;
            this.head = newNode;
            this.hashMap.set(k,newNode)
        } else {
            this.head!.next = newNode;
            newNode.prev = this.head;
            this.head = newNode;
        }
        this.size++
    }

    dequeue():number{
        let tempValue = this.tail!.value;
        if(this.size > 1){
        let temp = this.tail!.prev;
        this.tail = temp;
        this.tail!.prev = null; 
        this.hashMap.delete(this.tail!.key)
        } else {
            this.hashMap.delete(this.tail!.key)
            this.tail = null;
            this.head = null; 
        }        
        
        this.size--

        return tempValue;
    }

    // TO BE COMPLETED
    moveNodeToFront(key: number, node: Node) {
    if (this.size <= 1 || this.head === node) return; // already at front or only one node

    // Unlink node
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    // Update tail if node was tail
    if (this.tail === node) this.tail = node.prev;

    // Move node to front
    node.prev = null;
    node.next = this.head;
    if (this.head) this.head.prev = node;
    this.head = node;
}

}

}


const newLRUCache = new LruCache.LRUCache(2);

newLRUCache.enqueue

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */