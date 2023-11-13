console.clear();


const tekstas1 = 'vasara';
const tekstas2 = 'pavasaris';
const tekstas3 = 'labas rytas';
const tekstas4 = 'pipiriukai';

//kuri raide tekste pasikartoja dazniausiai?

const abc = {};
for (const letter of tekstas1) {
    if(abc[letter]) {
        abc[letter] += 1;
        {
            else {
                abc[letter] = 1;
            }
        }
    }
    

}
console.log(abc);

