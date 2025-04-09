
// Rikiuoja pagal abecele. Diziosios raides turi pirmenybe

const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda'];
console.log(texts);

texts.sort();
console.log(texts);

const pseudo = ['d', 'b','ca', 'bf', 'ba', 'cc', 'db', 'baa', 'bac'];
pseudo.sort();
console.log(pseudo);

console.log('-----------------');

// Rikiuoja pagal skaicius, bet dvizenkliai jau ima pirmenybe,
// bet yra formule uzvedus ant sort : (a, b) => a - b) ir rikiuoja gerai

const numbers = [10, 2, 8, 1, 12, 23, 4, 6].sort((a, b) => a - b); // nuo maziausio
console.log(numbers);

numbers.sort((a, b) => b - a); // nuo didziausio iki maziausio
console.log(numbers);

console.log('-----------------');

const people = [
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
];

people.sort((a, b) => a.age - b.age); // surikiuoti pagal amziu
console.log(people);

people.sort((a, b) => a.name.length - b.name.length); // pagal vardo ilgi
console.log(people);
                                        
people.sort((a, b) => a.name > b.name ? 1 : -1); // pagal abecele
console.log(people);    