var MHeap = /** @class */ (function () {
    function MHeap(heap) {
        this.heap = heap;
        this.heapify(this.heap);
    }
    MHeap.prototype.heapify = function (h) {
        // Find lenght of non leaf nodes
        var length = this.heap.length;
        var index = Math.floor(length / 2) - 1;
        for (var i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.bubbleDownFrom(i);
        }
    };
    MHeap.prototype.bubbleDownFrom = function (index) {
        var _a;
        var length = this.heap.length;
        while (true) {
            var left = 2 * index + 1;
            var right = 2 * index + 2;
            var smallest = index;
            if (left < length && this.heap[left] < this.heap[smallest])
                smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest])
                smallest = right;
            if (smallest === index)
                break;
            _a = [this.heap[index], this.heap[smallest]], this.heap[smallest] = _a[0], this.heap[index] = _a[1];
            index = smallest;
        }
    };
    MHeap.prototype.add = function (num) {
        this.heap.push(num);
        this.bubbleup();
    };
    MHeap.prototype.bubbleup = function () {
    };
    MHeap.prototype.removeRoot = function () {
        var _a;
        _a = [this.heap[this.heap.length - 1], this.heap[0]], this.heap[0] = _a[0], this.heap[this.heap.length - 1] = _a[1];
        var removedElement = this.heap.pop();
        this.bubbleDownFrom(0);
        return removedElement;
    };
    return MHeap;
}());
var newMinHeap = new MHeap([8, 12, 14, 1, 6, 5, 1, 2, 3]);
console.log(newMinHeap.heap);
