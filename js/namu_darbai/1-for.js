console.log('------------------------');

// 1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą

const list1 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let listSum = 0;

for (let i = 0; i <= list1.length; i++) {
    listSum += i;
}

console.log(listSum);

console.log('------------------------');

// 2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną 

const zodis = 'Vakaras';

let sum = 0;

for (let i = 0; i < zodis.length; i++) {
    console.log(zodis[i]);
    
}

console.log('------------------------');

// 3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę 

for (let n = 6; n === 6; n++) {
    console.log(n);
for (let i = 1; i <= 6; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
    }
    
}

console.log('------------------------');

// 4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į ekraną išvestų žodį ‘BOOM’

const list2 = [5, 4, 3, 2, 1, 'BOOM']

let sum2 = 0; 

for (let i = 0; i < list2.length; i++) {
    console.log(list2[i]);
    
}

console.log('------------------------'); 

// 5. Parašykite for ciklą, kuris sudėtų visus lyginius skaičius nuo 3 iki 18

const list3 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

let listSum3 = 0;

for (let i = 0; i <= list3.length; i++) {
    if (list3[i] % 2 === 0) {
    listSum3 += list3[i];
    }
}
console.log(listSum3);

console.log('------------------------'); 

// 6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console. 


const list4 = [9, 8, 7, 6, 5, 4, 3, 2, 1]; 

for (let i = 0; i < 1; i++) {
    console.log(list4);
    
}
console.log('ARBA');

for (let i = 0; i < list4.length; i++) {
    console.log(list4[i]);
    
}

console.log('------------------------'); 

// 7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano vardas - ’ console log eilutės pradžioje 


const nameList = ['Vardas1', 'Vardas2', 'Vardas3', 'Vardas4', 'Vardas5'];

let sum4 = 0;

for (let i = 0; i < 5; i++) {
    console.log('Mano vardas ' + nameList[i]);
}

console.log('------------------------'); 

// Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.






