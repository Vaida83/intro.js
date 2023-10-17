console.clear();
//isFinite - normalus ir nenormalus skaiciaus tipo skaiciai

console.log(isFinite(5));
console.log(isFinite(3.14));
console.log(isFinite(5));
console.log(isFinite(99999999999));
console.log(isFinite(0.33333333));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

//true, false, array, null - interpratuoja kaip baigtine reiksme

const a = 7;

if (isFinite) {
    console.log('Taip');
} else {
    console.log('Ne');
}
console.clear();

//isInteger - sveikas skaicius

console.log(Number.isInteger(5));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(0.5));

console.clear();

//

const b =  NaN;

if (isFinite(b)) {
    if (Number.isInteger(b)) {
        console.log('Sveikas skaicius');
    } else {
        console.log('Normalus skaicius');
    } 
} else {
    console.log('Ne normalus skaicius: NaN arba Infinity');
}

console.clear();
//parseInt sukonstruoja skaitines reiksmes be kablelio. Infinity nesukonstruos, jam privalo buti skaitmenys nuo 1 iki 9
console.log(Number.parseInt(false));
console.log(Number.parseInt([]));
console.log(Number.parseInt(''));
console.log(Number.parseInt('penki'));
console.log(Number.parseInt('123'));
console.log(Number.parseInt('asd123'));
console.log(Number.parseInt('123asd'));

console.log('---------------');
//parseFloat - desimtainis. Jei yra raides, bando isgauti skaiciu. Tas pats kas naudoti +
console.log(parseFloat(''));
console.log(parseFloat('789.0'));
console.log(parseFloat('7.89'));
console.log(parseFloat('7.89'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('NaN'));
console.log(parseFloat('7.89abc'));

console.clear();

//isNaN - naudinga tik NaN atpazinti

console.log(isNaN(5));
console.log(isNaN(NaN));
console.log(isNaN(Infinity));

//INSTANCE METODAI

console.clear();
//string spausdina juodai
//toFixed - spausdina tik tiek, kiek nurodyta skaiciu po kablelio. Tai nera zirkles, o kirpdamas suapvalina.

const kaina = 3.14;
console.log(kaina, '3.14', kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(3));
console.log(kaina.toFixed(4));
console.log(kaina.toFixed(5));

const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);

const keistasSkaicius2 = keistasSkaicius.toFixed(3);
console.log(keistasSkaicius2);

const keistasSkaicius3 = parseInt(keistasSkaicius2);
console.log(keistasSkaicius3);

const keistasSkaicius4 = parseFloat(keistasSkaicius2);
console.log(keistasSkaicius4);
 
const keistasSkaicius5 =+ '1.23';
console.log(keistasSkaicius5);

const keistasSkaicius6 =+ keistasSkaicius2;
console.log(keistasSkaicius6);

const c = 6.999;
console.log(c);
console.log(c.toFixed(5));

console.log('***************')

const d = 5.6789;
console.log(d.toFixed(6));
console.log(d.toFixed(5));
console.log(d.toFixed(4));
console.log(d.toFixed(3));

console.log('***************')

const e = 5.6784;
console.log(e.toFixed(6));
console.log(e.toFixed(5));
console.log(e.toFixed(4));
console.log(e.toFixed(3));

