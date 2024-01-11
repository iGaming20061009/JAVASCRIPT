// ძველ სავარჯიშოებსაც ვაკეთებ რომ გავივარჯიშო
"use strict";
/*1 მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები 
მეთოდის საშუალებით;
*/
let array1 = ["hello1", 14, 24, "hello2"];
let filteredArray1 = array1.filter((value) => typeof value == "number");
console.log(filteredArray1);

/*2 მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25]; შექმენით ახალი მასივი map ფუნქციის საშუალებით
შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, 
მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
*/
let array2 = [14, 150, "css", null, "javascript", 25];
let mappedArray2 = array2.map((value) =>
    typeof value == "number"
        ? value ** 2
        : typeof value == "string"
        ? value.toUpperCase()
        : value
);
console.log(mappedArray2);

//3 მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.
let info = "good day";
let moddedInfo = info.split(" ").slice(1, 2);
console.log(moddedInfo);
//or
let moddedInfo2 = info.split(" ")[1];

//4 დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.
function stringLength(string) {
    return string.length;
}
console.log(stringLength(moddedInfo2));

/*5 prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? 
სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, 
გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, 
თუ არა მაშინ დაბეჭდეთ არასწორია.
*/
function capital() {
    let correct = "tbilisi";
    // let answer = prompt("Capital of Georgia : ");
    // davakomentare imitom rom sul errors agdebs sxva shemtxvevashi
    // console.log(answer.toLowerCase === correct ? "correct" : "wrong");
}
capital();

/*6 მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ 
indexof მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.
*/
let link = "https://google.com";
function containsHttps(string) {
    return string.indexOf("https://") >= 0
        ? "yes it contains 'https://'"
        : "no it doesnt contain 'https://'";
}
console.log(containsHttps(link));

/*7 მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 
ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა 
მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. 
*/
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(-2, 1, "strawberry");
console.log(fruits);

/* 8 შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
დაბეჭდეთ მასივისი ახალი ელემენტები.
*/

let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");
array.unshift("html", "css");
console.log(array.length);
array.shift();
array.pop();
console.log(array);

/* 9 შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;
გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
*/

let fruit = ["orange", "banana", "kiwi"];
console.log(fruit.length);
fruit.push("apple", "pineapple");
fruit.unshift("watermelon");
console.log(fruit.length);
fruit.splice(2, 0, "mango");
fruit.shift();
fruit.pop();
console.log(fruit.length);

/* 10 მოცემულია მასივი let array3 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
 */

let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, "a", "b", "c");
console.log(array3);

/* 11 მოცემულია მასივი:
let array4 = [1, 2, 3, 4, 5];
foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
*/

let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach((value) => (sum += value));
console.log(sum);

/* 12  მოცემულია მასივი:
let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
*/
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let dividedArray = array5.map((value) => value / 3);
console.log(dividedArray);

/* 13
მოცემულია მასივი:
let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
*/
let languages = ["html", "css", "javascript", "python", "php"];
console.log(languages.filter((l) => l.length > 3));

/* 14 მოცემულია მასივი:
let words = ['madrid', 'rome', 'milan', 'berlin'];
filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან n-ს; (m an m ewera, me 
m da n shevcvale rom saintereso iyos)
*/
let words = ["madrid", "rome", "milan", "berlin"];
console.log(words.filter((l) => l.includes("m") && l.includes("n")));

/* 15
შეამოწმეთ მოცელუმ მასივში let array6 = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით.
*/
let array6 = [-1, -2, -3, 4];
console.log(array6.some((e) => e > 0));

/* 16 
მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
წაშალეთ ამ მასივიდან რიცხვი 10;
*/
let array7 = [15, 100, 25, 10, 36];
array7.splice(array7.indexOf(10), 1);
console.log(array7);

/* 17 
მოცემულია მასივი:  let array8 = [1, 2, 3 , 4 , 5]
მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;
*/
let array8 = [1, 2, 3, 4, 5];
array8.splice(array8.indexOf(3), 1, "three");
console.log(array8);
