/*
String Char Code
*/
function stringCharCode() {
  var code = "I want to go home"
  console.log(code.charAt(4)); //show position character by number
  console.log(code.charCodeAt(4)); //show character string
}
// stringCharCode()

//==================
/*
String Code point
*/
function strCodePoints() {
  var code = 65
  var code2 = 0x2615
  console.log(String.fromCodePoint(code)); //show original code to string
  console.log(String.fromCodePoint(code2)); //show original hexa code to string

}
// strCodePoints()

//==================
/*
String LowerCase and UpperCase
Change string to either upper or lower case
*/
function strLoweUpper() {
  var str = "Learning Javascript"

  console.log(str.toUpperCase()); //show String to uppercase
  console.log(str.toLowerCase()); //show String to lower case

}
// strLoweUpper()

//==================
/*
String CharAt
Returns the character at the specified index (position)
https://www.w3schools.com/jsref/jsref_charat.asp
*/
function charAT() {
  var str = "Menari Bersama"

  console.log(str.charAt(8));
}
// charAT()

//==================
/*
String SUBSTRING
Extracts the characters from a string, beginning at a specified start 
position, and through the specified number of character
https://www.w3schools.com/jsref/jsref_obj_string.asp
*/
function SubString() {
  var str = "Berkunjung ke Pantai"

  console.log(str.substr(8)); //show sting from x index
  console.log(str.substr(3, 5)); //show string from x to y index
  console.log(str.substr(-3)); //show string x (from end to start)


}
// SubString()

//Quiz
// function Queses(){
//     var longstr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// console.log();
// }

//==================
/*
String Slice
Like the name, slice is used to slice the String word with scpecific range
https://www.w3schools.com/jsref/jsref_slice_string.asp
*/
function SliceString() {
  var words = "My Name is Rick"
  console.log(words.slice(8)); //slice from (index)
  console.log(words.slice(3, 7)); //slice from (index, to)
  console.log(words.slice(-4)); //slice from back

}
// SliceString()
//==================
/*
String Split
convert String to Array
https://www.w3schools.com/jsref/jsref_split.asp
*/
function textSplit() {
  var words = "Cucomber Rick"
  console.log(words.split()); //convert string to single array
  console.log(words.split("")); //convert String by each characters to array
}
// textSplit()
//==================
/*
String Trim
- Trim method removes whitespace (space) from both sides of a string.
- Trim method does not change the original string.
https://www.w3schools.com/jsref/jsref_trim_string.asp
*/
function StringTrim() {
  var words = "   Cucumber Rick    "
  console.log(words); // unremoved whitespace from string
  console.log(words.trim()); //removed whitespace from string

}
// StringTrim()
//==================
/*
String Concat
- The concat() method joins two or more strings.
- The concat() method does not change the existing strings.
- The concat() method returns a new string.
https://www.w3schools.com/jsref/jsref_concat_string.asp
*/
function StringConcat() {
  var words = "Sea"
  var words2 = "Cucumber"

  console.log(words.concat(words2)); // concat 2 strings
  console.log(words.concat(" ", words2)); // concat 2 strings

}
// StringConcat()
function Quiz() {
  var q1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  var q2a = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  var q2b = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  console.log(q1.slice(7, 24));
  console.log(q2a.concat(q2b));
}
// Quiz()
//==================
/*
String Concat
- The concat() method joins two or more strings.
- The concat() method does not change the existing strings.
- The concat() method returns a new string.
https://www.w3schools.com/jsref/jsref_concat_string.asp
*/
function StringConcat() {
  var words = "Sea"
  var words2 = "Cucumber"

  console.log(words.concat(words2)); // concat 2 strings
  console.log(words.concat(" ", words2)); // concat 2 strings

}
// StringConcat()