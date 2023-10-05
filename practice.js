let S = Math.abs(x1 - x2) * Math.abs(y1 - y2);
console.log(S);

// let x1 = 2, y1 = 3, x2 = 10, y2 = 5 //площадь равна 16;
// let x1 = 10, y1 = 5, x2 = 2, y2 = 3 //площадь равна 16;
// let x1 = -5, y1 = 8, x2 = 10, y2 = 5 //площадь равна 45;
// let x1 = 5, y1 = 8, x2 = 5, y2 = 5 //площадь равна 0;
// let x1 = 8, y1 = 1, x2 = 5, y2 = 1 //площадь равна 0

let first = 13.123456789;
let second = 2.123;
let precision = 5;
Math.round(13.123456789); // 12345
Math.round(2.123); // 12300
console.log(Math.round(13.123456789));
console.log(Math.round(2.123));

console.log(12345>12300);
console.log(12345<12300);
console.log(12345>=12300);
console.log(12345<=12300);
console.log(12345===12300);
console.log(12345!=12300)

let n = 0;
let m = 100;
let range = Math.abs(n - m);
let x = Math.round(Math.random);
let min = Math.min(n, m);

console.log(min + x)
