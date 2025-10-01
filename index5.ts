// Build a undirected graph from adjacency list

namespace stuff{
export class Node{
    val:number;
    neighbors:Node[]

    constructor(val:number, neighbors = []){
        this.val = val;
        this.neighbors = neighbors
    }
}

}

const list = [[1,3],[2,4],[1,3],[2,4]];


function buidlAdjList(l:number[][]){
    let newMap = new Map<number,stuff.Node>()

    for(let i = 0; i < l.length;i++){
        newMap.set(i+1, new stuff.Node(i+1))
    }

    console.dir(newMap)

    for(let i = 0; i < l.length;i++){
        for(let n of l[i]){
            console.log(n)
            newMap.get(i+1)?.neighbors.push(newMap.get(n)!)
        }
    }

    return newMap; 
}
const result = buidlAdjList(list);

console.dir(result)
