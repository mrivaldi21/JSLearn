/*
FOR Loop
*/
var x = 0;

function loops(x) {
    for (var i = 0; i <= x; i++) {
        console.log("run :", i);

    }
}
loops(2)
//=============================

/*
While Loop
*/
while (x < 2) {
    console.log("while :", x);
    x++;
}

//=============================

/*
DO While Loop
*/
var i = 0;
do {
    i = i + 1;
    console.log("result ", i);
} while (i < 5);
console.log("log after while ", i);
//=============================

/*
Nested Loop
*/
// for (var i = 0; i < 2; i++) {
//     console.log("first i", i);
//     for (var j = 0; j < 2; j++) {
//         console.log("second j ", j);
//     }
//     console.log("");
// }
//=============================

/*
infinity Loop
*/
// for (let index = 0; index >=0; index++) {
//     console.log("the i vvalue is: ",i);

// }

//=============================

/*
Break loop
*/
for (let index = 0; index <= 10; index++) {
    console.log(i);
    if (i === 3) {
        break;
        // console.log(i);
    }


}
