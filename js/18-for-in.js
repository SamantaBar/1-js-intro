

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    
};

/*
console.log(person.age);
console.log(person.name);
console.log(person.isMarried);
*/

const keys = Object.keys(person);

console.log(keys); // pasitikrinimui kas yra objekte


for (const key of keys) {
    console.log(person[key]);
    
}

console.log('-------------------');

// for in (tik objektams)

for (const key in person) {
    console.log(person[key]);
    
}
// 1)
const text = 'Keliautojas';
const symbols = {};

for (const s of text) {
    if (symbols[s]) {
        symbols[s]++
    } else {
        symbols[s] = 1;
    }
}
console.log(symbols);

let max = 0;
for(const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}

console.log(max);

const maxSymbols = [];
for (const s in symbols) {
    if (symbols[s] === max) {
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);
































/*
// 2)
const counts = {
    'L' : 1,
    'a' : 2,
    'b' : 1,
    's' : 1,
}

// 3)
const max = 2;
const letter = 'a';


/* prideti i obj
const obj = {
    name: 'Maryte',
}

console.log(obj);

obj.age = 88;

console.log(obj);

obj['isMarried'] = false

console.log(obj);
*/





