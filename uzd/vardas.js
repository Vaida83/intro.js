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

      //jeigu neradau akaip atmesti, odel "text" negaletu buti tinkamu vardu
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




