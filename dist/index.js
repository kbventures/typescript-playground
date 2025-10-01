// Stack singly linked list
var DoublyLinkedstList;
(function (DoublyLinkedstList_1) {
    var Node = /** @class */ (function () {
        function Node(val, next, prev) {
            if (next === void 0) { next = null; }
            if (prev === void 0) { prev = null; }
            this.value = val;
            this.next = next;
            this.prev = prev;
        }
        return Node;
    }());
    DoublyLinkedstList_1.Node = Node;
    var DoublyLinkedstList = /** @class */ (function () {
        function DoublyLinkedstList(start, end, size) {
            if (start === void 0) { start = null; }
            if (end === void 0) { end = null; }
            if (size === void 0) { size = 0; }
            this.start = start;
            this.end = end;
            this.size = size;
        }
        DoublyLinkedstList.prototype.enqueue = function (val) {
            var newNode = new Node(val);
            if (!this.start) {
                this.start = newNode;
                this.end = newNode;
            }
            else {
                var temp = this.end;
                this.end.next = newNode;
                this.end = newNode;
                this.end.prev = temp;
            }
            this.size++;
        };
        DoublyLinkedstList.prototype.dequeue = function () {
            if (!this.start) {
                return undefined;
            }
            else if (!this.start.next) {
                var returnVal = this.start;
                this.start = null;
                this.end = null;
                this.size = 0;
                return returnVal;
            }
            else {
                var returnVal = this.start;
                this.start = this.start.next;
                this.start.prev = null;
                this.size--;
                return returnVal;
            }
        };
        DoublyLinkedstList.prototype.peekStart = function (val) { };
        DoublyLinkedstList.prototype.peekEnd = function () { };
        // Move any node to the front
        DoublyLinkedstList.prototype.MoveAnyNodeToFront = function (node) {
            var result = this.RemoveSpecificNode(node);
            if (!result)
                return;
            var temp = this.end;
            this.end.next = node;
            this.end = node;
            node.prev = temp;
        };
        DoublyLinkedstList.prototype.RemoveSpecificNode = function (node) {
            if (!node)
                return undefined;
            // Doubly linkedlist is empty
            if (!this.start && !this.end) {
                return undefined;
            }
            // One node left
            if (this.start == node && this.end == node) {
                this.start = null;
                this.end = null;
                this.size--;
                return undefined;
            }
            if (this.start == node) {
                var temp = this.start.next;
                temp.prev = null;
                this.start = temp;
                this.size--;
                return node;
            }
            if (this.end == node) {
                var temp = this.end.prev;
                this.end = temp;
                this.size--;
                return node;
            }
            var left = node.prev;
            var right = node.next;
            left.next = right;
            right.prev = left;
            this.size--;
            return node;
        };
        DoublyLinkedstList.prototype.searchNode = function (node) {
            var temp = this.start;
            while (temp) {
                if (temp == node)
                    return true;
                temp = temp.next;
            }
            return false;
        };
        DoublyLinkedstList.prototype.searchNodeValue = function (val) {
            var temp = this.start;
            while (temp) {
                // node found
                if (temp.value == val)
                    return temp;
                temp = temp.next;
            }
            // Not found
            return undefined;
        };
        return DoublyLinkedstList;
    }());
    DoublyLinkedstList_1.DoublyLinkedstList = DoublyLinkedstList;
})(DoublyLinkedstList || (DoublyLinkedstList = {}));
// For the LeetCode LRU Cache, you absolutely need methods that support:
// MoveAnyNodeToFront(node) → because when a key is accessed, its node must move to the head.
// RemoveSpecificNode(node) → because when capacity is exceeded, you need to evict the least recently used node (tail).
// Other helpers like searchByValue, searchNode, or peekStart/peekEnd are not strictly required if you manage nodes via a HashMap<Node>.
