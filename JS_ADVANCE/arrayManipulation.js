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

  var fruit2 = fruit.pop() //pop array
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
function arraySplice() {
  var city = ['jakarta', 'bandung', 'solo', 'jogja']
  console.log(city);
  city.splice(1, 0, 'medan', 'banten') //splice added element
  console.log(city);
  city.splice(3, 1) //splice remove element from array (index,how much index)
  console.log(city);
}

// arraySplice()
//================
/*
Array Reverse
The reverse() method reverses the order of the elements in an array.
The reverse() method overwrites the original array.
https://www.w3schools.com/jsref/jsref_reverse.asp
*/
function reverseArry() {
  var city = ["bandung", "jkt", "bogor", "solo"];
  console.log(city);
  var result = city.reverse(); //reverse the list of array
  return result;
}
// console.log(reverseArry());
//================

/*
Array Concate
The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.
https://www.w3schools.com/jsref/jsref_concat_array.asp
*/
function callConcate() {
  var data = ["car", "bike", "tricycle"];
  var driver = ["andy", "joko", "michael"];
  var driver2 = ["ricky", "kevin"]

  var results = data.concat(driver, driver2);
  return results;
}
// console.log(callConcate());
//================

/*
Array slice
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
https://www.w3schools.com/jsref/jsref_slice_array.asp
*/
function arrSlice() {
  var data = ["Bandung", "jogja", "solo"];
  var copy = data.slice(1);
  console.log(copy);
}
// arrSlice()
//================
function Quiz() {
  var words = "Saya belajar masak nasi goreng"
  console.log(words);
  var x = words.replace("masak", "makan")
  console.log(x);
}
// Quiz()
//================

/*
Array join
The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).
https://www.w3schools.com/jsref/jsref_join.asp
*/
function arrjoin() {
  var data = ["cat", "dog", "mouse", "wolf"];
  console.log(data.join(" ")); // join blank page (space) on each index
}
// arrjoin()
//================

/*
Array Split
the split array is similar with string split, it change the string to array, with split of specific value
*/
function arrSplit() {
  var vehicle = "last night she use her car"
  var result = vehicle.split(" "); //split by space
  var result2 = vehicle.split("t") //split with character t
  return result2
  // var data = ["car", "bike", "bus", "plane"];

}
// console.log(arrSplit());
//================
/*
Array indexOf
The indexOf() method returns the first index (position) of a specified value.
The indexOf() method returns -1 if the value is not found.
The indexOf() method starts at a specified index and searches from left to right.
By default the search starts at the first element and ends at the last.
Negative start values counts from the last element (but still searches from right to left).
https://www.w3schools.com/jsref/jsref_indexof_array.asp
*/
function arrindexOf() {
  var data = ["cat", "dog", "mouse", "wolf"];
  console.log(data.indexOf("mouse")); //search the index of in array index
}
// arrindexOf()
//================
/*
Array loop with forEach
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
ForEach is can be indexing with 3 param (item, index, array)
https://www.w3schools.com/jsref/jsref_foreach.asp
*/
function arrforEach() {
  var data = ["apple", "orange", "melon"];
  //loop with function foreach
  data.forEach(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  })
}
// arrforEach()
//================
/*
Array MAP
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
https://www.w3schools.com/jsref/jsref_map.asp
*/
function arrMap() {
  var data = ["dog", "cat", "snake", "uncal"];
  data.map(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);

  })
}
// arrMap()
function Quiz() {
  var strs = "Saya ingin belajar bersama"
  var conf = strs.split(" ")
  console.log(conf);
  conf.forEach(function (item, index) {
    console.log("item: ", item, "on index ", index);
  })
}
// Quiz()
//================
/*
Array Filter
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
https://www.w3schools.com/jsref/jsref_filter.asp
*/
function arrFilter() {
  let peoples = [{
      name: "andi",
      gender: "male"
    },
    {
      name: "sarah",
      gender: "female"
    }, {
      name: "cindy",
      gender: "female"
    }
  ];
  let female = peoples.filter(people => {
    return people.gender === "female"
  });
  return female
}
// console.log(arrFilter());
//================
/*
Array Every
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array
https://www.w3schools.com/jsref/jsref_every.asp
*/
function arrEvery() {
  let products = [{
      name: "Apple",
      type: "fruit"
    },
    {
      name: "monitor",
      type: "Peripheral"
    },
    {
      name: "water melon",
      type: "fruit"
    },
    {
      name: "Table",
      type: "furniture"
    }
  ];
  console.log(products.every(product=>product.type === "fruit"));
  // return product;
}
arrEvery()