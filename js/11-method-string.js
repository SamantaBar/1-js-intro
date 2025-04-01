/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
// at
console.log('\nat');


console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';

console.log(text[0]);
console.log(text[text.length - 1]);

console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));

console.clear();
// include
console.log('\ninclude');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));
console.log('Vasara'.includes('0'));

console.log('Ačiū'.includes('č'));

console.log('Bepasikulversciaudamasis'.includes('a'));
console.log('Bepasikulversciaudamasis'.includes('aaa'));
console.log('Bepasikulversciaudamasis'.includes('kul'));
console.log('Bepasikulversciaudamasis'.includes('ciauda'));
console.log('Bepasikulversciaudamasis'.includes('cauda'));


console.clear();
//startsWith

console.log('\nstartsWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('Pom'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));

console.clear();
// endsWith

console.log('\nendsWith');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('p'));
console.log('Pomidoras'.endsWith('P'));
console.log('Pomidoras'.endsWith('Po'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('Pomidoras'.endsWith('Pomi'));
console.log('Pomidoras'.endsWith('Pomidoras'));
console.log('Pomidoras'.endsWith('doras'));

console.clear();
// indexOf

console.log('\nindexOf');
console.log('Pomidoras'.indexOf())
console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u', 0));
console.log('Kulverstukas'.indexOf('u', 1));
console.log('Kulverstukas'.indexOf('u', 2));

const k = 'Kulverstukas';
console.log(k.indexOf('u'));


