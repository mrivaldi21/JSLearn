/*
Simple Object writing
*/
function Objective() {
    var car = {
        type: "Sedan",
        price: 200,
        color: "Black",
        year: [2000, 2001, 2021] //array in object
    }
    console.log(car); //calling all data from object
    console.log(car.color); //calling specific object data
    console.log(car.year[2]);
}

// Objective()

//=====================
/*
Object property
*/
function propertyChange() {
    var car = {
        type: "Sedan",
        price: 200,
        color: "Black",
        year: [2000, 2001, 2021] //array in object
    }
    console.log(car); //calling all data from object
    console.log(car.color); //calling specific object data
    console.log(car.year[2]);

    //===================== Update property to object
    car.year[3] = 2022; // update the property array
    car.type = "SUV";
    console.log(car.year);
    //===================== adding property to object
    car.assurance = "yes"
    console.log(car);
}
// propertyChange()

//=====================

/*
Function in Object
*/
function functionObj(params) {
    var a = {
        message: hello(), //call the function on the properties
    }
    console.log(a.message);
}

// the function that will be called
function hello() {
    return "this is return form hello function"
}
// functionObj()

//=====================

/*
Nested Object
creating object inside an object
*/
function nestedObj() {
    var nes = {
        nam: "kevin",
        age: 21,
        focust: {
            science: 3.5,
            math: 4,
            social: 3.1
        }
    }
    console.log(nes); // call all datas
    console.log(nes.focust.social); // call the data inside nested object
}
// nestedObj()

//=====================

/*
Loop object with ForIn
*/
function LoopObjwithForin() {
    var data = {
        names: "andy",
        class: 3,
        age: 21,
        focust: "Math"
    }
    //show all properties with forin
    for (var x in data) {
       console.log(data[x]);
    }
}
LoopObjwithForin()