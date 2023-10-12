let password = '1234-';
// Длина 4 символа и один из символов '-', '_';
if (password.length = 4 && password.includes('-', '_')) {
    console.log('Подходящий пароль');
} else {
    console.log('Неподходящий пароль');
}

let userName = 'viktor';
let userSurname = 'danilin';

let newUserName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
let newUserSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
console.log(newUserName);
console.log(newUserSurname);
console.log(userName === newUserName ? 'Имя было преобразовано' : 'Имя осталось без изменений');
console.log(userSurname === newUserSurname ? 'Фамилия была преобразована' : 'Фамилия осталась без изменений')
