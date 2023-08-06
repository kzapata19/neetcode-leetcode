/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

Input: guaranteed strings of lowercase English words listed in an array
Output: array with all the anagrams grouped together inside their own arrays. Strings that are not 
anagrams are placed in their own array. Anagram groups can be returned in any order

Constraints:

Edge Cases:
- will we have strings that have spaces? like a phrase?
- will we have strings that are simply spaces?
- can we mutate the input?

Strategy:
- iterate through the input array 
    - for each str in the input array
        - we want to keep a tally of letter frequency for each string (where each index maps to an alphabet letter in ascending order)
        - keep all the tallies in a Map, where the keys will be the tallies and the values will be
          an array of all the input strings that share that key's tally
    - iterate through the input array's strings to match each string with the corresponding key in the Map 
        
*/

function buildHashKey (str) {
    const tallyArray = new Array(26).fill(0);
    for(let char of str) {
        let charIndex = char.charCodeAt(0) - "a".charCodeAt(0);
        tallyArray[charIndex]++;
    }
    return tallyArray.toString();
}

function buildHash(arr) {
    let hash = new Map();
    for(let str of arr) {
        let hashKey = buildHashKey(str);
        let hashValue = hash.get(hashKey) || [];

        hashValue.push(str);
        hash.set(hashKey, hashValue);
    }
    return hash;
}

var groupAnagrams = function(strs) {
    if(!strs.length) return [];
    return [...buildHash(strs).values()]
};

// ["eat","tea","tan","ate","nat","bat"] -> [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
