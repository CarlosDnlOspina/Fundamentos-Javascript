let country = 'Colombia';
let continent = 'America';
let population = 46000000

console.log(country);
console.log(continent);
console.log(population);

//Ejercicio de masa corporal
let markMass = 78;
let markHeigth = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeigth ** 2);
let jonhBMI = johnMass / (johnHeight ** 2);

console.log(markBMI, jonhBMI);

let markHigherBMI = markBMI > jonhBMI;

if (markBMI > jonhBMI) {
    console.log(`la masa corporal de Mark es 
    ${markBMI} 😆`);
} else {
    console.log(`La masa corporal de John es ${jonhBMI} 🤣`);
}
const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;
const maxPoint = 100;

if (dolphinsScore > koalasScore && dolphinsScore >= maxPoint) {
    console.log(`El ganador es Dolphin con ${dolphinsScore}`);
} else if (dolphinsScore < koalasScore && koalasScore >= maxPoint) {
    console.log(`El ganador es Koala con ${koalasScore}`)
} else if (dolphinsScore === koalasScore && dolphinsScore >= maxPoint & koalasScore >= maxPoint) {
    console.log("Es un empate");
} else {
    console.log("Aún no llegan a los 100 puntos");
}

//Calculadora de propinas
let bill = 275;

let tip = bill >= 50 && bill <= 300 ? 15 : 20;
console.log(`El valor de la factura es ${bill} con un propina de ${(tip * bill) / 100} y el total a pagar es de ${bill + ((tip * bill) / 100)}`)

