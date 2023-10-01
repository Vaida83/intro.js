/*
IF - palyginimo sakinys/salyga

Palyginimo operatoriai:
-visi: >, <, ==, ===, >=, <=, != (nelygu), !== (nelygu)
-naudotini: >, <, ===, >=, <=, !== (nelygu)
-nenaudotini: ==, !=

Kodo sablonai:
if () {}
 if () {} else {}
 if () {} else if () {}
 if () {} ... else if () {}
 if () {} ... else if () {} ... if () {} ... else if () {}

 */
console.clear();

if (4 > 2) {
    console.log(`4 yra daugiau uz 2`);

}

if (5 < 0) {
    console.log(`5 yra maziau uz 0`);
}
 
if (true) {
    console.log(true);
}

if (false) {
    console.log(false);
}

const a = 7;
const b = 5;

if (a >b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
    console.log('A yra maziau arba lygu uz B');
}

const day = 0;
if (day % 7 == 1) {
    console.log('Pirmadienis');
} else if (day % 7 == 2) {
    console.log('Antradienis');
} else if (day % 7 == 3) {
    console.log('Treciadienis');
} else if (day % 7 == 4) {
    console.log('Ketvirtadienis');
} else if (day % 7 == 5) {
    console.log('Penktadienis');
} else if (day % 7 == 6) {
    console.log('Sestadienis');
} else if (day % 7 == 0) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja!');
}

console.clear();

//Kodo nestinimas

const diena = 8;
if (diena === 1) {
    console.log('Pirmadienis');
} else {
    if (diena ===2) {
        console.log('Antradienis');
    } else {
        if (diena === 3) {
            console.log('Treciadienis');
        } else {
            if (diena === 4) {
                console.log('Ketvirtadienis');
            } else {
                if (diena === 5) {
                    console.log('Penktadienis');
                } else {
                    if (diena === 6) {
                        console.log('Sestadienis');
                    } else {
                        if (diena === 7) {
                            console.log('Sekmadienis');
                        } else {
                            console.log('Tokia diena neegzistuoja!')
                        }
                    }
                }
            }
        }
    }
}
/*
Gali buti:
-diena/naktis
-lyja/nelyja
*/
console.clear();

const parosMetas = 'naktis';
const arLyja = true;
const temp = 25;
const kadaSilta = 20;
const arAsSuStriuke = true;

if (parosMetas === 'diena' && arLyja === true && temp >= kadaSilta) {
    console.log('einam sokti Lietuje!');
} else if (parosMetas === 'diena' && arLyja === true && temp < kadaSilta) { 
    console.log('Saltas lietus...niekur neisiu sokti!'); 
} else if (parosMetas === 'diena' && arLyja === false && temp >= kadaSilta) { 
    console.log('Eiline diena Rojuje!')
} else if (parosMetas === 'diena' && arLyja === false && temp < kadaSilta) { 
    console.log('Eiline diena Rojuje!... nors ir nalabai silta')
} else if (parosMetas === 'naktis' && arLyja === true && temp >= kadaSilta) {
        console.log('Sedim namie, bet gal ir galima butu iseiti'); 
} else if (parosMetas === 'naktis' && arLyja === true && temp < kadaSilta) {
        console.log('Sedim namie!!!');        
} else if (parosMetas === 'naktis' && arLyja === false && temp >= kadaSilta) {
        console.log('Galim eiti paziureti zvaigzdziu'); 
} else if (parosMetas === 'naktis' && arLyja === false && temp < kadaSilta) {
        console.log('Gal eisiu miegot');        
}

if (parosMetas === 'diena') {
    if (arLyja) {
        if (temp >= kadaSilta) {
            console.log('Einam sokti lietuje');
        } else {
            console.log('Einam sokti lietuje')
        }  
    } else {
        console.log('Eiline diena rojuje');
        if  if (temp >= kadaSilta) {}
    }
} else {
    if (arLyja) {
       console.log('Sedim namie');
    } else {
        console.log('Galim eiti paziureti zvaigzdziu');
    }
}

console.clear();

const g = 7;
const h = 5;
if (g > h) {
    console.log('Daugiau');
} else {
    console.log('Ne daugiau');
}
