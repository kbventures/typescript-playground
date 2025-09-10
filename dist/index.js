// Implement singly linked list
var LinkedListStackNameSpace;
(function (LinkedListStackNameSpace) {
    var Node = /** @class */ (function () {
        function Node(val) {
            this.val = val;
            this.next = null;
        }
        return Node;
    }());
    LinkedListStackNameSpace.Node = Node;
    var SinglyLinketList = /** @class */ (function () {
        function SinglyLinketList(head, size) {
            if (head === void 0) { head = null; }
            if (size === void 0) { size = 0; }
            this.head = head;
            this.size = size;
        }
        SinglyLinketList.prototype.add = function (val) {
            var newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
            }
            else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.size++;
        };
        SinglyLinketList.prototype.delete = function () {
            if (!this.head) {
                return undefined;
            }
            {
                this.head = this.head.next;
            }
            this.size--;
        };
        SinglyLinketList.prototype.peek = function () {
            if (!this.head) {
                return undefined;
            }
            else {
                return this.head.val;
            }
        };
        SinglyLinketList.prototype.length = function () {
            if (!this.head) {
                return undefined;
            }
            else {
                return this.size;
            }
        };
        SinglyLinketList.prototype.search = function (val) {
            var tempHead = this.head;
            while (tempHead) {
                if (tempHead.val == val) {
                    return true;
                }
                tempHead = tempHead.next;
            }
        };
        SinglyLinketList.prototype.merge = function () { };
        SinglyLinketList.prototype.reverse = function () { };
        return SinglyLinketList;
    }());
    LinkedListStackNameSpace.SinglyLinketList = SinglyLinketList;
})(LinkedListStackNameSpace || (LinkedListStackNameSpace = {}));
var newLinkedList = new LinkedListStackNameSpace.SinglyLinketList();
newLinkedList.add(0);
newLinkedList.add(1);
newLinkedList.add(2);
console.dir(newLinkedList, { depth: 0 });
newLinkedList.peek();
newLinkedList.search(1);
newLinkedList.length();
var LinkedListQueueNameSpace;
(function (LinkedListQueueNameSpace) {
    var Node = /** @class */ (function () {
        function Node(val) {
            this.val = val;
            this.next = null;
        }
        return Node;
    }());
    LinkedListQueueNameSpace.Node = Node;
    var SinglyLinketList = /** @class */ (function () {
        function SinglyLinketList(head, size) {
            if (head === void 0) { head = null; }
            if (size === void 0) { size = 0; }
            this.head = head;
            this.size = size;
        }
        SinglyLinketList.prototype.add = function (val) {
            var newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
            }
            else {
                this.head.next = newNode;
            }
            this.size++;
        };
        SinglyLinketList.prototype.delete = function () { };
        SinglyLinketList.prototype.peek = function () { };
        return SinglyLinketList;
    }());
    LinkedListQueueNameSpace.SinglyLinketList = SinglyLinketList;
})(LinkedListQueueNameSpace || (LinkedListQueueNameSpace = {}));
// A standard linked list class usually provides operations like: 
//     Adding a node at the head or tail
//     Deleting a node, 
//     Searching for a value, 
//     Reversing the list, 
//     Finding the length, 
//     Merging with another list
