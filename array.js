Array Basics Challenge
Array Methods Practice

Below are exercises in using array methods. Beneath each prompt write the code to fulfill the exercise requirement.

Exercise 1
Consider this variable:
var groceryList1 = ["apples", "carrots", "oatmeal"]
Write the code that will add "granola" to the end of array

Exercise 2
Consider this variable:
var groceryList2 = ["chips", "dip", "cookies"]
Write the code that will add "soda" to the end of the original array.

Exercise 3
Consider this variable:
var numbers1 = [1, 2, 3, 4, 5]
Write the code that will add the number 0 to the beginning of the array

Exercise 4
Consider this variable:
var numbers2 = [2, 4, 6, 8, 10]
Write the code that will add the number 0 to the beginning of the original array.

Exercise 5
Consider this variable:
var numbers3 = [2, 13, 6, 8, 4, 2]
Write the code that finds the index of the first appearance of the number 2.

Exercise 6
Write the code that finds the index of the last appearance of the number 2.

Exercise 7
Consider this variable:
var chars = ["y", "a", "r", "r", "a"]
Write the code that brings all the letters in the chars array together into a string.

Exercise 8
Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.




var groceryList1 = ["apples", "carrots", "oatmeal"]
console.log(groceryList1.concat (["granola"]))
console.log (groceryList1)


var groceryList2 = ["chips", "dip", "cookies"]
groceryList2.push ("soda")
console.log (groceryList2)

var numbers1 = [1, 2, 3, 4, 5];
console.log([0].concat(numbers1))


var numbers1 = [1, 2, 3, 4, 5];
numbers1.shift(0);
console.log(numbers1)

var numbers3 = [2, 13, 6, 8, 4, 2]
console.log(numbers3.indexOf(2))

var numbers4 = [2, 13, 6, 8, 4, 2]
console.log(numbers4.lastIndexOf(2))


var chars = ["y", "a", "r", "r", "a"]
console.log(chars.join(''))

var chars = ["y", "a", "r", "r", "a"]
var myArr = chars.reverse()
console.log(myArr.join(''))
