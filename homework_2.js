'use strict';
//1
for (let i = 5; i < 100; i++) {
    // console.log(i);
}

//2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10){
        // console.log(array1[i]);
    }
}

//3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of array2){
    if (array2[i] === 5){
        // console.log("yes")
    }
}

// or simpler
// if (5 in array1) {console.log("yes")};

//4
let array3= [1, 2, 3, 4, 5];
let sum = 0
for (let i of array3){
    sum += i
}
// console.log(sum)

//5
let array4= [1, 2, 3, 4, 5];
let sum1 = 0
for (let i of array3){
    sum1 += i
}
// console.log(sum1/array4.length)

//6
let array5 = [1, 2, 3, 7, 6, 9];
for (let i of array5){
    if (i === 7){
        continue
    }
    // console.log(i)
}

//7 
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };
// console.log(user.studentstatus)  

//8
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}
if (user2.studentstatus === "active" && user2.age === 20){
    console.log("hello user")
} else if (user2.name === "levani"){
    console.log("hello levani")
} else if (user2.studentstatus === "active" || user2.age < 25){
    console.log("hello ana")
} else {
    console.log("error")
}

//or 

console.log(user2.studentstatus === "active" && user2.age === 20 ? "hello user" : user2.name === "levani" ? "hello levani" : user2.studentstatus === "active" || user2.age < 25 ? "hello ana" : "error")

//9
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let i of array6){
    if (i % 2 === 0){
        console.log(i)
    }
}

//10 
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (let i = 0; i < users.length; i++){
    if (users[i].status === true){
        console.log(users[i])
    }
}
