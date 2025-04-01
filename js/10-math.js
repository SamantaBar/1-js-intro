Math.E
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// abs

console.log('\nabs');
console.log(Math.abs(5));
console.log(Math.abs(-5));

// cbrt

console.log('\ncbrt');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

// ceil
console.log('\nceil'); 
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.0000001));

// floor

console.log('\nfloor'); 
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(8.5));
console.log(Math.floor(8.2));
console.log(Math.floor(8.999999999999999));

// round

console.log('\nround'); 
console.log(Math.round(8));
console.log(Math.round(8.000001));
console.log(Math.round(8.2));
console.log(Math.round(8.49999999999));
console.log(Math.round(8.5));
console.log(Math.round(8.9));
console.log(Math.round(8.9999));

// trunc

console.log('\ntrunc');
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.0001));
console.log(Math.trunc(4.9999999999));
console.log(Math.trunc(-8));

// hypot

console.log('\nhypot');
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(4, 5, 6));

// max

console.log('\nmax');
console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.max(-10, 2, 8, 4, 6));
console.log(Math.max(10, 'asd', 8, 4, 6));

// min

console.log('\nmin');
console.log(Math.min(10, 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 6));
console.log(Math.min(10, 'asd', 8, 4, 6));

// pow

console.log('\npow');
console.log(Math.pow(2, 0));
console.log(Math.pow(2, 1));
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 5));
console.log(Math.pow(2, 6));
console.log(Math.pow(2, 7));
console.log(Math.pow(2, 8));
console.log(Math.pow(2, 9));
console.log(Math.pow(2, 10));

// sign

console.log('\nsign');
console.log(Math.sign(8));
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));

// sqrt

console.log('\nsqrt');
console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(81));
console.log(Math.sqrt(2));
console.log(Math.sqrt(13));

// random [0...1)

console.log('\nrandom');
console.log(Math.random());

// Random skaicius nuo 0 iki 1

for (let i = 0; i < 10; i++) {
    console.log(Math.random());
    
}

// Random skaicius: 3 arba 7
// [0...1) = [0...0.5) + [0.5 ..1)

/*for (let i = 0; i < 1000000; i++) {
    if (Math.random() < 0.5) {
        count3++;
        } else {
        count7++;
            
        }
} 
 */
// [13...149]
console.log("---------------");

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));


const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 10; i++) {
    console.log(randomNumber(0, 9));
    const index = randomNumber(0, 9);
    counts [index]++;
}
console.log(counts);







