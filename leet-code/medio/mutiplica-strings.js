// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 
// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.


var multiply = function(num1, num2) {
    const mutiplica = (BigInt(num1) * BigInt(num2))
    return mutiplica.toString()
};

console.log(multiply("123456789", "987654321"))

// BigInt no JavaScipt
// function bhash(arr) { 
//     for (var i = 0, L = arr.length, sum = new BigNumber("0"); i < L; sum = new BigNumber(Math.pow(2,i)*arr[i++]).add(sum)); 		
//     return sum; 	}


