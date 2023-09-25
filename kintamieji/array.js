/*

ARRAY - sarasas / masyvas / kolekcia / listas / matrica / arejas
*/

console.clear();

const tuscias = []
console.log(tuscias)
                 // 0 1  2  3  4//
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai, pazymiai.length, "skaiciai");

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai);

const pirmasPazymys = pazymiai[0];
console.log (pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log (antrasPazymys);

const treciasPazymys = pazymiai[2];
console.log (treciasPazymys);

const paskutinisPazymys = pazymiai[pazymiai.lenght - 1];
console.log (paskutinisPazymys);

console.clear();

//Masyvas pazymiu
//suskaiciuoti pazymiu vidurki ir isvesti kaip sakini:
//"Studento pazymiu vidurkis yra 7."

const visipazymiai = [10, 6, 8, 6, 3, 9, 7, 4, 10, 9, 7];
const count = visipazymiai.lenght;
const sum = (60);

const vidurkis = sum / count;
console.log ('Studento pazymiu vidurkis yra', vidurkis);

//Masyvas vietovardziu.
//Suformuojat sakini:
//"Mano aplankytos vietos: Vieta1, Vieta2, Vieta3."

const miestai = ['Alytus', 'Kaunas', 'Jurbarkas', 'Marijampole'];
const m0 = miestai [0];
const m1 = miestai [1];
const m2 = miestai [2];
const m3 = miestai [3];
console.log ('Mano aplankytos vietos:', m0, m1, m2, m3);
