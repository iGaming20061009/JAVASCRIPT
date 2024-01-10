"use strict";
//1
function sum(list) {
    let sum = 0;
    for (let i of list) {
        sum += i;
    }
    return sum;
}

console.log(sum([10, 50, 6, 7, 8, 11, 6, 3, 9]));

//2
let user = {
    firstname: "giorgi",
    lastname: "saakadze",
    age: 32,
    isloggedin: true,
};

function checkUser(dict) {
    if (dict.isloggedin === true) {
        return `${dict.firstname} ${dict.lastname}`;
    } else {
        return false;
    }
}
console.log(checkUser(user));

//3
function maximum(list) {
    let maximum = 0;
    for (let i of list) {
        if (maximum < i) { maximum = i};
    }
    return maximum;
}
console.log(maximum([10, 50, 6, 7, 8, 11, 6, 3, 9]));

//or
function maximum2(list) {
    return Math.max(...list); //used google for Math.max syntax here
}
console.log(maximum2([10, 50, 6, 7, 8, 11, 6, 3, 9]));

//4
function oddOrEven(num) {
    return num % 2 == 0 ? "this number is even" : "this number is odd";
}
console.log(oddOrEven(10));

//5
let array = [1, 2, 3, 4, 5];
function reversed(list) {
    let reversed = [];
    for (let i = 0; i < list.length; i++) {
        reversed.unshift(list[i]); // because list[-i] didn't work
    }
    return reversed;
}
console.log(reversed(array));

// or much faster, without a loop though
console.log(array.reverse());

//6
let a = (age) => (age < 18 ? "underage" : "adult");
console.log(a(18));
