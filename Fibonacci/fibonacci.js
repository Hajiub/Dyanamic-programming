/*
 The time complexity of this code is O(n), as the function recursively calculates 
 each Fibonacci number up to n, and each number is calculated only once and stored
 in the memo object for later use. The recursive calls form a binary tree, but because
 each node in the tree is visited only once, the total number of nodes is proportional
 to n, resulting in a time complexity of O(n). 
*/
memo = {}
const fib = (n) => {
    if( n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
    return memo[n];
}
console.log(fib(10))