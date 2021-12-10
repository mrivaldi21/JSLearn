// UNCOMENT THE FUNCTION TO SEE 
/*
Checking data type
*/
function checkDataType() {
    var datas = "Name";
    var num = 13000;
    var arr = [1, 2]
    var objs = {
        nama: "andy",
        age: 21
    }

    console.log(typeof (datas)); //checking data type of variable using type OF
    console.log(typeof (num));
    console.log(typeof (arr));
    console.log(typeof (objs));

}
// checkDataType()

//=================================
/*
Operator
*/
function aritmatmeticOpertor() {
    var a = 10;
    var b = 20;
    console.log("increment: ", a + b);
    console.log("decrement: ", a - b);
    console.log("miltiple: ", a * b);
    console.log("divider: ", a / b);
    console.log("modulus", a % b);

}
// aritmatmeticOpertor()

//=================================
/*
increment - decrement Operator
*/
function incrementDecrement() {
    var a = 10
    var b = 20
    a++;
    console.log("increment", a);
    b--;
    console.log("decrement", b);

}
// incrementDecrement()

//=================================
/*
comparison Operator
*/
function compare() {
    var a = 10;
    var b = 20;
    console.log(a > b); //more then
    console.log(a < b); //less then
    console.log(a >= b); //more then or equals
    console.log(a <= b); //less then or equals
    console.log(a == b); //equals to
    console.log(a === b); //data type equals to
    console.log(a != b); //not equals to
    console.log(a !== b); //data type not equals to
}
// compare()

//=================================
/*
Logical Operator
*/
function logicalOperator() {
    var x = 10;

    console.log(x > 10 && x < 20); //AND opertator
    console.log(x > 10 || x < 20); //OR operator
    console.log(!true); //NOT (negation)
}
// logicalOperator()

//=================================
/*
String Operator
*/
function stringOperator() {
    var stt = "hello"
    var stt2 = "world"
    var z = stt + stt2
    console.log(z);
}
// stringOperator()

//=================================
/*
Assigment Operator
*/
function AssigmentOperator() {
    var x, y, z;
    x = 10
    y = 20
    z = 30
    console.log(x, y);
    console.log(z);
}
// AssigmentOperator()

//=================================
/*
Spread Operator
*/
function spreadOperator() {
    var numer = [2, 3, 1]
    var numer2 = [7, 45, 6]

    var fusion = [...numer,...numer2,22,32] //additional value to array
    console.log(numer);
    console.log(numer2);
    console.log(fusion);
}
// spreadOperator()