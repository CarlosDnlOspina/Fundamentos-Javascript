
//Declaración de variables
let firstName = "Carlos"

//Mostrar en console
console.log(firstName)

//Usar variables descriptivas
let myFirstJob = 'Developer';
let myCurrentJob = 'teacher';

//Tipos de datos en javascript
let myAge = 23;
let myName = "CarlosDnl";
let isDeveloper = true;
let isUndefined;
//tipo de una variables
console.log(typeof true);
console.log(typeof 24);
console.log(typeof "developer");
console.log(typeof isUndefined);

//Reasignando el valor de una variable
isUndefined = false;
console.log(typeof isUndefined);

/*Formas de declarar variables en javascript
let = Variables que puedan cambiar más tarde
const = Variables que no cambiarán
var = Forma antigua para declarar variables
*/
let age = 30;
age = 32;

const birthYear = 1995;
var job = 'programmer';
job = 'teacher';

//Operadores aritméticos
const now = 2037;
const ageJonas = now - 1998;
const ageSarah = now - 1995;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);

const firstNameConst = 'Carlos';
const lasNameConst = 'Ospina';
console.log(firstNameConst + ' ' + lasNameConst);

//Operadores de asignación
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x *4 = 100
x++; // x = x + 1;
x--; // x  = x - 1;
console.log(x);

//Operadores de comparación
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 18);
console.log(ageJonas - 1991 > 20);

//Página para saber la precedencia de los operadores
//   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const name = 'Carlos';
const year = 3020;

const jonas = "I'am " + name + ', a' + (year - birthYear) + ' years old' + job + '!';
const jonasNew = `I'am ${name}, a ${(year - birthYear)} years old ${job}!`

console.log('Este es un texto \n\
de varias \n\
lineas');

console.log(`Este es un texto de 
varias lineas
usando comillas invertidas`);

//Tomando desiciones
const age = 20;
const isOldEnough = age >= 18;


if (isOldEnough) {
    console.log('Puede usar la licencia de conducir 😉🚗');
} else {
    console.log('🙃 No tienes permiso para manejar');
}

const birthYear = 1991;

//local 
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

//Global
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number('Carlos'));
console.log(String(24));
console.log('I am ' + 23 + ' years old')


//valores falsos: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"))
console.log(Boolean({}))

const money = 0;
if (money) {
    console.log("Puedes gastar 😅");
}
else {
    console.log("No tienes dinero 😊");
}

let height;

if (height) {
    console.log("La variables está definidida");
} else {
    console.log("No está definida");
}

//Operadores de igualdad
// == Igual  === Exactamente igual
console.log(18 == '18')
console.log(18 === '18')

const number = Number(prompt("Ingresa un número"));
console.log(number);

if (number === 23) {
    console.log("Funciona");
}

if (number !== 23) {
    console.log("ingresó")
}

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

//Swicht 
let today = 'monday';

switch (today) {
    case 'monday':
        console.log('Today is monday');
        break;
    case 'Tuesday':
        console.log('Today is tuesday');
        break;
    default: console.log('Add more days');
}

//Ternaria
let ageTernaria = 13;
let wine = true;
const ageTernariaResult = ageTernaria > 10 ? console.log("It's bigger that 10") : console.log("It's lattest that 10");
console.log(`Me gusta beber ${wine ? 'wine 🍷' : 'water 🤽'}`)


//Funciones
function logger() {
    console.log('Mi nombre es Carlos');
}

//Función con parametros
function fruitProcessor(apples, oranges) {
    const juice = `Jugo con ${apples} y ${oranges}`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Declaración de una función
function calAge(bithYear) {
    return 2037 - birthYear;
}

const age1 = calAge(1995);

//Función de expresión
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calAge2(1991);

console.log(age1, age2);

//Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1995);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

const ageRetirement = yearsUntilRetirement(1945);








