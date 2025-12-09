// PREP
// Parameter for the LRU Cache Creation is max Capacity
// For indvidual nodes initial value
// 
// Constraints:
// Capcity is at least 1
// Why can be 0?
var LruCache;
(function (LruCache) {
    var Node = /** @class */ (function () {
        function Node(key, value) {
            this.key = key;
            this.value = value;
            this.next = null;
            this.prev = null;
        }
        return Node;
    }());
    var LRUCache = /** @class */ (function () {
        function LRUCache(capacity) {
            if (capacity <= 0) {
                throw new Error("Capacity minimum is 1");
                1;
            }
            this.capacity = capacity;
            this.size = 0;
            this.hashMap = new Map();
            this.tail = null;
            this.head = null;
        }
        //     int get(int key) Return the value of the key if the key exists, otherwise return -1.
        //     void put(int key, int value) Update the value of the key if the key exists. 
        //     Otherwise, add the key-value pair to the cache. 
        //     If the number of keys exceeds the capacity from this operation, evict the least recently used key.
        //     Operations thave moe the node to the front whenever they are accessed 
        // If Node exist
        LRUCache.prototype.get = function (key) {
            var nodeExist = this.hashMap.get(key);
            if (nodeExist) {
                this.moveNodeToFront(key, nodeExist);
                return nodeExist;
            }
            else {
                return -1;
            }
        };
        LRUCache.prototype.put = function (key, value) {
            var nodeExist = this.hashMap.get(key);
            if (nodeExist) {
                nodeExist.value = value;
                this.moveNodeToFront(key, nodeExist);
            }
            else {
                this.enqueue(key, value);
            }
            if (this.size > this.capacity) {
                this.dequeue();
            }
        };
        LRUCache.prototype.enqueue = function (k, v) {
            var newNode = new Node(k, v);
            this.hashMap.set(k, newNode);
            if (this.size == 0) {
                this.tail = newNode;
                this.head = newNode;
                this.hashMap.set(k, newNode);
            }
            else {
                this.head.next = newNode;
                newNode.prev = this.head;
                this.head = newNode;
            }
            this.size++;
        };
        LRUCache.prototype.dequeue = function () {
            var tempValue = this.tail.value;
            if (this.size > 1) {
                var temp = this.tail.prev;
                this.tail = temp;
                this.tail.prev = null;
                this.hashMap.delete(this.tail.key);
            }
            else {
                this.hashMap.delete(this.tail.key);
                this.tail = null;
                this.head = null;
            }
            this.size--;
            return tempValue;
        };
        // TO BE COMPLETED
        LRUCache.prototype.moveNodeToFront = function (key, node) {
            if (this.size <= 1 || this.head === node)
                return; // already at front or only one node
            // Unlink node
            if (node.prev)
                node.prev.next = node.next;
            if (node.next)
                node.next.prev = node.prev;
            // Update tail if node was tail
            if (this.tail === node)
                this.tail = node.prev;
            // Move node to front
            node.prev = null;
            node.next = this.head;
            if (this.head)
                this.head.prev = node;
            this.head = node;
        };
        return LRUCache;
    }());
    LruCache.LRUCache = LRUCache;
})(LruCache || (LruCache = {}));
var newLRUCache = new LruCache.LRUCache(2);
newLRUCache.enqueue;
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */ 
