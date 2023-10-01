/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
*/

console.clear();
console.log('START')

 for (let i = 0; i <= 5; i++) {
console.log(i, "pirmas");
 }
 console.log('PAUSE');
 for (let i = 0; i <= 5; i++) {
   console.log(i, "antras");
    }
    console.log('FINISH')

 console.clear();
for (let f = 0; f < 10; ++f) {
console.log(f, 'labas');
}
console.clear();

for (let n = 0; n < 7; ++n) {
  const sentence = `The number is: ${n+1}.`;
  console.log(sentence);
 }
 console.clear();

 //Skaiciai intervale nuo 3 iki 13 imtinai yra: 3 4 5 6  7 8 9 10 11 12 13.

//const start = 3;
//const finish = 8;
//let numberSequence = '';
//numberSequence += ' 3';
//numberSequence += ' 4';
//numberSequence += ' 5';
//numberSequence += ' 6';
//numberSequence += ' 7';
//numberSequence += ' 8';

//for (let i = start; i <= finish; i++) {
//numberSequence += ' ' + i;
//}
//const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence}.`;
//console.log(numberLine);
console.clear();

//Skaiciai intervale nuo 3 iki 8 imtinai yra: 3, 4, 5, 6, 7, 8.

const start = 3;
const finish = 8;
let numberSequence2 = start;
for (let i = start; i < finish; i++) {
   numberSequence2 += ', ' + (i + 1);
}

const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra: ${numberSequence2}.`
console.log(numberLine2);

console.clear();
//spausdinti lyginius skaicius
//tas pats i ++, i+=, i = i + 1 (gali buti ir + 0.5 ir +3 ir t.t., bet stengtis darbo su desimtainiais skaiciais)
for (let i = 0; i <= 10; i++) {
   if (i % 2 === 0) {
      console.log(i, 'lyginis');
   } else {
console.log(i, 'nelyginis')
   }
}
 console.log('-------------');

let p = 0;
for (let p = 3; p <= 10;) {
   console.log(p, 'ciklas');

   p += 2;
}
console.log(p, 'uz ciklo')

//arba

let d = 0;
for (; d <= 10;) {
   console.log(d, 'ciklas');

   d += 2;
}
console.log(d, 'uz ciklo');

console.clear();

const word = 'zodelytis';
//Raide: z;
//Raide: o;
//Raide: d;
//Raide: i;
//Raide: s;

for (let i = 0; i < word.length; i++) {
   console.log(i, `Raide: ${word[i]}`);
}

console.clear();

const marks = [10, 2, 8, 4, 6, 8, 5, 6];

let totalSum = 0;
const amount = marks.length;

for (let i = 0; i < amount; i++) {
   totalSum += marks[i];
   console.log(`${i})`, marks[i], '=', totalSum);
}

const average = totalSum / amount;
console.log(marks, 'average is', average);