console.clear();

/*
Duodamas vardas... ar bent jau taip galvojama...
Ka daryti?
-reikia nustatyti, ar dave vardq, ar ne?
*/

//Jonas -> true
//Maryte -> true
//12345 -> false
//labas -> false
//Egle -> true
//egle -> false
//Azuolas -> true
//azuolas -> false

function looksLikeName(text) {
    //jeigu, pirma raide nera didzioji
       //graziname: false
      //'A' .toUpperCase() -> 'A'
      //'a' .toUpperCase() -> 'A'

       if (text[0] !== text[0].toUpperCase()) {
        return false;
       }
       
    //jeigu, yra simbolis 1, 2, 3, 4.....9 (skaitmuo)
      //graziname: false  

      //pagrinde naudojamos abeceles ascii ir utf-8
      //000000001 -> a
      //000000010 -> b
      const neleistiniSimboliai = '0123456789';
      for (let i = 0; i < neleistiniSimboliai.length; i++)  
        {const simbolis = neleistiniSimboliai[i];
       if (text.includes(simbolis)){
        return `Klaida: "${simbolis}" nera leistinas simbolis`;
       }

      //jeigu visi kiti simboliai, apart pirmo, yra ne mazosios raides
      //graziname: false

      const likusiosRaides = text.slice(1);
      if (likusiosRaides !== likusiosRaides.toLowerCase()) {
        return false;
    }
    }

      //jeigu neradau kaip atmesti, odel "text" negaletu buti tinkamu vardu
      //graziname: true
return true;
}

console.log(looksLikeName('Jonas'), true);
console.log(looksLikeName('Maryte'), true);
console.log(looksLikeName('labas'), false);
console.log(looksLikeName('AZUOLAS'), false);
console.log(looksLikeName('AzuolaS'), false);
console.log(looksLikeName('1AzuolaS'), false);
console.log(looksLikeName('Azuo5laS'), false);
 
console.clear();

 function isName(name) {
    if (typeof name !== 'string') {
        return 'Klaida: netinkamas duomens tipas, privalo buti "string"';
    }
    const nameMinLength = 2;
    if (name.length < nameMinLength) {
        return `Klaida: per trumpas vardas, privalo buti minimum ${nameMinLength} simboliai`
    }
    const nameMaxLength = 20;
    if (name.length > nameMaxLength) {
        return `Klaida: per ilgas vardas; maximum ${nameMaxLength} simboliu`
    }
    const pirmaRaide = name[0];
    if (pirmaRaide.toUpperCase() !== pirmaRaide) {
        return 'Klaida: pirma raide privalo buti didzioji'
    }
    const likusiosRaides = name.slice(1);
    if (likusiosRaides.toLowerCase() !== likusiosRaides) {
        return 'Klaida: likusios raides privalo buti mazosios'
    }
    //turime leistinu raidziu sarasa
    const abc = 'abcdefghijlkmnoprstuwvzyq';
    //Jonas -> jonas
    //Maryte -> maryte
    const nameLowerCase = name.toLowerCase();
    //einu oer vardo raides
    //pasiimu viena is vardo raidziu
    //patikrinu ar ta raide yra leistinu simboliu sarase
    //jei yra, tesiam darbus
    //jei nera - viskas, radau klaida, baigiam darba
    for (let i = 0; i < name.length; i++) {
        const raide = nameLowerCase[i];
        if (abc.includes(raide)) {
            //ok, tesiam darba
        } else {
            return `Klaida: neleistinas simbolis varde "${raide}"`
        }
    }

return 'Ok';
 }
 console.log(isName());
 console.log(isName(undefined));
 console.log(isName(NaN));
 console.log(isName(Infinity));
 console.log(isName(true));
 console.log(isName(false));
 console.log(isName([]));

 console.log(isName(''));
 console.log(isName('L'));

 console.log(isName('Jonassssssssssssssssssssssss'));

 console.log(isName('lonas'));
 console.log(isName('JONAS'));

 console.log(isName('Jonas'));
 console.log(isName('Jonas5'));

 console.log(isName('Jo  nas'));

 const miestas = 'Miestas';

 





