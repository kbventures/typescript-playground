// ChatGPT said:
// ⏱ Time Complexity:
// O(2^n * n)
// 2^n subsets are generated (each element has 2 choices: include or exclude).
// Each subset takes up to O(n) time to copy using .slice().
// 💾 Space Complexity:
// O(2^n * n)
// Storing 2^n subsets, each of size up to n.
// Call stack depth is O(n), but dominated by output size.
// This function generates all possible subsets of the given array.
function subsets(nums) {
    // 'allSubsets' will store all the subsets.
    var allSubsets = [];
    // 'currentSubset' is a temporary storage to build each subset.
    var currentSubset = [];
    // Helper function to perform depth-first search to build subsets.
    var buildSubsets = function (index) {
        // If the current index is equal to the length of 'nums',2
        // a subset is complete and we can add a copy to 'allSubsets'.
        if (index === nums.length) {
            allSubsets.push(currentSubset.slice());
            return;
        }
        // Recursive case 1: Exclude the current element and move to the next.
        buildSubsets(index + 1);
        // Include the current element in the 'currentSubset'.
        currentSubset.push(nums[index]);
        // Recursive case 2: Include the current element and move to the next.
        buildSubsets(index + 1);
        // Backtrack: Remove the last element before going up the recursive tree.
        currentSubset.pop();
    };
    // Start building subsets from the first index.
    buildSubsets(0);
    return allSubsets;
}
subsets([1, 2, 3]);
// Execution walkthrough for [1, 2]:
// Start: index = 0, temp = []
// index=0, exclude nums[0] (which is 1):
// call recSubSets(1) with temp = []
// index=1, exclude nums[1] (which is 2):
// call recSubSets(2) with temp = []
// index=2 == length, push copy of temp = [] to result:
// result = [[]]
// return to previous call (index=1)
// Back to index=1, now include nums[1] (2):
// temp = [2]
// call recSubSets(2) again
// index=2, push copy of temp = [2] to result:
// result = [[], [2]]
// return to previous call (index=1)
// Backtrack: remove 2 from temp → temp = []
// return to previous call (index=0)
// Back to index=0, now include nums[0] (1):
// temp = [1]
// call recSubSets(1)
// index=1, exclude nums[1] (2):
// call recSubSets(2) with temp = [1]
// index=2, push copy of temp = [1] to result:
// result = [[], [2], [1]]
// return to previous call (index=1)
// Back to index=1, include nums[1] (2):
// temp = [1, 2]
// call recSubSets(2)
// index=2, push copy of temp = [1, 2] to result:
// result = [[], [2], [1], [1, 2]]
// return to previous call (index=1)
// Backtrack: remove 2 → temp = [1]
// return to previous call (index=0)
// Backtrack: remove 1 → temp = []
// done.
