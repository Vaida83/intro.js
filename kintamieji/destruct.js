console.clear();
const marks = [10, 2, 8, 4, 6];
const mark1 = marks[0];
const mark2 = marks[1];
const mark3 = marks[2];
const otherMarks = [
    marks[3],
    marks[4],
];

console.log(mark1, mark2, mark3);
const [m1, m2, m3, ...otherMs] = marks;
console.log(m1, m2, m3, ...otherMs);

const user = {
    name: 'Jonas',
    age: 99,
    isMaried: true,
};

//const name = user.name;
//const age = user.age;
//const isMaried = user.isMaried;

//console.log(name, age, isMaried);

const { name, age } = user;
console.log(name, age);

const zip = 12345;
const street = 'Gedimino g.';
const houseNr = 7;

const address = { zip, gatve: street, houseNr };

console.log(address);
