/*
Function
*/
// writing function conventional (old writing)
function walk() {
    console.log("walking alone");
}

//writing function with variable (old writing)
const walking = function () {
    console.log("walking together");
}

//writing function with new writing
const walks = () => {
    console.log("walks with friend");
}

walk()
walking()
walks()
//============================

/*
Function with return value
*/

function getVal() {
    var trw = "String cached";
    return trw;

}
var geta = getVal();
console.log(geta);
//============================

/*
Function with Argument param
*/

function getDatas(x){
    console.log(x);
}

getDatas("yello 20");
//============================

/*
Function with Argument/param default function
*/
function askData(x=10){
    console.log(x);
}
askData()
//============================

/*
Function with Argument/param default function
*/
function rrtn(v){
    console.log("before"+v);
    v +=5;
    return ("after"+v);
}
var GT = rrtn(12);
console.log(GT);