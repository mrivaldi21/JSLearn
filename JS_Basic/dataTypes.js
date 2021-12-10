/*
Number variable
*/
var bulat = 20;
var decimal = 30.5;
var negatif = -10;


console.log(bulat);
console.log(decimal);
console.log(negatif);

//=======================

/*
String
*/

var characters = "this is example of string";
var characters2 = 'this is also string';
console.log(characters + " " + characters2);

//=======================

/*
Boolean
*/
var height = false;
var cm = 185;

if (cm > 170) {
    height = true
} else {
    height = false;
}
console.log(height);

//=======================

/*
Null and Undefinded
- Null is defined if something is empty or doesnt have a value but we know the value of it
- undefinded used id we dont know the actual value of it
*/

//null
var empty = "here";
empty=null;

//undefined
var undef;
console.log(undef);
//=======================

/* 
Array
Array can have many value on it
*/

var numbers = [3,2,4,5];

console.log(numbers);// calling all value of all index
console.log(numbers[3]); //calling specific value from index


