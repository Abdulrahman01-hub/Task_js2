// task 1
// function ActiveUser(username) {
//   console.log(username + " is active now");
// }
// ActiveUser("Fidan");
// ActiveUser("Abdulrəhman");
// ActiveUser("Qafar");

// task 2
// function findMax(a, b, c) {
//     let max = a;

//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }
//     console.log("en boyuk eded" + max);
// }
// findMax(5, 12, 9);
// findMax(10, 20, 30);
// findMax(35, 25, 15);

// task 3
// function Kapital(ruble, dollar) {
//     const rate = 75;
//     let total = ruble + (dollar * rate);
//     console.log("butun depozitler uzre mebleg" + total + " rubl");
// }
// Kapital(100, 10);

//task 4
// function numberWord(n) {
//     const text = ["", "bir", "iki", "uc", "dord", "bes", "alti", "yeddi", "sekkiz", "doqquz"];
//     const text2 = ["", "on", "iyirmi", "otuz", "qirx", "elli", "altmis", "yetmis", "seksen", "doxsan"];

//     if (n < 10) {
//         return text[n];
//     } else if (n < 20) {
//         return "on " + text[n - 10];
//     } else {
//         let onluq = text2[Math.floor(n / 10)];
//         let teklik = n % 10 ? " " + text[n % 10] : "";
//         return onluq + teklik;
//     }
// }
// console.log(numWord(5));
// console.log(numWord(10));
// console.log(numWord(30));
// console.log(numWord(55));

// task 5
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(5, 10));
// console.log(min(15, 20));
// console.log(min(5 , 5));

// task 6
// function calc(a, b, operator) {
//     if (operator === "+") {
//         return a + b;
//     } else if (operator === "-") {
//         return a - b;
//     } else if (operator === "*") {
//         return a * b;
//     } else if (operator === "/") {
//         return b !== 0 ? a / b : "sifira bolmek olmaz";
//     } else {
//         return "duzgun operator daxil edin (+, -, *, /)";
//     }
// }
// console.log(calc(4, 6, "+"));
// console.log(calc(6, 4, "-"));
// console.log(calc(6, 6, "*"));
// console.log(calc(6, 2, "/"));

// task 7
// function ticket(number) {
//     let str = String(number);

//     if (str.length !== 6) {
//         return false;
//     }
//     let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
//     let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
//     return sum1 === sum2;
// }
// console.log(ticket(234801));
// console.log(ticket(123456));
// console.log(ticket(555555));

// task 8
// function capitalizeWords(text) {
//     return text
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
// }
// console.log(capitalizeWords("Hello my name is Harry"));

// task 9
// function isEven(number) {
//   return number % 2 === 0;
// }
// console.log(isEven(2));
// console.log(isEven(7));
// console.log(isEven(0));

// task 10
// function isValidNumber(phone) {
//   return phone.startsWith("+7") && phone.length === 12;
// }
// console.log(isValidNumber("+71234567890"));
// console.log(isValidNumber("+7987654321"));
// console.log(isValidNumber("81234567890"));

//task 11
// function numCounter(text) {
//   const letters = text.match(/[a-zA-Z]/g);
//   return letters ? letters.length : 0;
// }
// console.log(numCounter("Hello123!"));
// console.log(numCounter("15263538479359486()-="));
// console.log(numCounter("AbcDefGHi"));

//task 12
// function main(number) {
//   if (number < 2) return false;

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(main(7));
// console.log(main(8));

//task 13
// function sumOfDigits(number) {
//   let sum = 0;
//   let str = String(number);

//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }
//   return sum;
// }
// console.log(sumOfDigits(1234));
// console.log(sumOfDigits(567));
// console.log(sumOfDigits(0));

//task 14
// function isPalindrome(text) {
//   text = text.toLowerCase();
//   let reversed = text.split("").reverse().join("");
//   return text === reversed;
// }
// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("Racecar"));

//task 15
// function longestWord(sentence) {
//   const words = sentence.split(" ");
//   let longest = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }
// console.log(longestWord("Javascript is a powerful language"));
// console.log(longestWord("I love coding"));
// console.log(longestWord("Short long longer longest"));

//task 16
// function daysBetweenDates(date1, date2) {
//   const d1 = new Date(date1);
//   const d2 = new Date(date2);
//   const diffTime = Math.abs(d2 - d1);
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   return diffDays;
// }
// console.log(daysBetweenDates("2025-04-01", "2025-04-10"));
// console.log(daysBetweenDates("2025-01-01", "2025-01-31"));
// console.log(daysBetweenDates("2025-05-10", "2025-05-01"));

//task 17
// function reverseArray(text) {
//   const arr = text.split(", ");
//   arr.reverse();
//   return arr.join(", ");
// }
// console.log(reverseArray("1, 2, 3, 4, 5"));
// console.log(reverseArray("a, b, c, d"));

//task 18
// function userInfo(name, age) {
//   return `${name} is ${age} years old`;
// }
// console.log(userInfo("Murad", 25));
// console.log(userInfo("Qafar", 30));
// console.log(userInfo("Abdul", 18));

//task 19
// function charCodes(text) {
//   return text
//     .split("")
//     .map(ch => ch.charCodeAt(0))
//     .join(", ");
// }
// console.log(charCodes("ABC"));
// console.log(charCodes("Hello"));

//task 20
function factorial(num) {
    let hasil = 1
    for (let a = 1; a <= num; a++) {
        hasil *= a
    }
    console.log(hasil);
}
factorial(5)
