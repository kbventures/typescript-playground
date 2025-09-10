class MHeap {
    heap: number[];

    constructor(heap:number[]){
        this.heap = heap; 
        this.heapify(this.heap); 
    }

    heapify(h:number[]){
        // Find lenght of non leaf nodes
        let length = this.heap.length;
        let index = Math.floor(length / 2) -1
        for(let i = Math.floor(this.heap.length /2) -1; i >=0; i--){
            this.bubbleDownFrom(i)
        }
        }
    
    bubbleDownFrom(index: number) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }

    }


    add(num:number){
        this.heap.push(num)
        this.bubbleup()
    }

    bubbleup(){
        
    }

    removeRoot(){
        [this.heap[0], this.heap[this.heap.length -1]] = [this.heap[this.heap.length-1],this.heap[0]];
        const removedElement = this.heap.pop()
        this.bubbleDownFrom(0);
        return removedElement
    }

}


const newMinHeap = new MHeap([8,12,14,1,6,5,1,2,3])

console.log(newMinHeap.heap);









