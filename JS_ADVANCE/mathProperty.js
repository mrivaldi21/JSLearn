/*
Math Properties
*/
function mathProperty() {
    console.log(Math.E); //logaritm natural
    console.log(Math.LN10); //logaritm natural 10
    console.log(Math.LN2); //logaritm natural 2
    console.log(Math.LOG10E); //logaritm natural e basis 10
    console.log(Math.LOG10E); //logaritm natural e basis 2
    console.log(Math.PI); //logaritm basis PI
    console.log(Math.SQRT1_2); //number 1 divider square 2
    console.log(Math.SQRT2); //number square 2 
    //https://www.w3schools.com/jsref/jsref_obj_math.asp
}
// mathProperty()
//========================
/*
Math Object method
Ceil, floor and round
*/
function mathObj() {
    var x = 12.3

    console.log(Math.ceil(x));
    console.log(Math.floor(x));
    console.log(Math.round(x));
}
// mathObj()

//Quiz
function Quiz() {
    var d = 37
    var age = 24
    var resAge = d / age
    console.log(resAge);

    console.log(Math.ceil(resAge));
    console.log(Math.floor(resAge));
    console.log(Math.round(resAge));
}
// Quiz()

//========================
/*
Aritmathic ABS (Absolute)
absolute cannot return negatif value
*/
function aritmathicABS() {
    var x = 30
    var y = -20
    console.log(x, y);

    var res = Math.abs(x - y)
    console.log(res);
}
// aritmathicABS()

//========================
/*
Aritmathic POW
The Math.pow() method returns the value of x to the power of y (xy).
https://www.w3schools.com/jsref/jsref_pow.asp
*/
function aritmathicPOW() {
    var x = 10
    var y = 2
    console.log(x, y);

    var res = Math.pow(x , y)
    console.log(res);
}
// aritmathicPOW()

//========================
/*
Aritmathic SQRT
The Math.sqrt() method returns the square root of a number.
https://www.w3schools.com/jsref/jsref_sqrt.asp
*/
function aritmathicSQRT() {
    var x = 8
    var y = 2
    console.log(x, y);

    var res = Math.sqrt(x)
    console.log(res);
}
// aritmathicSQRT()

//========================
/*
Aritmathic LOG (Logarithm)
The Math.log() method returns the natural logarithm (base E) of a number.
https://www.w3schools.com/jsref/jsref_log.asp
https://www.w3schools.com/jsref/jsref_log10.asp
https://www.w3schools.com/jsref/jsref_log2.asp
*/
function aritmathicLOG() {
    var x = 256
    var y = 2
    console.log(x, y);

    var res = Math.log2(x)
    console.log(res);
}
// aritmathicLOG()

//========================
/*
Aritmathic LOG (Logarithm)
The Math.min() method returns the number with the lowest value.
https://www.w3schools.com/jsref/jsref_min.asp

The Math.max() method returns the number with the highest value.
https://www.w3schools.com/jsref/jsref_max.asp
*/
function aritmathicMINMAX() {
    var x = 25
    var y = 232
    console.log(x, y);

    var min = Math.min(x,y) //min 
    console.log(min);
    
    var max = Math.max(x,y) //max
    console.log(max);
}
// aritmathicMINMAX()
//Quiz
function quizez(){
    var ab = 8
    var bc = 6

    var PowAB = Math.pow(ab,2)
    var PowBC = Math.pow(bc,2)
    var toSQRT = PowAB+PowBC
    var AC =Math.sqrt(toSQRT)

    console.log("Valur of AB: ", ab);
    console.log("Valur of AB: ", bc);
    console.log("Length of AC on the elbow triangle is: ", AC);

    console.log("MIN of: 45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10 is: ", Math.min(45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10));
    console.log("MAX of: 45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5 is: ", Math.max(45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5));

}
quizez()