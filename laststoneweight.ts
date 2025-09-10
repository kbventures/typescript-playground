function lastStoneWeight(stones: number[]): number {
    class MaxHeap{
        heap: number[]

        constructor(heap:number[]){
            this.heap = heap;
            this.heapify() 
            console.log(this.heap)
        }

        heapify(){
            for(let i = Math.floor(this.heap.length /2) -1; i >= 0; i--){
                this.bubbleDownFrom(i)
            }
        }

        bubbleDownFrom(idx:number){
            let length = this.heap.length; 

            while(true){
                let left = idx * 2 + 1;
                let right = idx * 2 + 2;
                let smallest = idx;

                if(length > left && this.heap[left]  >  this.heap[smallest]) smallest = left;
                if(length > right && this.heap[right] > this.heap[smallest]) smallest = right; 

                if(smallest == idx) break; 
                [this.heap[idx],this.heap[smallest]] = [this.heap[smallest],this.heap[idx]]
                idx = smallest; 
            }
        }

        bubbleUp(){
            let length = this.heap.length -1;
            let child = length;  
            while(child > 0){
            let parent = Math.floor(child -1 / 2)
            
            if(this.heap[parent] < this.heap[child]){
                // switch
                [this.heap[parent],this.heap[child]]=[this.heap[child],this.heap[parent]];
            }
            child = parent; 
        }
        }

        add(remainingNum:number){
            this.heap.push(remainingNum)
            this.bubbleUp()
        }
        // delete max heap
        deleteRoot():number{

            let last = this.heap.pop()
            if(this.heap.length == 0) return last!;
            let max = this.heap[0];
            this.heap[0] = last!;
            this.bubbleDownFrom(0)             
            return max ? max : last!; 
        }

    }

    let mh = new MaxHeap(stones);
    console.log(mh.heap)
    while(mh.heap.length >= 2){
        console.log("length", mh.heap.length)
        let num1 = mh.deleteRoot()
        let num2 = mh.deleteRoot()

        let subStrac = num1 - num2; 


        if(subStrac !== 0){
            mh.add(subStrac)
        }
        console.log(num1,num2, mh.heap)
    }

    // console.log(mh.heap)
    // Return stub for ts
    // return 1; 
    let result = mh.heap.length == 1 ? mh.heap[0] : 0;
    console.log(result) 
    return mh.heap.length == 1 ? mh.heap[0] : 0; 
};


// lastStoneWeight([1,2,3,4,5,6,7,8])
// lastStoneWeight([2,7,4,1,8,1]);
lastStoneWeight([1,3]);