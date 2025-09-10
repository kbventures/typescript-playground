var ImplementMinHeap;
(function (ImplementMinHeap) {
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
            while (true) {
                var left = idx * 2 + 1;
                var right = idx * 2 + 2;
                var smallest = idx;
                // check left and child child for smaller val
                if (this.heap.length > idx && this.heap[left] < this.heap[smallest])
                    smallest = left;
                if (this.heap.length > idx && this.heap[right] < this.heap[smallest])
                    smallest = right;
                if (smallest == idx)
                    break;
                _a = [this.heap[smallest], this.heap[idx]], this.heap[idx] = _a[0], this.heap[smallest] = _a[1];
                idx = smallest;
            }
        };
        MinHeap.prototype.bubbleUp = function () {
            var _a;
            var child = this.heap.length - 1;
            while (child > 0) {
                var parent_1 = Math.floor((child - 1) / 2);
                if (this.heap[parent_1] < this.heap[child])
                    break;
                _a = [this.heap[child], this.heap[parent_1]], this.heap[parent_1] = _a[0], this.heap[child] = _a[1];
                child = parent_1;
            }
        };
        MinHeap.prototype.add = function (val) {
            this.heap.push(val);
            this.bubbleUp();
        };
        MinHeap.prototype.delete = function () {
            var temp = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.bubbleDownFrom(0);
            return temp;
        };
        return MinHeap;
    }());
    ImplementMinHeap.MinHeap = MinHeap;
})(ImplementMinHeap || (ImplementMinHeap = {}));
var testMinHeapNameSpace = new ImplementMinHeap.MinHeap([8, 7, 6, 5, 4, 3, 2, 1]);
console.log(testMinHeapNameSpace.heap);
testMinHeapNameSpace.add(-1);
testMinHeapNameSpace.delete();
console.log(testMinHeapNameSpace.heap);
