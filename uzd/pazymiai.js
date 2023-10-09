console.clear();

const marks0 = [10, 2, 8, 4, 'a', 6];
const marks1 = [10, 2, 8, 4, 'a', 6];
const marks2 = [10, 2, 8, 4, 'a', 6];


let totalSum = 0;
let count = 0;

for (let i = 0; i < marks.length; i++) {
    if (typeof marks[i] === 'number') {
        totalSum += marks[i];
        count++;
    }
}

const average = totalSum / count;
console.log(average);