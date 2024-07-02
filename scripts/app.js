// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0. Your function only needs to return the result, 
// what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


// we want to make a new variable (sum) to track the running total
// set (sum) at 0 to start
// we then want to make a for loop that will increment up 1 each time
// the loop will continue as long as (i) is less then or equal to (num)
// inside the loop we add the current value of (i) to (sum)
// we then return (sum)
function summation(num){
    let sum = 0;
    for(let i = 0; i<= num; i++){
        sum += i;
    }
    return sum;
}