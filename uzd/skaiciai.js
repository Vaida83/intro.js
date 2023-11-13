console.clear();
//Vidurkis
const skaiciai = [1, 5, 8, 10, 9, 2, 8, 4, 6];

let totalSum = 0;
let count = 0;

for (let i = 0; i < skaiciai.length; i++) {
    if (typeof skaiciai[i] === 'number') {
        totalSum += skaiciai[i];
        count++;
    }
}

const vidurkis = totalSum / count;
console.log('Vidurkis:', vidurkis);

//MEDIANA

function mediana(skaiciai) {
    const sorted = skaiciai.sort((a, b) => a - b);
    const middleIndex = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
    }

    return sorted[middleIndex];
}

console.log('Mediana:', mediana(skaiciai));

