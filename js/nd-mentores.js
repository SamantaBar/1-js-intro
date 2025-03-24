// 1 uzduotis - mokytojo suvestine:

const mokinys1 = ['Tadas',8, 9, 10, 4, 7]
const mokinys2 = ['Rima', 8, 3, 5, 4, 7]
const mokinys3 = ['Gabija', 3, 3, 3, 4, 4]
const mokinys4 = ['Jonas', 3, 8, 2, 7, 10]
const mokinys5 = ['Ona', 2, 7, 7, 7, 6]
const mokinys6 = ['Maryte', 10, 9, 10, 8, 9]

function mokinioVidurkis(mokinys) {
    console.log('Mokinio vardas: ' + mokinys[0]) ;
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys[5])/5;
    if(vidurkis >= 3.5) {
        console.log(mokinys[0] + ' išlaikė. Jo vidurkis: ' + vidurkis);
    } else {
    let vidurkisNaujas = ((vidurkis*5) + 10)/6;
    console.log(mokinys[0] + ' neišlaikė. Jo vidurkis: ' + vidurkis);
    if(vidurkisNaujas>=3.5) {
        console.log(mokinys[0] + ' išlaikytų kursą jeigu gautu vieną dešimtuką.') ;
    }
}

}
mokinioVidurkis(mokinys1);
mokinioVidurkis(mokinys2);
mokinioVidurkis(mokinys3);
mokinioVidurkis(mokinys4);
mokinioVidurkis(mokinys5);
mokinioVidurkis(mokinys6);
