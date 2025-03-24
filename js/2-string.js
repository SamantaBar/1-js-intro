/*
STRING - tekstas, simboliu grandinele

Tekstines reiksmes iniciavimas:
- ' (vienguba kabute)
- " (dviguba kabute)
- ` (backtick)

Specialieji simbolisi:
- \ (privercia sekanti simboli buti spausdintu)
- \r (return, kursorius gryzta i eilutes pradzia)
- \n (new line, kursorius nusileidzia viena eilute zemyn)
- \t (tab)
*/

const a = 'Labas';
console.log(a);

let b = 'rytas';
console.log(b);

b = 'diena';
console.log(b);

const name = 'Jonas';

// Vienguba (') kabute.
const k1 = "Vienguba (') kabute";
console.log(k1);

// Dviguba (") kabute.
const k2 = 'Dviguba (") kabute';
console.log(k2);

const surname = 'Jonaitis';

const fullname = name + ' ' + surname;
console.log(fullname);

// Vienguba (') ir dviguba (") kabutes.
const k12 = "Vienguba (') ir " +  'dviguba (") kabutes.';
console.log(k12);

// Vienguba (') kabute.
const k3 = 'Vienguba (\') kabute.';
console.log(k3);

// Dviguba (") kabute.
const k4 = "Dviguba (\") kabute.";
console.log(k4);

// Vienguba (') ir dviguba (") kabutes.
const k5 = 'Vienguba (\') ir dviguba (") kabutes.';
const k6 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(k5);
console.log(k6);

const k7 = 'Vienguba (\') ir dviguba (\") kabutes.';
const k8 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(k7);
console.log(k8);

const backSlash1 = '\\';
const backSlash2 = "\\";

console.log(backSlash1);
console.log(backSlash2);

console.clear();

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

const html = '<header>\r\n\
    <img>\r\n\
    <nav>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
    </nav>\r\n\
</header>';
console.log(html);

console.clear();

// Maryte yra viena is 4 legendiniu studentu.




console.clear();

const b1 = `Vienguba (') kabute.`;
console.log(b1);

const b2 = `Dviguba (") kabute.`
console.log(b2);

// Backtick (`) kabute.

const b4 = `Backtick (\`) kabute.`;
console.log(b4);

const b7 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>;`

console.log(b7);

// Maryte yra viena is 4 legendiniu studentu.



console.clear();

const word = `pomidoras`;
const wordSymbolsCount = word.length;

console.log(word);
console.log(wordSymbolsCount); 

const textsize = 'Labas rytas'.length;
console.log(textsize);

const numbers = '15148486';
console.log(numbers.length);

const number = 15148486;
console.log(number.length);

const pi = '3.14';
console.log(pi.length);

const age = 99;
const ageDigitsCount = ('' + age).length;
console.log(ageDigitsCount);

const ageDigitsCount2 = age.toString().length;
console.log(ageDigitsCount2);

console.clear();

const text = 'Kebabas';
const firstSymbol = text[0];
console.log(firstSymbol);

console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);
console.log(text[7]);
console.log(text[-1]);

console.log(text[0] + text[1]);

// Zodyje "Sachmatai" pirmoji raide yra "S".
const game = 'Regbis';
const gameSentence = `Zodyje "${game}" pirmoji raide yra "${game[0]}".`

console.log(gameSentence);



















