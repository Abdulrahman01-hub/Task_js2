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
// console.log("il uzre cem", getAnnualSalary());
// console.log("5 ci ay maaslari", getMonthlySalary(5));
// console.log("3 cu rubun cemi", getQuarterSalary(3));

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