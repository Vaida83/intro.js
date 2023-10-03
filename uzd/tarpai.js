console.clear();

const str1 = '   labas   ';
const ats1 = 'labas';
// const bandymas1 = str1.trim();
// console.log(`"${bandymas1}"`, ats1);

const str2 = '   labas                                     rytas   ';
const ats2 = 'labas rytas';
// let bandymas2 = str2.trim();
// for (; bandymas2.includes('  ');) {
//     bandymas2 = bandymas2.replaceAll('  ', ' ');
// }
// bandymas2 = bandymas2.replaceAll('  ', ' ');
// bandymas2 = bandymas2.replaceAll('  ', ' ');
// bandymas2 = bandymas2.replaceAll('  ', ' ');
// bandymas2 = bandymas2.replaceAll('  ', ' ');
// bandymas2 = bandymas2.replaceAll('  ', ' ');

// console.log(`"${bandymas2}"`, ats2);

const str3 = 'ka            tu?   ka    vakare?';
const ats3 = 'ka tu? ka vakare?';

// let bandymas3 = str3.trim();
// for (; bandymas3.includes('  ');) {
//     bandymas3 = bandymas3.replaceAll('  ', ' ');
// }
// console.log(`"${bandymas3}"`, ats3);

function isvalymas(text) {
    let ats = text.trim();

    for (; ats.includes('  ');) {
        ats = ats.replaceAll('  ', ' ');
    }
    return ats;
}
console.log(isvalymas(str1))
console.log(ats1);
console.log('-------------');
console.log(isvalymas(str2))
console.log(ats2);
console.log('-------------');
console.log(isvalymas(str3))
console.log(ats3);
console.log('-------------');