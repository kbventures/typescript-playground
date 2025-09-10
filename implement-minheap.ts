// Time Complexity:
// Heapify: O(n) (efficient bottom-up)

// Insert/Delete: O(log n) per operation

// Peek: O(1)

// Space Complexity:
// O(n) (just the array)

class MinHeap {
    heap:number[];
    constructor(heap:number[] = []){
        this.heap = heap; 
        this.heapify()
    }

    heapify(){
        for(let i = Math.floor(this.heap.length/2) -1;i >=0; i--){
            this.bubbleDownFrom(i)
        }
    }

    bubbleDownFrom(idx: number){
        let length = this.heap.length; 
        while(true){
            let left = 2 * idx + 1;
            let right = 2 * idx + 2; 
            let smallest = idx; 

            if(left < length && this.heap[smallest] > this.heap[left]) smallest = left;
            if(right < length && this.heap[smallest] > this.heap[right]) smallest = right; 

            if(idx == smallest) break;

            [this.heap[idx],this.heap[smallest]] = [this.heap[smallest],this.heap[idx]]

            idx = smallest; 
        }
    }

    add(num:number){
        this.heap.push(num)
        this.bubbleUpFrom()
    }
    
    bubbleUpFrom(){
        // index of the added number
        let idx = this.heap.length -1; 
        // find index of its parent
        while(idx > 0){
            let parent = Math.floor((idx -1) /2);
            if(this.heap[idx] >= this.heap[parent]) break; 
            [this.heap[idx],this.heap[parent]]=[this.heap[parent],this.heap[idx]]
            idx = parent; 
        }
        }

    deleteRoot(){
        if(this.heap.length == 0) return null;
        if(this.heap.length == 1){
            let temp = this.heap.pop()
            return temp; 
        } 

        this.heap[0] = this.heap[this.heap.length -1]
        let deleted = this.heap.pop()
        this.heapify()

        return deleted; 
    }

    peek():number|null{
        if(this.heap.length == 0) return null;
        return this.heap[0]
    }
}


const testMinHeap = new MinHeap([10,8,0,7,6,5,4,3])
console.log(testMinHeap.heap)
testMinHeap.add(-2)
console.log(testMinHeap.heap)