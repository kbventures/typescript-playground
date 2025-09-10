// Time Complexity:
// Heapify: O(n) (efficient bottom-up)
// Insert/Delete: O(log n) per operation
// Peek: O(1)
// Space Complexity:
// O(n) (just the array)
var MinHeap = /** @class */ (function () {
    function MinHeap(heap) {
        if (heap === void 0) { heap = []; }
        this.heap = heap;
        this.heapify();
    }
    MinHeap.prototype.heapify = function () {
        for (var i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDownFrom(i);
        }
    };
    MinHeap.prototype.bubbleDownFrom = function (idx) {
        var _a;
        var length = this.heap.length;
        while (true) {
            var left = 2 * idx + 1;
            var right = 2 * idx + 2;
            var smallest = idx;
            if (left < length && this.heap[smallest] > this.heap[left])
                smallest = left;
            if (right < length && this.heap[smallest] > this.heap[right])
                smallest = right;
            if (idx == smallest)
                break;
            _a = [this.heap[smallest], this.heap[idx]], this.heap[idx] = _a[0], this.heap[smallest] = _a[1];
            idx = smallest;
        }
    };
    MinHeap.prototype.add = function (num) {
        this.heap.push(num);
        this.bubbleUpFrom();
    };
    MinHeap.prototype.bubbleUpFrom = function () {
        var _a;
        // index of the added number
        var idx = this.heap.length - 1;
        // find index of its parent
        while (idx > 0) {
            var parent_1 = Math.floor((idx - 1) / 2);
            if (this.heap[idx] >= this.heap[parent_1])
                break;
            _a = [this.heap[parent_1], this.heap[idx]], this.heap[idx] = _a[0], this.heap[parent_1] = _a[1];
            idx = parent_1;
        }
    };
    MinHeap.prototype.deleteRoot = function () {
        if (this.heap.length == 0)
            return null;
        if (this.heap.length == 1) {
            var temp = this.heap.pop();
            return temp;
        }
        this.heap[0] = this.heap[this.heap.length - 1];
        var deleted = this.heap.pop();
        this.heapify();
        return deleted;
    };
    MinHeap.prototype.peek = function () {
        if (this.heap.length == 0)
            return null;
        return this.heap[0];
    };
    return MinHeap;
}());
var testMinHeap = new MinHeap([10, 8, 0, 7, 6, 5, 4, 3]);
console.log(testMinHeap.heap);
testMinHeap.add(-2);
console.log(testMinHeap.heap);
