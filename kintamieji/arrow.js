console.clear();

const n1 = 7;
const n2 = 5;

//function declaration

function suma(a, b) {
    return a + b;
}
console.log(suma(n1, n2));
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);


function skirtumas(a, b) {
    return a - b;
}
console.log(suma(n1, n2));
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

//kintamajam priskirti anonimine funkcija

// const skirtumas = function (a, b) {
//     return a - b;
// }
// console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

function sandauga(a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

//arrow (rodykline) funkcija, zymima =>

// const sandauga = (a, b) => {
//     return a * b;
// }
// console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// const dalmuo = (a, b) => {
//     return a / b;
// }
// console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`);

//salygos:
//jie logikos bloke yra tik 1 procedura (statement)
//tai galime nera6ysi {return}

const dalmuo = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`);

function kvadratu(a) {
    return a ** 2
}
console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
console.log(`${n2} ** 2 = ${kvadratu(n2)}`);

//jeigu parametru bloke yra tik vienas parametras, tai galima nerasyti ( )

// const kvadratu = a => a ** 2;
// console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
// console.log(`${n2} ** 2 = ${kvadratu(n2)}`);

//funkcija gauna zodi, bet grazina tik pitma raide

const pirmaRaide = zodis => zodis[0];
console.log(pirmaRaide(5));
console.log(pirmaRaide(''));


