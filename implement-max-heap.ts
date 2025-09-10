class MaxHeap{
    heap:number[]

    constructor(heap: number[] = []){
        this.heap = heap; 
        this.heapify()
    }

    heapify(){
        for(let i = Math.floor(this.heap.length /2) -1; i>=0;i--){
            this.bubbleDownFrom(i)
        }
    }

    bubbleDownFrom(idx:number){
        let length = this.heap.length;

        while(true){
            let left = 2 * idx + 1; 
            let right = 2 * idx + 2; 
            let bigguest = idx; 

            if(length > left && this.heap[left] > this.heap[bigguest]) bigguest = left; 
            if(length > right && this.heap[right] > this.heap[bigguest]) bigguest = right; 

            if(idx == bigguest) break; 

            [this.heap[idx],this.heap[bigguest]] = [this.heap[bigguest],this.heap[idx]];

            idx = bigguest
        }
    }

    add(num:number){
        this.heap.push(num)
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.heap.length-1; 

        while(idx > 0){
        let parent = Math.floor(idx/2)
        if(this.heap[parent] > this.heap[idx]) break;
        [this.heap[parent],this.heap[idx]]=[this.heap[idx],this.heap[parent]];
        idx = parent;
        }
    }

    deleteRoot():number|undefined{
        if(this.heap.length == 0) return undefined;

        let last = this.heap.pop()

        if(this.heap.length == 0){
            return last; 
        }

        let max = this.heap[0]
        this.heap[0] = last!; 
        this.bubbleDownFrom(0)        
        return max; 

    }

    peek(){}
}

const MxHeap = new MaxHeap([0,1,2,3,4,5,6,7,8])
console.log(MxHeap.heap)
MxHeap.add(30);
console.log(MxHeap.heap);
