var ImplementMinHeap;
(function (ImplementMinHeap) {
    var MinHeapP = /** @class */ (function () {
        function MinHeapP(heap) {
            if (heap === void 0) { heap = []; }
            this.heap = heap;
            this.heapify(heap);
        }
        MinHeapP.prototype.heapify = function (heap) {
            // Iterate through the non leaf nodes
            for (var i = Math.floor(5 / 2) - 1; i >= 0; i--) {
                this.bubbleDownFrom(i);
            }
        };
        MinHeapP.prototype.bubbleDownFrom = function (idx) {
            var _a;
            var length = this.heap.length;
            while (true) {
                var left = idx * 2 + 1;
                var right = idx * 2 + 2;
                var smallest = idx;
                if (left < length && this.heap[left] < this.heap[smallest])
                    smallest = left;
                if (right < length && this.heap[right] < this.heap[smallest])
                    smallest = right;
                if (idx == smallest)
                    break;
                _a = [this.heap[smallest], this.heap[idx]], this.heap[idx] = _a[0], this.heap[smallest] = _a[1];
                idx = smallest;
            }
        };
        MinHeapP.prototype.bubbleUp = function () { };
        MinHeapP.prototype.delete = function () { };
        MinHeapP.prototype.peek = function () { };
        return MinHeapP;
    }());
    ImplementMinHeap.MinHeapP = MinHeapP;
})(ImplementMinHeap || (ImplementMinHeap = {}));
var newMinHeapV0 = new ImplementMinHeap.MinHeapP([5, 4, 3, 2, 1]);
console.log(newMinHeapV0.heap);
