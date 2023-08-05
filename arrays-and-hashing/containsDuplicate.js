// source: https://leetcode.com/problems/contains-duplicate/

/*

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

strategies:
- create a dictionary that tallies the count for each number. Then traverse dictionary. If there is one elem
  with a count > 1, return false
- Use a pointer to compare each the current elem to the elems proceeding it until reaching the end of array
  No need to compare current elem to elem(s) before it bc that comparison has already occurred

*/

// time: O(n)
// space: O(n)
var containsDuplicate = function(nums) {
    let numSet = new Set()
    for(num of nums) {
        if(numSet.has(num)) {
            return true;
        } else {
            numSet.add(num);
        }
    }
    return false;
}

let test1 = containsDuplicate([1,2,3,1])
console.log(test1) // true
let test2 = containsDuplicate([1,2,3,4])
console.log(test2) // false
let test3 = containsDuplicate([-4,2,3,4])
console.log(test3) // false
let test4 = containsDuplicate([-4])
console.log(test4) // false
let test5 = containsDuplicate([-4,2,4,4])
console.log(test5) // true
let test6 = containsDuplicate([-4,-4,6,4])
console.log(test6) // true