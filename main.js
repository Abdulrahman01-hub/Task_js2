//task 1
// let input = 15;
// let str = input.toString();
// let output = str[0] + " " + str[1];
// console.log(output);
// alert(output);

//task 2
// let n = 12343;
// let x = n.toString().length;

// console.log(x);
// alert(x);

//task 3
// function numbers(n) {
//     let num = 0;
//     for (; n !== 1; num++) {
//         n = (n % 2 === 0) ? n / 2 : n + 1;
//     }
//     return num;
// }
// console.log(numbers(11));

//task 4
// function kvadratlar(a, b) {
//     return a * a + b * b;
// }
// let a = 2;
// let b = 3;
// let netice = kvadratlar(a, b);

// console.log("cavab", netice);

//task 5
// let eded = 235;
// let a = Math.floor(eded / 100);  
// let b = Math.floor((eded % 100) / 10);  
// let c = eded % 10;                    

// let hasil = a * b * c;
// console.log("cavab", hasil); 

//task 6
// function time(t1, t2, t3) {
//     return Math.min(t1, t2, t3);
// }
// let t1 = 31;
// let t2 = 15;
// let t3 = 40;

// let result = time(t1, t2, t3);
// console.log("misa'nin sececeyi minimal vaxt", result);

//task 7
// let letters = ["a", "b", "c"];

// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i].repeat(i + 1));
// }

//task 8
function quldurlar(a, m) {
    let n = 1;
    while (true) {
        let total = n * a + (n * (n - 1)) / 2;
        if (total === m) {
            return n;
        } else if (total > m) {
            return -1;
        }
        n++;
    }
}

let a = 5;
let m = 25;

console.log(quldurlar(a, m));
