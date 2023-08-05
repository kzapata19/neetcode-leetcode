/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

Strategy:
- sort each string
- compare the two sorted strings
- maybe initially check the string length if not the same def not an anagram
*/

var isAnagram = function(s, t) {
    
    // return s.split("").sort().join("") === t.split("").sort().join() ? true : false;
    if(s.length !== t.length) return false;

    let sMap = new Map()
    let tMap = new Map()
    
    // for in loop to iterate over string
    for(let i in s) {
        
        if(!sMap.has(s[i])) sMap.set(s[i], 1)
        else sMap.set(s[i], sMap.get(s[i]) + 1)

        if(!tMap.has(t[i])) tMap.set(t[i], 1)
        else tMap.set(t[i], tMap.get(t[i]) + 1)
        
    }
// for of loop to iterate over Map
    for(let i of sMap.keys()) {
        // if sMap-key's value !== (if tMap-key's value exists then get it; otherwise output 0) 
        //If (count) values are not equal then return false because the strings are not anagrams
        if(sMap.get(i) !== (tMap.has(i)? tMap.get(i) : 0)) return false
    }
    return true; 
}
console.log(isAnagram("rat", "car")) // false
console.log(isAnagram("anagram", "nagaram")) // true

/*
Notes:
- frequency of each elem matters
- Map: understand how to add (set) and retrieve (get) values (and handle when value is undefined - use has method), 
  how to access keys and values, how to iterate (for of loop)
- strings: length and how to iterate (for in loop)
- compare the string lengths, if lengths are not the same then strings are not anagrams
- strategies:
    - brute force: get all the possible permutations for each string, 
      if all permutations are not the same then not anagram
      Time: O(N!); Space: 
    - convert each string to an array of individual strings
      then sort each array
      then compare the two arrays
      Time: O(NlogN); Space: O(N)
    - create a dictionary of a sort (to act as a frequency counter) for each string to tally up all the occurrences for each elem.
      then compare the two dictionaries, if there is at least one difference, then not anagrams
      The dictionary can be a Map (javascript)
      In this Roman alphabet problem, the array indexes can each map to one letter of the alphabet in 
      sorted order (ascending to be intuitive). 26 indexes
      The value placed in each index will map to the number of occurrences of each letter in the target strings
*/
