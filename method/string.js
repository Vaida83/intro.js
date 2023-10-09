console.clear();

console.log('labas' .length);
console.log('     ' .length);
console.log('\n\'\\' .length);

//nuorodas nusikopijuoti

//String.prototype.KAZKAS
//.at grazina kazkuri simboli. - leidzia grazinti atbuline tvarka


console.log('labas'[0], 'labas'.at(0));
console.log('labas'[1], 'labas'.at(1));
console.log('labas'[2], 'labas'.at(2));
console.log('labas'[3], 'labas'.at(3));
console.log('labas'[4], 'labas'.at(4));

console.log('labas'[-0], 'labas'.at(-0));
console.log('labas'[-1], 'labas'.at(-1));
console.log('labas'[-2], 'labas'.at(-2));
console.log('labas'[-3], 'labas'.at(-3));
console.log('labas'[-4], 'labas'.at(-4));
console.log('labas'[-5], 'labas'.at(-5));

const hi = 'labas';
console.log(hi.at(-2), hi[hi.length - 2]);

console.clear();

//.charCodeAt - 

console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));

console.log('labas'.charCodeAt(0));
console.log('labas'.charCodeAt(1));
console.log('labas'.charCodeAt(2));
console.log('labas'.charCodeAt(3));
console.log('labas'.charCodeAt(4));
console.clear();

//.concat - 

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(str1);

let str3 = 'Hello';
const str4 = 'World';

str3 += ' ';
str3 += str4;
console.log(str3);

let str5 = 'Hello';
str5 += ' ' + str4;
console.log(str5);

console.clear();

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

const start = "Abecele:";
 let a1 = '';
 a1 += start;
 console.log(a1);

let a2 = start + abc[0] + abc[1] + abc[2] + abc[4] + abc[5];
console.log(a2);

let a3 = start;

for (let i=0; i<abc.length; i++) {
a3 += abc[i];
}
console.log(a3);

let a4 = start.concat(...abc);
console.log(a4);

const a5 =  start.concat(abc[0] + abc[1] + abc[2] + abc[4] + abc[5]);
console.clear();

//includes - pasako ar yra, ar nera

console.log('Labas rytas' .includes('a'));
console.log('Labas rytas' .includes('A'));
console.log('Labas rytas' .includes(' '));
console.log('Labas rytas' .includes('ab'));

//infexOf - grazina simboli kurioje vietoje yra. Jei nera, grazina -1
//          012345
console.log('Labas rytas' .indexOf('a'));
console.log('Labas rytas' .indexOf('A'));
console.log('Labas rytas' .indexOf(' '));
console.log('Labas rytas' .indexOf('ab'));
console.log('Labas, labas, rytas' .indexOf('labas'));

console.log('--------------');

//skaicius - nuo kurios pozicijos pradeda ieskoti
console.log('Labas rytas' .indexOf('a'));
console.log('Labas rytas' .indexOf('a', 0));
console.log('Labas rytas' .indexOf('a', 6));
console.log('Labas rytas' .indexOf('ab', 3));
console.log('Labas rytas' .indexOf('a', 10));

console.clear();

//naudoti tik: for () {} ir if () {}
function kiek (tekstas, raide) {     
    return 0;
}
console.log(kiek('labas', 'a'));

console.clear();

// repeat - kartoja parasyta teksta tiek kartu, kiek parasyta
console.log('a' .repeat(6));
console.log('labas' .repeat(6));

//.replace - paleičia simbolį kokiu nors kitus
const r1 = 'Labas';
const r2 = r1.replace('a', 'x');
console.log(r1, r2);

const r3 = 'Labas rytas';
const r4 = r3.replace('rytas', 'vakaras');
console.log(r3, r4);

const r5 = r3.replace('xxx', 'yyy');
console.log(r3, r5);

const r6 = 'Labas';
const r7 = r6.replaceAll('a', '_');
console.log(r6, r7);

let r8 = 'Labas';
r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);

 //.slice - atitinkami simboliai pradeti nuo kazko iki kazko
const kopustas = 'kopustas';
console.log(kopustas.slice());
console.log(kopustas.slice(0));
console.log(kopustas.slice(0, 0));
console.log(kopustas.slice(1));
console.log(kopustas.slice(2));
console.log(kopustas.slice(3));
console.log(kopustas.slice(0, 1));
console.log(kopustas.slice(0, 2));
console.log(kopustas.slice(0, 3));
console.log(kopustas.slice(-1));
console.log(kopustas.slice(-6));
console.log(kopustas.slice(-3, 3));
console.clear();

//.split veikia kaip zirkles, '' tuscias tekstas

const pvz = 'Labas rytas suraitytas vistos koja parasytas';
console.log(pvz.split('x'));
console.log(pvz.split('a'));
console.log(pvz.split(' '));

const pvz2 = 'vasara';
const pvz2PoSplit = pvz2.split('a');


console.log('sasasasas'.split('a'));
console.log('sasasasas'.split('s'));

console.log('asd'.split('x'));
console.log(''.split('x'));
console.log('x'.split('x'));
console.log('asd'.split('asd'));
console.log(''.split(''));
console.log('labas'.split(''));

console.clear();
//.startstWith ir .endsWith - kuo prasideda ir baigiasi
console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('------------------------')
console.log('Labas'.endsWith('x'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith(''));

//lowerCase

const pasaka = 'Ryto pasaka: Apie Jonuka ir Gretute.';
const pasakaUppercase = pasaka.toUpperCase();
const pasakaLowercase = pasaka.toLowerCase();
console.log(pasaka);
console.log(pasaka.toUpperCase);
console.log(pasaka.toLowerCase);

console.clear();

//.trip -isvalo tarpus.
 const tarpai = '   labas   ';
 const beTarpu = tarpai.trim();
 console.log(`"${tarpai}"`);
 console.log(`"${beTarpu}"`);

console.clear();




