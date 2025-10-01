// Definition

// Max heap: complete binary tree where every parent ≥ its children.

// Parameters & Returns

// heapify(arr): rearranges array into max heap. O(n) time, O(1) extra space.

// add(val): inserts value into heap. O(log n) time, O(1) space.

// delete(): removes and returns the maximum element. O(log n) time, O(1) space.

// peek(): returns maximum element without removing. O(1) time, O(1) space.

// Example

// Input: [1,2,3,4,5,6]

// After heapify: [6,5,3,4,2,1]

// Add 7 → [7,5,6,4,2,1,3]

// Delete → returns 7, heap becomes [6,5,3,4,2,1]

// Pseudocode in words

// Heapify: Start at the last non-leaf node and bubble down each node to enforce max-heap property.

// Bubble down: Compare node with children, swap with larger child if smaller, repeat until correct.

// Bubble up: Compare inserted node with parent, swap if larger, repeat until root or correct.

// Add: Append value at the end, bubble it up.

// Delete: Swap root with last element, remove last, bubble down new root.

// Peek: Return root if heap not empty.

namespace MaxHeapAttempt {
    export class MaxHeap {
        heap: number[]
        
        constructor(heap:number[]){
            this.heap = heap;
            this.heapify();
        }
        // o(n) time operation
        heapify(){
            for(let i = Math.floor(this.heap.length / 2) -1; i >= 0; i--){
                this.bubbleDownFrom(i)
            }
        }
        // o(n) time complexity
        bubbleDownFrom(idx:number){
            let length = this.heap.length;
            while(true){
                let left = 2 * idx +1;
                let right = 2 * idx + 2
                let smallest = idx;

                if(left < length && this.heap[left] > this.heap[smallest]) smallest = left;
                if(right < length && this.heap[right] > this.heap[smallest]) smallest = right;

                if(smallest == idx) break; 

                [this.heap[idx],this.heap[smallest]] = [this.heap[smallest],this.heap[idx]]

                idx = smallest;
             }
        }

        // o(log) time complexity
        bubbleUp(){
            let child = this.heap.length -1; 
            while(child > 0){
                let parent = Math.floor((child -1) / 2) 
                if(this.heap[child] < this.heap[parent]) break; 
                [this.heap[child],this.heap[parent]]=[this.heap[parent],this.heap[child]]
                child = parent; 
            }
        }

        add(val:number){
            this.heap.push(val)
            this.bubbleUp()

        }
        // o(log n) time complexity 
        delete(){
            if(this.heap.length == 0) return undefined;
            [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
            let deletedVal = this.heap.pop()
            this.bubbleDownFrom(0)
            return deletedVal
        }

        peek(){
            if(this.heap.length == 0) return undefined;
            return this.heap[0]
        }
    }
}


const newHeap =  new MaxHeapAttempt.MaxHeap([1,2,3,4,5,6])

console.log(newHeap.heap)

newHeap.add(7)
console.log(newHeap.heap)