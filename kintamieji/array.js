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

const marks = [10, 6, 8, 6, 3, 9, 7, 4, 10, 9, 7];
//const marksSum = marks[0] + marks[1]...

//let marksSum = 0;
//marksSum = marksSum + marks[0];//
//marksSum = marksSum + marks[1];//
//marksSum = marksSum + marks[2];//
//marksSum = marksSum + marks[3];//
//marksSum = marksSum + marks[4];//
//marksSum = marksSum + marks[5];//
//marksSum = marksSum + marks[6];//
//marksSum = marksSum + marks[7];//
//marksSum = marksSum + marks[8];//
//marksSum = marksSum + marks[9];//
//marksSum = marksSum + marks[10];//
//+= orideda prie saves paties//
let marksSum = 0;
marksSum += marks[0];
marksSum += marks[1];
marksSum += marks[2];
marksSum += marks[3];
marksSum += marks[4];
marksSum += marks[5];
marksSum += marks[6];
marksSum += marks[7];
marksSum += marks[8];
marksSum += marks[9];
marksSum += marks[10];

const vidurkis = marksSum / marks.length;
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

const places = ['Alytus', 'Kaunas', 'Jurbarkas', 'Marijampole'];
let placesStr = '';
placesStr = placesStr + places(0);
placesStr += ",";
placesStr += places[1];
const placesSentence = `Mano aplankytos vietos: $(placeStr)`


//let a = 5;
//let x = 7;

// x = x + ++a; //13
// x = x++ + a; //12

// 7          5
//x = (x++) + a; //12 x = 8

//

console.clear();
const colors = ['geltona', 'zalia', 'raudona'];

console.log(colors);
console.log(colors[1]);

colors[1] = 777;
console.log(colors);

colors[1] = 'žalia';
console.log(colors);

const name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
