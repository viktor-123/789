let a = [];
let n = 0;
let m = 100;
let count = 100;
for ( let i = m; i < count; ++i) {
    a.push( Math.round(Math.random() * n));
}
console.log(a);

function reverseString(str) {
    let reverse = 'Привет, мир!';
    for (const i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseString('Привет, мир!'));

let roadMines = [true, true, true, true, true, true, true, true, true, true];
let position = roadMines.indexOf();
let foundMine = true;
for ( let mine of roadMines) {
    console.log('Танк переместился на ${++position + 1}' );
    if (mine == true) {
        foundMine = true;
        console.log('Танк повреждён');
        continue;
    }
} 
console.log( foundMine ? 'Танк уничтожен' : 'Танк не уничтожен');

let x = [];
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let day = 'вторник';
let indexWeek;

for (let i = 1; i < 32; i++){
    x.push(i);
}

for (let i = 0; i < week.length; i++) {
    if (week[i] == day) {
        indexWeek = i;
    }
}

for (let elem of x) {
    for (let y = indexWeek; y < week.length; y++) {
        if (y == 6) {
            indexWeek = 0;
        }
        console.log('${elem} января, ${week[y]}');
    }
}



        
    


