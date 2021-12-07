/*
Basic IF the ELSE
*/
function walking() {
    var data1 = 2;
    if (data1 === 3) {
        console.log("the data is correct");
    } else if (data1 === 2) {
        console.log("data is 2");
    } else {
        console.log("not match");

    }
}
walking()
//another writing style
var data2 = 1;

function showData() {
    if (data2 === 1) console.log("OK");
    else console.log("not match");
}
showData();
//=================

/*
IF ELSE IF
*/
var c = 10;
if (c > 20)
    console.log("the number is over 20");
else if (c > 10)
    console.log("the value more than 10");
else if (c < 10)
    console.log("the value less then 10");
else
    console.log("yes the value is 10");
//=================

/*
Nested IF ELSE 
*/
var a = 41;
var b = 20;
var c = 30;

if (a > b) {
    if (a > c) {
        console.log("A is more tha C");

    } else {
        console.log("A is less than C");
    }
} else {
    if (a < c) {
        console.log(" A is less then C simore");
    } else {
        console.log("A is more than C simore");
    }
}
//=================

/*
IF ELSE with data type 
*/

function getDta() {
    var data3 = 'Bandung';
    console.log(typeof (data3));
    if (data3 === 'Bandung') {
        return data3;
    } else {
        return 'novalue'
    }
}
console.log(getDta());
//=================

/*
SWITCH 
*/
function testSwc() {
    var values = 2;
    switch (values) {
        case 1:
            console.log("good");
            break;
        case 2:
            console.log("moderate");
            break;
        default:
            console.log("other");
            break;
    }
}
testSwc()