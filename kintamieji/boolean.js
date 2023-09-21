/*
BOOLEAN - logine reiksme

Galimos reiksmes: true (1) / false(0);

Operacijos:
-&& (and) visi turi buti "true", jog gauti "true"
-|| 
*/

console.clear();

const arpilnametis = true;
const arLyja = false;

const isSunnyDay = true;
const isNight = false;

console.log(isSunnyDay);
console.log(isNight);

const count = false + true + true;
console.log('>>>', count);

const a = true && true;
console.log("a", a);

const b = true || true;
console.log("b", b);

const e = true && (false || true);
console.log(e);

const f = true && false || true;
console.log(f);