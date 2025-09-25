// task 1
// let names = ["Abdul", "Qafar", "Amir"];
// names[1] = "Classified";

// console.log(names);

//task 2
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(`Episode ${i + 4}: ${arr[i]}`);
// }

//task 3
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];

// function annualSalary() {
//     let sum = 0;
//     for (let a = 0; a < salary.length; a++) {
//         for (let b = 0; b < salary[a].length; b++) {
//             sum += salary[a][b];
//         }
//     }
//     return sum;
// }
// function monthlySalary(month) {
//     let m = month - 1;
//     let arr = [];
//     for (let a = 0; a < salary.length; a++) {
//         arr.push(salary[a][m]);
//     }
//     return arr;
// }
// function quarterSalary(q) {
//     let start = (q - 1) * 3;
//     let end = start + 3;
//     let sum = 0;
//     for (let a = 0; a < salary.length; a++) {
//         for (let b = start; b < end; b++) {
//             sum += salary[a][b];
//         }
//     }
//     return sum;
// }
// console.log("il uzre cem", annualSalary());
// console.log("5 ci ay maaslari", monthlySalary(5));
// console.log("3 cu rubun cemi", quarterSalary(3));

//task 4
// let numbers = [];

// for (let i = 0; i < 5; i++) {
//     let num = Number(prompt(`eded ${i + 1} i daxil edin`));
//     numbers.push(num);
// }
// let minNumber = Math.min(...numbers);
// console.log("en kicik eded", minNumber);

//task 5
// let text = '32, 31, 34, 36, 31';
// console.log(text.split(', ').join('; '));

//task 6
// let friends = ["Abdul", "Qafar", "Amir"];
// friends.push("Murad");

// friends.shift();
// console.log(friends);

//task 7
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let first = numbers[0];
// let second = numbers[1];
// let rest = numbers.slice(2);

// console.log("birinci", first);
// console.log("ikinci", second);
// console.log("qalan massiv", rest);

//task 8
// let arr = [12, 45, 7, 89, 23, 56, 91, 34, 67, 10];
// let max = Math.max(...arr);
// console.log("maksimum deyer", max);

//task 9
// let numbers = [2, 4, 6, 8, 10];
// let copy = numbers.slice();

// for (let i = 0; i < copy.length; i++) {
//     copy[i] = copy[i] * 2;
// }
// console.log("orijinal massiv", numbers);
// console.log("ikiqat artirilmis kopya", copy);

//task 10
// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
// ];
// let development = employees.filter(employee => employee[1] === 'development');
// console.log(development);

// task 11
// let musteri = ["Abdul Rehimzade", "Amir Ahmedov"];

// function users(text) {
//     if (text === "") {
//         let deleted = musteri.shift();
//         console.log(deleted + " novbede cixdi");
//     } else if (text === "=") {
//         console.log("novbede: " + musteri);
//     } else {
//         musteri.push(text);
//         console.log(musteri);
//         console.log(musteri);
//     }
// }
// users("Qafar Qemberzade");
// users("");
// users("=");
// users("");
// users("=")

// task 13
// function negatives(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       console.log(numbers[i]);
//     }
//   }
// }
// let arr = [5, -3, 8, -1, 0, -7, 10];
// negatives(arr);

//task 14
// function positive(numbers) {
//     numbers.forEach(function (num) {
//         if (num > 0) {
//             console.log(num);
//         }
//     });
// }
// let arr = [5, -3, 8, -1, 0, 12, -7];
// positive(arr);

// task 14(2 ci yolu)
// function positive(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             console.log(numbers[i]);
//         }
//     }
// }
// let arr = [5, -3, 8, -1, 0, 12, -7];
// positive(arr);

//task 16
// function kebabToUpper(text) {
//     let parts = text.split("-");
//     let upper = parts.map(word => word.toUpperCase());
//     return upper.join("_");
// }
// console.log(kebabToUpper('first-user'));
// console.log(kebabToUpper('my-super-project'));

//task 17
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// let newArr = numbers.map(num => {
//     if (num < 0) {
//         return Math.abs(num);
//     } else {
//         return num * 2;
//     }
// });
// console.log("orijinal massiv", numbers);
// console.log("yeni massiv", newArr);

//task 18
// function ThreeChars(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i].slice(0, 3));
//     }
//     return result;
// }
// let words = ["Salam", "Dunya", "Python", "JavaScript"];
// console.log(ThreeChars(words));

//task 19
// let names = ["Abdul", "Qafar", "Amir", "Fuad", "Altay", "Nilufer"];

// let filtered = [];
// for (let i = 0; i < names.length; i++) {
//     if (names[i][0] === "A") {
//         filtered.push(names[i]);
//     }
// }
// console.log("A ile baslayanlar", filtered);

//task 20
// let price = [100, 200, 50, 80, 120];

// function addTax(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * 1.2);
//     }
//     return result;
// }
// let finalPrices = addTax(price);
// console.log("ƏDV ile qiymetler", finalPrices);

//task 21
// function countEvensAndOdds(arr) {
//     let text = 0;
//     let text2 = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             text++;
//         } else {
//             text2++;
//         }
//     }

//     return `massivde ${text} cut və ${text2} tek eded var`;
// }
// let numbers = [1, 2, 3, 4, 6, 8];
// console.log(countEvensAndOdds(numbers));