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

        dequeue():number | undefined{
            
            if(!this.start){
                return undefined
            } else if(!this.start.next) {
                let returnVal = this.start.value;
                this.start = null; 
                this.end = null; 
                this.size = 0;
                return returnVal
            } else {
                let returnVal = this.start.value
                this.start = this.start.next; 
                this.start.prev = null;
                this.size-- 
                return returnVal; 
            }
            
    }        

        searchByValue(val:number){}

        peekStart(val:number){}

        peekEnd(){}

        // Move any node to the front
        MoveAnyNodeToFront(node:Node){}
        
        RemoveSpecificNode(node:Node){}

        searchNode(node:Node){

        }

    }

}