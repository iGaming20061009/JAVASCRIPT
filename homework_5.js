/* მოცემულია მასივი, შემდეგი მნიშვნელობებით 
- let array1 =[“hello1”, 14,24, “hello2”] 
გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;*/

let array1 =["hello1", 14,24, "hello2"]
console.log(array1.filter(l => typeof l === "number"));

/* 
მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, 
რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof 
მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. 
თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.
*/
let link = "https://google.com";
function containsHttps(string) {
    return string.indexOf("https://") >= 0
        ? "yes it contains 'https://'"
        : "no it doesnt contain 'https://'";
}
console.log(containsHttps(link));

/*
მოცემულია მასივი:
let array4 = [1, 2, 3, 4, 5];
foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
*/

let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach((value) => (sum += value));
console.log(sum);

/*
მოცემულია მასივი:
let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
*/
let languages = ["html", "css", "javascript", "python", "php"];
console.log(languages.filter((l) => l.length > 3));

/*
მოცემულია მასივი:
let words = ['madrid', 'rome', 'milan', 'berlin'];
filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან n-ს; 
(m an m ewera, me m da n shevcvale rom saintereso iyos)
*/
let words = ["madrid", "rome", "milan", "berlin"];
console.log(words.filter((l) => l.includes("m") && l.includes("n")));

/*
შეამოწმეთ მოცელუმ მასივში let array6 = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით.
*/

let array6 = [-1, -2, -3, 4];
console.log(array6.some((e) => e > 0));

/*
მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. 
( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)
*/

let str = "12345"
let List = str.split("")
let strSum = 0;
List.forEach((value) => (strSum += Number(value)));
console.log(strSum);
