// You are given a string s. You can convert s to a 
// palindrome by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"
// Example 2:

// Input: s = "abcd"
// Output: "dcbabcd"
 
// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of lowercase English letters only.

var shortestPalindrome = function(s) {
  const stringInvertida = s.split('').reverse().join('')
  let inverte = stringInvertida
  const copiaString = s 
  while(s !== inverte){
    inverte = inverte.slice(1)
    s = s.slice(0,-1)
  }
  return stringInvertida.slice(0, -s.length)+copiaString
};


console.log(shortestPalindrome('aacecaaa'))