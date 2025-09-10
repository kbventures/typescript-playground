function lastStoneWeight(stones) {
    var MaxHeap = /** @class */ (function () {
        function MaxHeap(heap) {
            this.heap = heap;
            this.heapify();
            console.log(this.heap);
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
                var left = idx * 2 + 1;
                var right = idx * 2 + 2;
                var smallest = idx;
                if (length > left && this.heap[left] > this.heap[smallest])
                    smallest = left;
                if (length > right && this.heap[right] > this.heap[smallest])
                    smallest = right;
                if (smallest == idx)
                    break;
                _a = [this.heap[smallest], this.heap[idx]], this.heap[idx] = _a[0], this.heap[smallest] = _a[1];
                idx = smallest;
            }
        };
        MaxHeap.prototype.bubbleUp = function () {
            var _a;
            var length = this.heap.length - 1;
            var child = length;
            while (child > 0) {
                var parent_1 = Math.floor(child - 1 / 2);
                if (this.heap[parent_1] < this.heap[child]) {
                    // switch
                    _a = [this.heap[child], this.heap[parent_1]], this.heap[parent_1] = _a[0], this.heap[child] = _a[1];
                }
                child = parent_1;
            }
        };
        MaxHeap.prototype.add = function (remainingNum) {
            this.heap.push(remainingNum);
            this.bubbleUp();
        };
        // delete max heap
        MaxHeap.prototype.deleteRoot = function () {
            var last = this.heap.pop();
            if (this.heap.length == 0)
                return last;
            var max = this.heap[0];
            this.heap[0] = last;
            this.bubbleDownFrom(0);
            return max ? max : last;
        };
        return MaxHeap;
    }());
    var mh = new MaxHeap(stones);
    console.log(mh.heap);
    while (mh.heap.length >= 2) {
        console.log("length", mh.heap.length);
        var num1 = mh.deleteRoot();
        var num2 = mh.deleteRoot();
        var subStrac = num1 - num2;
        if (subStrac !== 0) {
            mh.add(subStrac);
        }
        console.log(num1, num2, mh.heap);
    }
    // console.log(mh.heap)
    // Return stub for ts
    // return 1; 
    var result = mh.heap.length == 1 ? mh.heap[0] : 0;
    console.log(result);
    return mh.heap.length == 1 ? mh.heap[0] : 0;
}
;
// lastStoneWeight([1,2,3,4,5,6,7,8])
// lastStoneWeight([2,7,4,1,8,1]);
lastStoneWeight([1, 3]);
