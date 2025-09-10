var MaxHeap = /** @class */ (function () {
    function MaxHeap(heap) {
        if (heap === void 0) { heap = []; }
        this.heap = heap;
        this.heapify();
    }
    MaxHeap.prototype.heapify = function () {
        for (var i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDownFrom(i);
        }
    };
    MaxHeap.prototype.bubbleDownFrom = function (idx) {
        var _a;
        var length = this.heap.length;
        while (true) {
            var left = 2 * idx + 1;
            var right = 2 * idx + 2;
            var bigguest = idx;
            if (length > left && this.heap[left] > this.heap[bigguest])
                bigguest = left;
            if (length > right && this.heap[right] > this.heap[bigguest])
                bigguest = right;
            if (idx == bigguest)
                break;
            _a = [this.heap[bigguest], this.heap[idx]], this.heap[idx] = _a[0], this.heap[bigguest] = _a[1];
            idx = bigguest;
        }
    };
    MaxHeap.prototype.add = function (num) {
        this.heap.push(num);
        this.bubbleUp();
    };
    MaxHeap.prototype.bubbleUp = function () {
        var _a;
        var idx = this.heap.length - 1;
        while (idx > 0) {
            var parent_1 = Math.floor(idx / 2);
            if (this.heap[parent_1] > this.heap[idx])
                break;
            _a = [this.heap[idx], this.heap[parent_1]], this.heap[parent_1] = _a[0], this.heap[idx] = _a[1];
            idx = parent_1;
        }
    };
    MaxHeap.prototype.deleteRoot = function () {
        if (this.heap.length == 0)
            return undefined;
        var last = this.heap.pop();
        if (this.heap.length == 0) {
            return last;
        }
        var max = this.heap[0];
        this.heap[0] = last;
        this.bubbleDownFrom(0);
        return max;
    };
    MaxHeap.prototype.peek = function () { };
    return MaxHeap;
}());
var MxHeap = new MaxHeap([0, 1, 2, 3, 4, 5, 6, 7, 8]);
console.log(MxHeap.heap);
MxHeap.add(30);
console.log(MxHeap.heap);
