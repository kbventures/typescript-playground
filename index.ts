// Stack singly linked list

namespace DoublyLinkedstList{
    export class Node {
        next: Node | null;
        prev: Node | null;
        value: number; 
        constructor(val:number, next = null, prev= null ){
            this.value = val; 
            this.next = next;
            this.prev = prev; 
        } 
    }

    export class DoublyLinkedstList{
        start: Node | null;
        end: Node | null; 
        size: number; 
        constructor(start = null, end = null, size = 0){
            this.start = start;
            this.end = end;
            this.size = size; 
        }

        enqueue(val:number){
            let newNode = new Node(val)
            if(!this.start){
                this.start = newNode;
                this.end = newNode; 
            } else {
                let temp = this.end; 
                this.end!.next = newNode;
                this.end = newNode; 
                this.end.prev = temp;
            }
            this.size++
        }    

        dequeue():Node | undefined{
            
            if(!this.start){
                return undefined
            } else if(!this.start.next) {
                let returnVal = this.start;
                this.start = null; 
                this.end = null; 
                this.size = 0;
                return returnVal
            } else {
                let returnVal = this.start
                this.start = this.start.next; 
                this.start.prev = null;
                this.size-- 
                return returnVal; 
            }
            
    }        

        peekStart(val:number){}

        peekEnd(){}

        // Move any node to the front
        MoveAnyNodeToFront(node:Node){
            const result = this.RemoveSpecificNode(node)
            if(!result) return

            let temp = this.end
            this.end!.next = node;
            this.end = node; 
            node.prev = temp; 

       }
        
        RemoveSpecificNode(node:Node|null):Node|undefined{
            if(!node) return undefined;

            // Doubly linkedlist is empty
            if(!this.start && !this.end){
                return undefined; 
            }
            // One node left
            if(this.start == node && this.end == node){
                this.start = null; 
                this.end = null; 
                this.size--
                return undefined; 
            }

            if(this.start == node){
                let temp = this.start.next;
                temp!.prev = null; 
                this.start = temp;
                this.size--
                return node; 
            }

            if(this.end == node){
                let temp = this.end.prev;
                this.end = temp;
                this.size--
                return node; 
            }
            
                let left = node.prev;
                let right = node.next;
                left!.next = right;
                right!.prev = left; 
                this.size--
                return node; 
        }

        searchNode(node:Node|null):boolean{
            let temp = this.start;

            while(temp){

                if(temp == node) return true
                temp = temp.next
            }

            return false; 
        }

        searchNodeValue(val:number):Node|undefined{
            let temp = this.start

            while(temp){
                // node found
                if(temp.value == val) return temp;
                temp = temp.next
            }
            // Not found
            return undefined; 
        }

    }

}

// For the LeetCode LRU Cache, you absolutely need methods that support:

// MoveAnyNodeToFront(node) → because when a key is accessed, its node must move to the head.

// RemoveSpecificNode(node) → because when capacity is exceeded, you need to evict the least recently used node (tail).

// Other helpers like searchByValue, searchNode, or peekStart/peekEnd are not strictly required if you manage nodes via a HashMap<Node>.