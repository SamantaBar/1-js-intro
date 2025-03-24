// Kintamuju inicijavimas

// 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis

let a1 = 5
let b1 = 8
let c1 = 15

console.log(a1, b1, c1);

// 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis

let a2 = 'labas';
let b2 = 'rytas';
let c2 = 'saule';

console.log(a2, b2, c2);

// 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
let list1 = [1, 2, 3, 4, 5];
let list2 = [7, 9, 12, 14, 30];
let list3 = [6, 7, 8, 9, 10];

console.log(list1, list2, list3);

// 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis

let list4 = ['Stalas', 'Kede', 'Langas', 'Televizorius', 'Spinta'];
let list5 = ['Juoda', 'Oranzine', 'Melyna', 'Rozine', 'Geltona']; 
let list6 = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze'];

console.log(list4, list5, list6) ;

// Veiksmai su kintamaisiais

// 1. Susumuoti visus skaičiaus tipo kintamuosius

console.log(a1 + b1 + c1);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas

console.log (a2 + ' ' + b2 + ' ' + c2);

/* 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5 */

let result1 =  list1[0] - list1[1] + list1[2] - list1[3] + list1[4];
let result2 =  list2[0] - list2[1] + list2[2] - list2[3] + list2[4];
let result3 =  list3[0] - list3[1] + list3[2] - list3[3] + list3[4];

console.log(result1, result2, result3);

// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

let result4 = list4[4] + ', ' + list4[3] + ', ' + list4[2] + ', ' + list4[1] + ', ' + list4[0]
let result5 = list5[4] + ', ' + list5[3] + ', ' + list5[2] + ', ' + list5[1] + ', ' + list5[0]
let result6 = list6[4] + ', ' + list6[3] + ', ' + list6[2] + ', ' + list6[1] + ', ' + list6[0]

console.log(result4, result5, result6);

// Kintamuju palyginimas

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:

// a. kuris didesnis

let num1 = 5

let num2 = 12

if (num1 < num2) {
    console.log("Pomidoras"); } else {
    console.log("Bandykite dar kartą."); }

