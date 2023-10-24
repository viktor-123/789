let objects = [
    { name: 'Василий',
      surname: 'Васильев' },
    { name: 'Иван',
      surname: 'Иванов' },
    { name: 'Пётр',
      surname: 'Петров' }  
];
function filterObjValues(objects, key, value) {
    const result = [];
    for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];
        if (obj[key] === value) result.push(obj);
    }
    return result;
}
const filteredArray = filteredArray(objects, 'name', 'Иван');
console.log(filteredArray);

let arr = [
    { label: 'Russia' },
    { label: "Germany" },
    { label: "France" },
    { label: "USA" }
]
function createSelectEl(arr, str) {
    const select = document.body.appendChild(document.createElement('select'));
    arr.forEach(function(el) {
        const option = document.createElement('option');
        option.innerText = Object.values(el);
        select.appendChild(option)
        if (option.value === str) {
            option.setAttribute('selected', true);
        }
    });
    return select
}
createSelectEl(array, 'France')