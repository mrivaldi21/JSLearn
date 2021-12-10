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
function strCodePoints(){
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
function strLoweUpper(){
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
function charAT(){
    var str ="Menari Bersama"

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
function SubString(){
    var str ="Berkunjung ke Pantai"

    console.log(str.substr(8)); //show sting from x index
    console.log(str.substr(3,5)); //show string from x to y index
    console.log(str.substr(-3)); //show string x (from end to start)


}
// SubString()

//Quiz
function Queses(){
    var longstr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
console.log();
}