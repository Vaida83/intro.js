/*

FUNCTION - funkcija

perpanaudojamas logikos blokas
*/
console.clear();

function tuscia() {
    //tuscias logikos blokas
}

const a = tuscia();
console.log(a);

function tuscia2() {
    return undefined;
}
console.log(tuscia());
console.log(tuscia2());

const b = tuscia();
console.log(b);

function duokPenkis(){
    //graziname penkis
    return 5;
}

console.log(duokPenkis());

function arVedes(){
    return true;
}
console.log(arVedes);


//1 *************
console.clear();
const userName1 = 'Jonas';
const userAge1 = 99;

//Jonas turejo Jubilieju/-us!
const user1Jubiliejai = (userAge1 - userAge1 % 10) / 10;
const user1Str = `${userName1} turejo ${user1Jubiliejai} jubilieju/-us!`
console.log(user1Str);

const userName2 = 'Maryte';
const userAge2 = 88;

//Maryte turejo Jubilieju/-us!
const user2Jubiliejai = (userAge2 - userAge2 % 10) / 10;
const user2Str = `${userName2} turejo ${user2Jubiliejai} jubilieju/-us!`
console.log(user2Str);

const userName3 = 'Petras';
const userAge3 = 55;

//Petras turejo Jubilieju/-us!
const user3Jubiliejai = (userAge3 - userAge3 % 10) / 10;
const user3Str = `${userName3} turejo ${user3Jubiliejai} jubilieju/-us!`
console.log(user3Str);

console.clear();

function jubiliejai(username, age){
    const count = (age - age % 10) / 10;
    return `${username} turejo ${count} jubilieju/-us!`;
}
console.log(jubiliejai('Jonas', 58));
console.log(jubiliejai('Maryte', 36));
console.log(jubiliejai('Petras', 79));
console.log(jubiliejai('Ona', 90));

console.log(jubiliejai(666, 'Demon'));

console.clear();

function studentAverage(name, marks){
    let totalSum = 0;
    let i = 0;
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    const average = totalSum / marks.length;
    return `${name} pazymiu vidurkis yra ${average}.`;
}
console.log(studentAverage('Jonas', [10, 2, 8, 4, 6]));
console.log(studentAverage('Maryte', [10, 9, 8, 7, 6]));
console.log(studentAverage('Petras', [5, 6, 7, 8, 9]));
console.log(studentAverage('Ona', [9, 9, 9, 9, 9]));


function sayHello(name, city, state) {
   return `Hello, ${name}! Welcome to ${city}, ${state}!`
}
console.log(sayHello(['John Smith'], 'Phoenix', 'Arizona'));
console.log(sayHello(['Franklin Delano Roosevelt'], 'Chicago', 'Illinois'));
console.log(sayHello(['Wallace Russel Osbourne'], 'Albany', 'New York'));
console.clear();


function positiveSum(arr) {
    if (arr.isInteger(arr)) {
return "viskas gerai";
    } else {
        return "kazkas nepavyksta";
    }
}
console.log[2, -4, 12];