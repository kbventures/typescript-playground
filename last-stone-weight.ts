
// // Brute force
// // Time complexity: O(n² log n) due to sorting inside the loop that runs up to n times;
// // Space complexity: O(n) for storing the stones array and intermediate results.
// function lastStoneWeight(stones: number[]): number {
// stones.sort((a,b)=> {
//         return a - b
//     })
//     while(stones.length >= 2){

//         // x <= y
//         let x = stones[stones.length - 2]
//         let y = stones[stones.length - 1]

//         if(x==y){
//             stones.splice(stones.length-2,2)
//         } else {
//             stones.splice(stones.length-2,2)
 
//             let temp = y - x;

//             stones.push(temp);

//             stones.sort((a,b)=>{
//                 return a-b;
//             })
//         }
//     }
//     return stones[0] ? stones[0] : 0; 
// };

// Max Heap Version

// Space complexity: O(k)
// Time complexity: O(log k)



// Time complexity is O(log n) and space complexity is O(n)
// function lastStoneWeight(stones: number[]): number {
    
// class MaxHeap{
//     heap: number[]

//     constructor(heap: number[]) {
//         this.heap = heap;
//         this.heapify(this.heap);
//     }

//         // Floyd's Method to make heap out of balanced tree
//         heapify(arr: number[]) {
//         this.heap = arr.slice(); 
//         // Iterates through number non-leaf nodes which are nodes that have at least one child.
//         for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
//             this.bubbleDownFrom(i);
//         }
//         }

//         bubbleDownFrom(index: number) {
//             const length = this.heap.length;
//             console.log(this.heap)
//             while (true) {
//                 console.log(this.heap)
//                 let left = 2 * index + 1;
//                 let right = 2 * index + 2;
//                 let smallest = index;

//                 if (left > length && this.heap[left] > this.heap[smallest]) smallest = left;
//                 if (right > length && this.heap[right] > this.heap[smallest]) smallest = right;

//                 if (smallest === index) break;
//                 [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
//                 index = smallest;
//             }
//             console.log(this.heap)
//         }

//         // Needs to be changed
//         add(val: number) {
//             this.heap.push(val);
//             this.bubbleUp();
//         }

//         // Probalby needs to be changed
//         bubbleUp() {
//             let index = this.heap.length - 1;
//             while (index > 0) {
//                 let parent = Math.floor((index - 1) / 2);
//                 if (this.heap[parent] >= this.heap[index]) break;
//                 [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
//                 index = parent;
//             }
//         }

//         deleteRoot() {
//             if (this.heap.length === 0) return null;
            
//                 const last = this.heap.pop();
//                 const maxHeap = this.heap[0]

//             if (this.heap.length > 0 && last !== undefined) {
//                 this.heap[0] = last;
//                 this.bubbleDownFrom(0);
//             }
//             return maxHeap
//         }
//     }

//     // Heapify starting array into Max Heap
//    const newMaxHeap = new MaxHeap(stones)

//     while(newMaxHeap.heap.length >= 2){

//         // x <= y
//         let x:number = newMaxHeap.deleteRoot()!;
//         let y:number = newMaxHeap.deleteRoot()!;
//         let substraction = (x - y)

//         if(substraction != 0){
//             newMaxHeap.add(substraction)
//         }
//     }
//     return newMaxHeap.heap[0] ? newMaxHeap.heap[0] : 0; 
    
// }

// const res = lastStoneWeight([2,7,4,1,8,1]);

// console.log("result",res);