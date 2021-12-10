/*
Nested Array
*/
function nestedArry() {
    var nameData = [
        ["aa", "bb", "cc", "dd"],
        [1, 2, 3, 4, 5],
        ["hello", "my", "Name"]
    ]
    console.log(nameData[2][1]);
    console.log(nameData.length);
    console.log(nameData[1]);
}
// nestedArry()

//==================
/*
Array loop 
this is method on how to display all array using looping
*/

function arrLoop() {
    var numbers = [2, 4, 2, 6, 9];
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);


    }
}
// arrLoop()

//==================
/*
For OF
*/
function forOF() {
    var numbers = [2, 5, 7, 4, 12];
    for (let x of numbers) {
        console.log(x);
    }
}
// forOF()

//Quiz
function qForLoop(){
    var number = [155,170,172,173,150,152,154]
    for (let index = 0; index < number.length; index++) {
        const element = number[index];
        console.log(element);
    }
}
function qForOf() {
    var numbers = [155,170,172,173,150,152,154]
    for (var x of numbers) {
        console.log(x);
    }
}
qForLoop()
console.log("");
qForOf()