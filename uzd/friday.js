
//1 Užduotis

// Markas ir Johnas bando palyginti savo KMI (kūno masės indeksą), kuris yra

// apskaičiuojamas pagal formulę:

// KMI = masė / ūgis ** 2 = masė / (ūgis * ūgis) (masė kg ir aukštis metrais).

// Jūsų užduotys:

// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais

// 2. Apskaičiuokite abiejų jų KMI naudodami formulę 

// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.

// Bandymo duomenys:

// § 1 duomenys: sveria 78 kg ir yra 1,69 m ūgio. Jonas sveria 92 kg ir yra 1,95 ūgio

// m aukščio.

// § 2 duomenys: sveria 95 kg ir yra 1,88 m ūgio. Jonas sveria 85 kg ir yra 1,76 ūgio

// m aukščio.

const jonoUgis = 1.95;
const jonoSvoris = 92;
const markoUgis = 1.69;
const markoSvoris = 78;

const kmi = function (ugis, svoris) {
return +(svoris / (ugis * ugis)).toFixed(1);
}
 const jonoKmi = kmi(jonoUgis, jonoSvoris);
 const markoKmi = (markoUgis, markoSvoris);
 console.log(typeof kmi(jonoUgis, jonoSvoris));
 console.log(typeof kmi(markoUgis, markoSvoris));

 if (markoKmi > jonoKmi) {
    console.log(`markHigherBMI - true`);
    (jonoKmi >markoKmi)
console.log(`markHigherBMI - false`)
 } 


//  3 užduotis

// Yra dvi gimnastikos komandos – delfinai ir koalos. Jie varžosi viena prieš kitą 3 kartus. 
//Nugalėtojas, surinkęs didžiausią balų vidurkį, laimi trofėjų!
// Jūsų užduotys:
	
//  Apskaičiuokite kiekvienos komandos taškų vidurkį, naudodami toliau pateiktus testo duomenis

//  2. Palyginkite komandos balų vidurkį, kad nustatytumėte konkurso nugalėtoją.

// ir atsispausdinkite į konsolę. Nepamirškite, kad gali būti lygios, todėl išbandykite tai

// taip pat (lygiosios reiškia, kad jie turi tą patį vidutinį balą)


// 3.  bonus užduotis: įtraukite reikalavimą turėti mažiausiai 100 balų. Pagal šią taisyklę

// komanda laimi tik tuo atveju, jei ji turi didesnį balą nei kita komanda, ir tuo pačiu

// surinkti ne mažiau kaip 100 taškų. 

// 4. bonus užduotis  Minimalus rezultatas taip pat taikomas lygiosioms! Taigi lygiosios įvyksta tik tada, kai abi komandos turi vienodą rezultatą ir abi turi didesnį arba lygų 100 balų

// taškų. Priešingu atveju jokia komanda nelaimės trofėjaus

// Bandymo duomenys:

// § 1 duomenys: delfinai surinko 96, 108 ir 89 balus. Koalos balai 88, 91 ir 110

// § Duomenų bonus užduočiai 1: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 123

// § 2 duomenų bonus užduočiai: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 106

//  function vidurkis(array, array2) {
// let sum = 0;
// for(let i=0; i<array.length; i++){
// sum+= array[i];
// }
//  const average = sum / array.length;
 
//  let sum2 = 0;
//  for (let i = 0; i<array2.length; i++) {
//  sum2+= array2[i];
// }
//  const average2 = sum2 / array2.length;
// }
// console.log(sum2);
// Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis eina valgyti į 
// restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, jei sąskaitos vertė yra nuo 50 iki
// 300. 
// Jei vertė skiriasi, arbatpinigiai yra 20%.

// Jūsų užduotys:
// Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. Sukurkite kintamąjį pavadinimu „Tip“.
// Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
// pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery operator!)
// Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, arbatpinigiai ir galutinė vertė
// (sąskaita + arbatpinigiai). Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė
// 316,25"
// Bandymo duomenys:
// § 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430


console.clear();

function bill(account) {
    const tip = account >= 50 && account <= 300? (account * 15/100) : (account * 20/100);
    const sum = account + tip;
    return `Saskaita buvo ${account}, arbatpinigiai ${tip}, o bendra verte suma ${sum}`
}
console.log(bill(275));
console.log(bill(40));
console.log(bill(430));

console.clear();
console.log('1)');

/*
1 uzduotis

Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir 
pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.*/
const name = "Jonukas";
const surname = "Jonaitis";
if (name.length < surname.length) {
console.log(name);
} else {
    console.log(surname);
}
console.log();

console.log('2)');

/*2 uzduotis

Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių 
ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".*/
const name1 = "Vaida";
const surname1 = "Babeckienė";
const birthData = "1983";
const data = "2023";
const age = data - birthData;
    console.log(`Aš esu ${name1} ${surname1}. Man yra ${age} metai (-ų).`)

    console.log('3)');

/*3 uzduotis
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir 
pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.*/

const name2 = "Angelina";
const surname2 = "Jolie";
const name2Pask3 = name2.slice(-3);
const surname2Pask3 = surname2.slice(-3);
console.log(name2Pask3.concat(surname2Pask3));

console.log('4)');

/*4 uzduotis

Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.*/
const tale = "Once upon a time in hollywood";
const taleO = tale.replaceAll('O', '*');
console.log(taleO.replaceAll('o', '*'));

console.log('5)');

/*5 uzduotis

Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines 
reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. */
let x = (Math.random() * 2);
let x1 = (Math.random() * 2);
let x2 = (Math.random() * 2);
let x3 = (Math.random() * 2);
console.log(x);
console.log(x1);
console.log(x2);
console.log(x3);



console.log('6)');

/*6 uzduotis

Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. 
Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite 
atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.*/
let y = (Math.random() * 4);
let y1 = (Math.random() * 4);
console.log(y);
console.log(y1);
if(y>y1){
    console.log('y daugiau už y1');
    const dal = y / y1;
console.log(dal.toFixed(2))
} else {
    console.log('y mažiau už y1');
    const dal2 = y1 / y;
    console.log(dal2.toFixed(2))
}

console.log('7)');

/*7 uzduotis

Naudokite funkciją ir sukurkite tris kintamuosius kuriems 
priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.*/
let z = (Math.random() * 25);
let z1 = (Math.random() * 25);
let z2 = (Math.random() * 25);


console.log('8)');

/*8 uzduotis

Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą 
ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.*/

const actorName = 'Denzel';
const actorSurname = 'Washington';
const actorNameFL = actorName[0];
const actorSurnameFL = actorSurname[0];
console.log(actorNameFL.concat(actorSurnameFL));
console.log(actorName[0], actorSurname[0])

console.log('9)');

/*9 uzduotis

Parašyti kodą, kuris generuotų atsitiktinį stringą iš 
lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.*/

function 
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    console.log(2, 6);
}

