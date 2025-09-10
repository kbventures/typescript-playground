namespace ImplementMinHeap {
    export class MinHeap{
        heap: number[] 
        
        constructor(heap: number[] = []){
            this.heap = heap;
            this.heapify()
        }

        heapify(){
            for(let i = Math.floor(this.heap.length /2) -1; i >= 0; i--){
                this.bubbleDownFrom(i)
            }
        }


        bubbleDownFrom(idx:number){
            while(true){
                let left = idx * 2 + 1; 
                let right = idx * 2 + 2; 
                let smallest = idx;
                
                // check left and child child for smaller val
                if(this.heap.length > idx && this.heap[left] < this.heap[smallest]) smallest = left; 
                if(this.heap.length > idx && this.heap[right] < this.heap[smallest]) smallest = right;

                if(smallest == idx) break;

                [this.heap[idx], this.heap[smallest]]=[this.heap[smallest],this.heap[idx]]

                idx = smallest; 
            }
        }

        bubbleUp(){
            let child = this.heap.length -1; 
            while(child > 0){
                let parent = Math.floor((child -1) / 2)
                if(this.heap[parent] < this.heap[child]) break; 
                [this.heap[parent], this.heap[child]]=[this.heap[child],this.heap[parent]]
                child = parent; 
            }
        }

        add(val:number){
            this.heap.push(val)
            this.bubbleUp()
        }

        delete():number|undefined{
            let temp = this.heap[0];
            this.heap[0] = this.heap[this.heap.length-1]
            this.heap.pop()
            this.bubbleDownFrom(0)
            return temp; 
        }
    }
}

let testMinHeapNameSpace = new ImplementMinHeap.MinHeap([8,7,6,5,4,3,2,1])

console.log(testMinHeapNameSpace.heap)

testMinHeapNameSpace.add(-1)
testMinHeapNameSpace.delete()

console.log(testMinHeapNameSpace.heap)