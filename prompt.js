//Write a function, using function keyword, named greeting. When invoked, greeting should print the string 'hey there'.
function greeting(a){
console.log(a)
}
greeting("Hey there")

//Write a function that can reverse a number.
function reversedNumber(num){
    num += ""
    return num.split('').reverse().join('') 
}
console.log(reversedNumber('9014'))
//Prompt 3: Write a function that checks whether the passed string is palindrome or not?
function palindrome(str) {
    var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome("Madam"));

   //Create a function named alphaOrder that returns a passed string with letters in alphabetical order.
   function alphaOrder(Order)
   {
   return Order.split('').sort().join('');
   }
   console.log(alphabet_order("webmaster"));

   //Create a function named changeToLowerCase that accepts a string as a parameter and converts letters of each word of the string to lowercase.
   function changeToLowerCase(x){
    console.log(x.toLowerCase());
    }
    
    console.log(changeToLowerCase("SaLly SeLls SeA ShelLs"))
//Make a function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.
function uppercase(str){
    let array1 = str.split(' ');
    let newarray1 = [];
    for(let x = 0; x < array1.length; x++)
    {
newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
return newarray1.join(' ');}
console.log(uppercase("sally sells sea shells"));

//Make a function that accepts a string as a parameter and find the longest word within the string.

function longestWord(str)
{
let array = str.match(/\w[a-z]{0,}/gi);
let result = array[0];
for(let x = 1 ; x < array.length ; x++)
{
if(result.length < array[x].length)
{
result = array[x];
 } 
}
  return result;
}
console.log(longestWord("Welcome to the developmental shop provided by Code Differently"))

//Create a function that takes two parameters: a and b. When called, multiply a times b. Print the answer to the console.
function multiply(a, b){
console.log( a * b)
 }
 multiply(9, 5)

 //Make an array of your choosing and write a function that returns the array.
 let Names = ["Leslie, Grace, Louis"]

for (let i = 0; i < Names.length; i++) {
console.log(`${Names[i]}`)
};

//Write a function to find the repeated character in a string.
function repeat(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    if (strArr != null) {
      strArr.forEach((elem) => {
        result.push(elem[0]);
      });
    }
    return result;
  }
  console.log(...repeat(str));

  //Create a Puppy Age Teller
  function calculateDogAge(age) {
    const dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}
calculateDogAge(3);
calculateDogAge(9);
calculateDogAge(15);

    
