
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





