/*
Array SHIFT
Shift is used to remove the first element from array
*/
function arrayShift() {
    var numbah = [12, 44, 23, 56, 2]
    var city = ["bandung", "jkarta", "solo"]

    console.log(city);
    // city = city.shift();

    var city2 = city.shift()
    console.log(city2);
    return city
}
// console.log(arrayShift());

//================

/*
Array UNSHIFT
PUSH is used to add an element to array
*/
function unshiftArray() {
    var planet = ["jupiter", "mars", "saturnus"]

    console.log(planet);
    planet.unshift("earth", "pluto")
    console.log(planet);

}
// unshiftArray()

//================

/*
Array POP
POP is used to remove the last element from array
*/
function popArray() {
    var fruit = ["orange", "grape", "melon"]
    console.log(fruit);

    var fruit2 = fruit.pop()//pop array
    console.log(fruit2);
    return fruit

}
// console.log(popArray());

//================

/*
Array PUSH
PUSH is used to add an element to array
*/
function pushArray() {
    var animal = ["horse", "duck", "dog", "tiger"]
    console.log(animal);

    animal.push("snake") //pushing array
    console.log(animal);
    // return animal
}
// pushArray()

//================

/*
Array SPLICE
- adding elemet to array with specified position index
- Replacing elemetn to array with specific index
*/
function arraySplice(){
    var city = ['jakarta','bandung','solo','jogja']
    console.log(city); 
    city.splice(1,0,'medan','banten') //splice added element
    console.log(city);
    city.splice(3,1) //splice remove element from array (index,how much index)
    console.log(city);
}

// arraySplice()