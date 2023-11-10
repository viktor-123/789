const array = [
    { sname: '', fname: '', lname: '', bdate: '', startlearn: '', fac: ''}
]
buildTable(array)
function buildTable(data) {
    let table = document.getElementById('mytable')
    table.innerHTML = ''
    for (let i = 0; i < data.length; i++) {
        let fioObj = data[i].sname + "\n" + data[i].fname + "\n" + data[i].lname;;
        let old = age(data[i].bdate);
        let row = `
        <tr>
        <td>${fioObj}</td>
        <td>${data[i].fac}</td>
        <td>${data[i].startlearn}</td>
        <td>${data[i].bdate}</td>
        <td>${old}</td>
        </tr>
        `
        table.innerHTML += row
    } 
}
/*document.getElementById("inputFac").addEventListener('keyup', function() {
    let value = document.getElementById('inputFac').value
    console.log(value)
    let data = tableSearch(value, array)
    buildTable(data)
})*/
function tableSearch(value, data) {
    let filterData = []
    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        let name = data[i].fac.toLowerCase()
        if (name.includes(value)) {
            filterData.push(data[i])
        }
    }
    return filterData
}
/*document.getElementById("inputFio").addEventListener('keyup', function() {
    let value = document.getElementById('inputFio').value
    console.log(value)
    let data = tableSearch(value, array)
    buildTable(data)
})*/
function tableSearch(value, data) {
    let filterData = []
    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        let name = data[i].fname.toLowerCase()
        if (name.includes(value)) {
            filterData.push(data[i])
        }
    }
    return filterData
}
function onAddStudent() {
    const inputStudentName = document.getElementById('student_ _name').value;
    const inputStudentSName = document.getElementById('student_ _sname').value;
    const inputStudentLName = document.getElementById('student_ _lname').value;
    const inputStudentBDate = document.getElementById('student_ _bdate').value;
    const inputStudentStLearn = document.getElementById('student_ _startLearn').value;
    const inputStudentFac = document.getElementById('student_ _faculty').value;
    let input = {
        fname: inputStudentName,
        sname: inputStudentSName,
        lname: inputStudentLName,
        bdate: inputStudentBDate,
        startlearn: inputStudentStLearn,
        fac: inputStudentFac,
    }
    console.log(input);
    array.push(input);
    buildTable(array);
}
function age(str) {
    let [date, month, year] = str.match(/(\d+)/g);
    --month;
    let now = new Date;
    let nowYear = now.getFullYear(),
        nowMonth = now.getMonth(),
        nowDate = now.getDate();
    return nowYear - year - (0 > (nowMonth - month || nowDate - date))
};