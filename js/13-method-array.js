/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

const numbers = [10, 2, 8, 4, 6];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    doubleNumbers.push(number * 2);
}

console.log(doubleNumbers);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseNames = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    nameSizes.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());
}

console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseNames);

const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];

const n12 = [];
// const n12 = [1, 11, 111, 2, 22, 222, 2222];

for (let i = 0; i < n1.length; i++) {
    n12.push(n1[i]);
}

for (let i = 0; i < n2.length; i++) {
    n12.push(n2[i]);
}

console.log(n12);

console.clear();

const numbers2 = [10, 2, 8, 4, 6];
console.log(numbers2);

numbers2.push(9);
console.log(numbers2);

const g1 = numbers2.pop();
const g2 = numbers2.pop();
console.log(numbers2, g1, g2);

numbers2.unshift(1);
numbers2.unshift(2);
numbers2.unshift(3);
console.log(numbers2);

const g3 = numbers2.shift();
const g4 = numbers2.shift();
console.log(numbers2, g3, g4);

console.clear();

//              0   1   2   3   4
const magic = [11, 22, 33, 44, 55];

console.log(magic.includes(5));
console.log(magic.includes(55));

console.log(magic.indexOf(5));
console.log(magic.indexOf(55));

const texts = ['agurkas', 'pomidoras', 'svogunas', 'paprika'];

// Reikalingi produktai: a, b, c, d.
const products = `Reikalingi produktai: ${texts.join(', ')}.`;
console.log(products);

console.clear();

console.log(texts);
texts.reverse();
console.log(texts);
texts.reverse();
console.log(texts);


console.clear();

const c1 = [1, 11];
const c2 = [2, 22];
const c3 = [3, 33];
const c4 = [4, 44];

const c12 = c1.concat(c2);
console.log(c12);

const c34 = c3.concat(c4);
console.log(c34);

const c123 = c1.concat(c2).concat(c3);
console.log(c123);

const c1234 = c1.concat(c2, c3, c4);
console.log(c1234);

const c111 = c1.concat(c1, c1);
console.log(c111);

console.clear();

//          0   1   2   3   4
const h = [11, 22, 33, 44, 55];
console.log(h);

h.splice(1, 2);
console.log(h);

console.clear(); // 04-08d

// const f = s => s[0]; 

// MAP - 

const k = [10, 2, 8, 4, 6];
const k2 = [];

for (const n of k) {
    k2.push(n * 2);
}
console.log(k2);

// funkcija patrigubinti

function triple(n) {
    return n * 3;
}
const k3 = k.map(triple);
console.log(k3);

// *4


const quadro = n => n * 4;
const k4 = k.map(quadro);
console.log(k4);

// *5 (irasyta viduje, bet nebegalima veliau isoreje naudoti)

const k5 = k.map(n => n * 5);
console.log(k5);

// gavosi kopija

const k6 = k.map(n => n);
console.log(k6);

// +1

const k7 = k.map(n => n + 1);
console.log(k7);

// paima pirmajas raides is masyvu

const dict = ['pomidoras', 'agurkas', 'bulve', 'svogunas'];
const dict2 = dict.map(w => w[0]);
console.log(dict2);

// paskaiciuoja ilgi raidziu

const dict3 = dict.map(w => w.length);
console.log(dict3);

const people = [
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},
];
// kiek metu liko iki 100

const people100 = people.map(person => `${person.name} liko ${100 - person.age} metai.`);
console.log(people100);

const peopleNames = people.map(person => person.name);
console.log(peopleNames);

const peopleAges = people.map(person => person.age);
console.log(peopleAges);

const peopleMarried = people.map(person => {
    person.isMarried = true;
    person.luckyNumber = 13;
    return person;
});
console.log(peopleMarried);

console.clear();

// FILTER

const p = [10, 2, 8, 4, 6];

// 1 Variantas

const p5 = [];

for (const n of p) {
    if (n > 5) {
        p5.push(n);
    }
}

console.log(p5);

// 2 Variantas su filtru

const p6 = p.filter(n => n > 6);
console.log(p6);

const p7 = p.filter(n => n < 7);
console.log(p7);

const p8 = p.filter(n => n > 2 && n < 8);
console.log(p8);

const texts5 = ['labas', '', 'rytas','', 'Lietuva'];

const texts5Updated = texts5.filter(t => t.length > 0);
console.log(texts5Updated);         // labiau naudojamas

const texts5Updated2 = texts.filter(t => t);
console.log(texts5Updated);

console.log('---------------------');


// fill

const default5 = [0, 0, 0, 0, 0]

const default7 = Array(7).fill(99) // imeta i masyva norima objekta

console.log(default7);

const zeros = Array(10).fill(0);
console.log(zeros);

const negatives = Array(8).fill(false);
console.log(negatives);

const emptySpaces = Array(40).fill('');
console.log(emptySpaces);

const labas5 = Array(5).fill('labas');
console.log(labas5);

const  demo = [10, 2, 8, 4, 6];
console.log(demo);

demo.fill(777);
console.log(demo);

console.clear();

// every  ( atsakymai true/false bet visi turi atitikti)

const trees = ['uosis', 'egle', 'azuolas', 'tuopa'];
const allTreesValid = trees.every(s => s.length > 0);
const allTreesNameSize5 = trees.every(s => s.length === 5);
console.log(allTreesValid);
console.log(allTreesNameSize5);

// some ( atsakymai true/false bet uztenka kad atitiktu vienas)

const someTreesValid = trees.every(s => s.length > 0);
console.log(someTreesValid);

console.clear();

// sort 


























