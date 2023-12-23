let x = 100;
if (x < 50){
    console.log("less than 50");
} else if (x > 20){
    console.log("greater than 20");
}else {
    console.log("error");
}

let name2 = "mariam"
if (name2 === "mariam"){
    console.log(true);
} else{
    console.log(false);
}

let name1 = name === "mariam" ? true : false

switch (name){
    case "mariam":
        console.log(true);
        break;
    default:
        console.log(false);
}

let num = Number(prompt("ENTER NUMBER"));
if (num % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}

