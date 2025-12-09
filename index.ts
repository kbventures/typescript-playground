namespace DoublyLinkedList {
    export class Node {
        value: number
        next: Node | null
        prev: Node | null

        constructor(value:number){
            this.value = value;
            this.next = null;
            this.prev = null; 
        }
    }

    export class LinkedList {
        head: Node | null
        tail: Node | null
        size: number

        constructor(){
            this.head = null;
            this.tail = null; 
            this.size = 0; 
        }

        addEnd(value:number){
            let newNode = new Node(value)
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.prev = this.tail
                this.tail!.next = newNode; 
                this.tail = newNode; 

            }

            this.size++
            return newNode;
        }

        addStart(value:number){
            let newNode = new Node(value)
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            } else {
                let temp = this.head;
                this.head = newNode;
                newNode.next = temp;
                temp.prev = newNode; 
            }     
            this.size++
            return newNode
        }


        addAtPosition(value: number, idx:number):Node | undefined{

            if(idx > this.size) return undefined;
            if(idx == 0) return this.addStart(value)
            if(idx == this.size) return this.addEnd(value);

            let currIdx = 0; 
            let newNode = new Node(value)
            let temp = this.head;

            while(temp){
                if(currIdx == idx ) break; 
                currIdx++
                temp = temp.next; 
            }

            let tempPrev = temp!.prev;
            tempPrev!.next = newNode;  
            newNode.prev = tempPrev;
            newNode.next = temp; 
            temp!.prev = newNode; 



            this.size++

            return newNode;
        }

        deleteNodeEnd():number|undefined {
            if(this.size ==0) return undefined
        }

        deleteNodeFront():number|undefined {
            if(this.size ==0) return undefined
        }



        


    }



}