
// Reference: https://youtu.be/oBt53YbR9Kk

// Recursive approach 
// O(n^m * m) time 
// n = wordbank.length, m = target.length
// the additional m factor is due to the slice in line 12
// The height of the tree is m => O(m^2) space complexity due 
// to having to store m space for the suffix in every recursive call
const canConstruct = (target, wordBank) => {

    if(target === '') return true;

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
}

// Memoized version
// Time complexity: O(n * m^2)
// Space complexity: O(m^2)
const canConstructMemoized = (target, wordBank, memo={}) => {

    if(target in memo) return memo[target];
    if(target === '') return true;

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstructMemoized(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return memo[target];
            }
        }
    }
    memo[target]= false;
    return memo[target];
}

// console.log("---Recursive version---");
// console.log(canConstruct("abcdef", ["ab","abc","cd","def", "abcd"])); // true
// console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
// console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"
// ])); // false

console.log("---Memoized version---");
console.log(canConstructMemoized("abcdef", ["ab","abc","cd","def", "abcd"])); // true
console.log(canConstructMemoized("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstructMemoized("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstructMemoized("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); // false