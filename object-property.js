const student = [
    {id: 12, name: 'Jamal'},
    {id: 22, name: 'Kamal'},
    {id: 44, name: 'Tomal'},
    {id: 55, name: 'Galib'}
];
const names = student.map(s => s.name);
console.log(names);

const ids = student.map(s => s.id);
console.log(ids);

const filterStudent = student.filter(x => x.id>22);
console.log(filterStudent);

const findStudent = student.find(x => x.id>12);
console.log(findStudent);

