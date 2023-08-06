/*
Given an array of integers nums and an integer target, return indices of the two numbers such that 
they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:

2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.

edge cases:
- if target number is negative, at least one integer must be negative (can include zero)
- if target number is positive, can include a negative integer and zero
- one of the integers that contributes to the target sum can be zero
- there can be duplicate integer elements

initial strategy:
- sort input array for easier calculation
- Depending on the value of the target number, find the approx best index in the array to start calculating
- probably start in the center of input array and then move left or right depending on the target value

final strategy:
- iterate through the array
    - take the difference between target num and current num and check if diff exists in Map
        - if not, add the current num as the key and it's index as the value to the Map
        - if yes, then return the result array with the current num's index and the diff's index in the Map
*/

var twoSum = function(nums, target) {
    // sample case [4,2,1,5] target -> 3
    let prevMap = new Map() // [value : index]
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
      
        if(prevMap.has(diff)) return[i, prevMap.get(diff)]
        else prevMap.set(nums[i], i) 
    }
}
/*
Notes:
- sort function: (without providing it the optional sort function)
    - sort elems of array by overwriting the input array
    - sort elems as strings in alpha and ascending order
- if want to sort numbers in numeric order, must provide the optional sort function otherwise the method will
  treat each number as a stringified number and will sort accordingly (e.g: will treat 25 as "larger" than 100 in
  ascending order since the 2 of the 25 is larger than the 1 of the 100)
- 
*/

console.log(twoSum([4,2,1,5], 3))