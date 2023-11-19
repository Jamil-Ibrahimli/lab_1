"use strict";


// .1. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// let arr=[1,2,3,4]


// function multiNumbers (numbers){

// return numbers.reduce((x,y)=>x*y,1)


// }

// console.log(multiNumbers(arr))


// ___________________________________________________________________________________________________________________________________


// 2. Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9






// let arr = [1, 2, 2];

// function getSquaredSum(numbers){

// return  numbers.reduce((x,y)=>x+y**2,0)

// }



// console.log(getSquaredSum(arr))


// ___________________________________________________________________________________________________________________________________

// 3. You get an array of numbers, return the sum of all of the positives ones.
// [1, -12, 2, -13, 3, 5, -11, -14, -15];


// let arr = [1, -12, 2, -13, 3, 5, -11, -14, -15,1];


// function getSum (){

// return arr.reduce((x,y)=> y>0? x+y:x,0)

// }

// console.log(getSum())


// ___________________________________________________________________________________________________________________________________

//4. Write a function that takes an array of words and smashes them together into ,a sentence and returns the sentence.
//  You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
//  Be careful, there shouldn't be a space at the beginning or the end of the sentence!



// let words = ['hello', 'world', 'this', 'is', 'great']


// function getSmash(arr){
// return arr.join(" ")


// }

// console.log(getSmash( words))


// ___________________________________________________________________________________________________________________________________


// 5. Convert number to reversed array of digits
//  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//  Example(Input => Output):

//  35231 => [1,3,2,5,3]






// let number = 35231


// function reversedDigitsArray(num){

// return   String(num).split("").reverse().map((i)=>Number(i))  


// }

// console.log(reversedDigitsArray(number))

// ___________________________________________________________________________________________________________________________________

// 6.  You are given two sorted arrays that both only contain integers. 
// Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

//  Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


//  Examples (input -> output)


// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


// - (FIRST METHOD):
 

// let arr1  = [1, 3, 5, 7, 9, 11, 12]; 

// let arr2 = [1, 2, 3, 4, 5, 10, 12];



// function mergeArrays(){

// return arr1.concat(arr2).filter((value , index, array )=> array.indexOf(value)===index  ).sort((x,y)=>x-y)


// }

// console.log(mergeArrays())





//  - (SECOND METHOD )

// const arr1= [1, 3, 5, 7, 9, 11, 12]
// const arr2 = [1, 2, 3, 4, 5, 10, 12] 


// function mergeArrays(x,y){

//     return   x.filter((i)=> !y.includes(i)  ).concat(y).sort((a,b)=>a-b)


// }

// console.log(mergeArrays(arr1,arr2))