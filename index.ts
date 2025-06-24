
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 


// Time complexity is O(n) because we traverse the nodes a single time and space complexity is O(1) because we using exisiting references and not new space in memory
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
// If one of the lists is null, return the other list since there's nothing to merge
if (list1 === null || list2 === null) {
return list1 || list2;
}

// Compare the values of the two list heads and recursively merge the rest of the lists
if (list1.val < list2.val) {
// If the value of the first list head is less,
// link that node to the result of merging the rest of the lists
list1.next = mergeTwoLists(list1.next, list2);
return list1;
} else {
// If the value of the second list head is less or equal,
// link that node to the result of merging the rest of the lists
list2.next = mergeTwoLists(list1, list2.next);
return list2;
}
}

const result = mergeTwoLists(null,null); 
console.log(result); 