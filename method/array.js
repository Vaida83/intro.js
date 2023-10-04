console.clear();

console.log(10, 2, 8, 4, 6);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][0]);
console.log([10, 2, 8, 4, 6][1]);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][-1]);
console.log([10, 2, 8, 4, 6][8888]);


console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(1));
console.log([10, 2, 8, 4, 6].at(-1));

const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [5, 6];
const a4 = [7, 8];
const a12 = a1.concat(a2);
const a123 = a1.concat(a2, a3);
const a1234 = a1.concat(a2, a3, a4);

console.log(a1, a2, a3, a4);
console.log(a123);
console.log(a12);

console.clear();
const marks = [10, 2, 8, 4, 6];
console.log(marks.includes(10));
console.log(marks.includes(-1));

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students.includes('Maryte'));
console.log(students.includes('maryte'));

console.log(marks.indexOf(5));
console.log(marks.indexOf(6));

console.clear();

//Array.isArray - vienintelis budas, kuriuo galima atskirti ar duotas domuo yra masyvas ar ne ar yra su []

console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

console.log(Array.isArray(5));
console.log(Array.isArray('asd'));
console.log(Array.isArray(null));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray([]));

console.clear();

//join

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const abcJoin = abc.join();
const abcJoin2 = abc.join('-');
const abcJoin3 = abc.join(', ');


console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2);
console.log(abcJoin3);









