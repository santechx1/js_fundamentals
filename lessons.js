/* STRINGS */

var firstName = 'Firstname', lastName = 'Lastname';

var mayus = firstName.toUpperCase();

var minus = firstName.toLowerCase();

var firstLetter = firstName.charAt(0);

var nameLength = firstName.length;

var fullName = firstName + ' ' + lastName;

var fullName1 = `${firstName} ${lastName}`;

var str = firstName.substr(0, 2);

/* NUMBERS */
var edad = 26;
// edad = edad +1
edad += 1;

var peso = 75;
// peso = peso - 2
peso -= 2;

var precio = 200.3;

// la manera de almacenar decimales no es tan precisa
var total = precio * 3;

// una manera de sobrellevar esta imprecision es
// con un decimal
var total1 = precio * 100 * 3 / 100;

// con varios decimales
var total1 = Math.round(precio * 100 * 3) / 100;
//Especificamos el numero de decimales
var totalStr = total1.toFixed(2);
// conversion de str a flotante
var total2 = parseFloat(totalStr);

var pizza = 8;
var personas = 2;
var porcionesPorPersona = pizza / personas;

/* FUNCTIONS */
var n1 = 'Firstname', e1 = 26;
function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`);
}

// imprimirEdad(n1,e1);
// imprimirEdad('Vicky', 28);
// imprimirEdad('Erick', 24);
// imprimirEdad('Juan', 25);

// Alcance de las funciones
var n2 = 'Firstname';
// window es el objeto global del navegador
// y almacena todas las variables que no esten definidas dentro de una función
// ejemplo window.n2
function printUppercase(n) {
    // esto introduce un efecto colateral, modifica una variable global
    // lo cual no es considerado buena práctica
    n3 = n.toUpperCase();
    console.log(n3);
}
// printUppercase(n2);

/* OBJECTS */
// clave y valor
var san = {
    nombre: 'Firstname',
    apellido: 'Lastname',
    edad: 26
}

// desglosar los objectos segun los parámetros que necesitemos
function printName({ nombre }) {
    console.log(nombre.toUpperCase());
}
// printName(san);
// printName({ nombre: 'Pepito' });

// destructurar objetos
// var nombre = san.nombre;
// var { nombre } = san;

function printUserInfo(user) {
    var { nombre, edad } = user;
    // var { edad } = user;
    console.log(`Hola, me llamo ${nombre} tengo ${edad} años.`)
}

// Parámetros como referencia o como valor

// Referencia, afecta el valor original del parámetro
function birthday(person) {
    person.edad += 1;
}

// Valor no altera el valor original del parámetro
function birthday1(edad) {
    edad += 1;
}

function birthday3(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

/* COMPARACIONES */
// Variables
var x = 4, y = '4';

x == y;
// true, poque con esta comparación pone ambos valores en un mismo tipo de dato

x === y;
// false, mantiene el tipo de dato de la variable

// Objetos

var p1 = {
    nombre: 'Firstname'
};

var p2 = {
    nombre: 'Firstname'
}
p1 == p2;
p1 === p2;
// false, porque pregunta por la referencia a la variables que estamos comparando
// y son diferentes

p3 = p1;

p1 == p3;
p1 === p3;
// verdadero, poque ambas variables apuntan a la misma referencia,
// espacio en memoria asignado para el objeto

var p4 = {
    ...p1
};
p1 == p4;
p1 === p4;
// false, porque p4 es un objeto nuevo, no hace referencia a p1

var p5 = p1;

p5.nombre = 'Mijin';

// va a modificar el nombre de p1 también, porque p5 hace referencia a la misma
// posion en memoria ram de p1

/* FUNCIONES QUE RETORNAN VALORES */

const MAYORIA_DE_EDAD = 18;

// opcion 1, funcion declarativa
// function esMayorDeEdad(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// opcion 2, funcion expresiva
// var esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// opcion 3, FUNCIONES DE FLECHA
// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('Acceso denegado!');
    } else {
        console.log('Acceso permitido');
    }
}

const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })

/* ESTRUCTURAS REPETITIVAS */

// do - while
var count = 0;
const raining = () => Math.random() < 0.25;
do {
    count++;
} while (!raining());

var palabra = count > 1 ? 'veces' : 'vez';
// console.log(`Fui a ver si llovía ${count} ${palabra}`);

var p1 = {
    nombre: 'Firstname',
    apellido: 'Lastname',
    altura: 1.88,
    libros: 100
};

var p2 = {
    nombre: 'Pepe',
    apellido: 'Fernandez',
    altura: 1.66,
    libros: 200
};

var p3 = {
    nombre: 'Carla',
    apellido: 'Casas',
    altura: 1.70,
    libros: 101
};

var p4 = {
    nombre: 'Jorge',
    apellido: 'Juarez',
    altura: 1.80,
    libros: 178
};

/** ARRAYS */

var personas = [p1, p2, p3, p4];

// for (let index = 0; index < personas.length; index++) {
//     console.log(`${personas[index].nombre} mide ${personas[index].altura}`);
// }

/** FILTER */
// opcion 1
// const esAlta = persona => persona.altura > 1.8;

// opcion 1.1, más mejorada
const esAlta = ({ altura }) => altura > 1.8;

// opción mas prolija
// opcion 1
var personasAltas = personas.filter(esAlta);

// opcion 2
// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.8;
// })

// opcion 3
// var personasAltas = personas.filter(persona => persona.altura > 1.8);
// console.log(personasAltas);

// tarea

//opcion 1
const esBaja = ({ altura }) => altura < 1.6;
var personasBajas = personas.filter(esBaja);

//opcion 2
// var personasBajas = personas.filter(persona => persona.altura < 1.6);

// console.log(personasBajas);

/** MAP */

// opcion 1
// const pasarAlturaACms = persona => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     };
// }


// opcion 1.1, mas compacta prolija
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
});


var personasCms = personas.map(pasarAlturaACms);

// console.log(personasCms);

/** REDUCE */

// reduce un array a un valor unico

// var acum = 0;

// for (let index = 0; index < personas.length; index++) {
//     acum += personas[index].libros;

// }

// const reducer = (acum, persona) => {
//     return acum + persona.libros;
// }

const reducer = (acum, { libros }) => acum + libros;

var totalLibros = personas.reduce(reducer, 0);

// console.log(`Libros acumulados: ${totalLibros}`);

/** OBJECTS */

// En realidad son prototipos y no clases, porque no existe la herencia como tal


// la palabra reservada 'new' seguida del prototipo hace que se cree un nuevo objeto
// con ese prototipo asignado para luego ejecutarse el constructor de ese prototipo,
// e implicitamente se retorna el objeto creado.

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () { };
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

// Persona.prototype.soyAlto = function () {
//     console.log(`${this.altura > 1.8 ? 'Si' : 'No'} soy alto/a, mido ${this.altura}m`);
// }

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

//con las arrow function se pierde la referencia a 'this' del prototipo y toma al objeto window, 
// como si 'this' estuviese fuera del scope de la función y apuntara al scope global
// Persona.prototype.soyAlto = () => this.altura > 1.8;

// var san1 = new Persona('Firstname', 'Lastname', 1.88);
// var erika = new Persona('Erika', 'Luna', 1.7);
// var juan = new Persona('Juan', 'Perez', 1.6);

// HERENCIA PROTOTIPAL
// Si el bus prototipo no tiene el metodo que se pregunta, busca en su padre y asi sucesivamente
// hasta llegar al tipo object.

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

// Esta pseudo herencia debe ejecutarse antes de sobreescribir un metodo ya existente
heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

// HERENCIA PROTOTIPAL ECAMSCRIPT 2016
class Fruit {
    constructor(size, color, price) {
        this.size = size;
        this.color = color;
        this.price = price;
    }
    isCheap() {
        return this.price < 5;
    }
    isBig() {
        return this.size > 50;
    }
}

class Apple extends Fruit {
    constructor(size, color, price, organic) {
        super(size, color, price);
        this.organic = organic;
    }
    isCheap() {
        return this.price < 0.5;
    }
    isOrganic() {
        console.log(`La manzana ${this.organic ? 'si' : 'no'} es organica.`)
    }
}

/** ASINCRONISMO */
// Podemos pasar funciones como parámetros
class Person {
    constructor(firstname, lastname, height) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.height = height;
    }

    greet(fn) {
        var { firstname, lastname } = this;
        console.log(`Hola, me llamo ${firstname} ${lastname}.`);
        if (fn) {
            fn(firstname, lastname);
        }
    }
    imTall() {
        return this.height > 1.8;
    }
}

class Developer extends Person {
    constructor(firstname, lastname, height) {
        super(firstname, lastname, height)
    }

    greet(fn) {
        var { firstname, lastname } = this;
        console.log(`Hola, me llamo ${firstname} ${lastname}, y soy desarrollador.`);
        if (fn) {
            fn(firstname, lastname, true);
        }
    }
}

function answerGreeting(firstname, lastname, isDev) {
    console.log(`Buen día ${firstname} ${lastname}.`);
    if (isDev) {
        console.log('Ah mirá, no sabía que eras desarrollador/a.')
    }
}

var santy = new Person('Firstname', 'Lastname', 1.88);
var eri = new Person('Erika', 'Luna', 1.7);
var juan = new Developer('Juan', 'Perez', 1.6);

// santy.greet();
// eri.greet(answerGreeting);
// juan.greet(answerGreeting);

// console.log('a');
// Se le pasa a settimeout la referencia a una funcion no el contenido de la misma,
// para que se llame a esta funcion cuando a pasado el tiempo del timeout.
// setTimeout(() => {
//     console.log('b');
// }, 2000);
// si el tiempo de timeout fuese '0' aún así el orden de ejecución va a ser el mismo, es decir,
// cuando JS haya terminado de ejecutar todas las tareas en la cola de ejecución(ej. los otros dos logs)
// despues de eso va a ir a buscar tareas pendientes en la cola de tareas, el log con timeou '0'
// console.log('c');

// for (let index = 0; index < 10000000000; index++) {
//     // si ponemos tareas muy pesadas o muchas tareas en la cola de ejecución
//     // va atardarse mucho mas en llegar a ejecutar las tareas en la cola de tareas.
// }

/** CALLBACKS */
const API_URL = 'https://rickandmortyapi.com/api/';
const CHARACTERS_URL = 'character/:id'
const RICK = `${API_URL}${CHARACTERS_URL.replace(':id', 1)}`;
const OPTIONS = { crossDomain: true };
const onCharactersResponse = function (character) {
    // el parametro 'character' funciona porque es el primer parámetro 'data' de la respuesta de la funcion '$.get()'
    // que a a ser utilizado en el callback(función que se ejecutará despues de que finalice la función 'get()').
    console.log(character.name);
    // el parámetro 'arguments', es un array con todos los argumentos que recibe una función
}

// function obtenerPersonaje(id, callback) {
//     const URL = `${API_URL}${CHARACTERS_URL.replace(':id', id)}`;
//     $
//         .get(URL, OPTIONS, callback)
//         .fail(() => {
//             console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
//         });
// }

// El orden de respuesta no necesariamente va a ser el mismo que en el que se realiza la petición
// ya que el método '$.get()' es asíncrono y va a llamar a la función callback cuando el servidor 
// al que se realizan las requests responda. Esto ilustra a la perfección el 'asincronísmo'.
// obtenerPersonaje(1);
// obtenerPersonaje(3);
// obtenerPersonaje(4);
// obtenerPersonaje(5);

// para que se respete el orden de ejecución de las funciones
// utilizamos callbacks pero es necesario llamar al callback mediante
// una función que no se esté ejecutando es decir una declaración o referencia
// NO ES UNA BUENA PRACTICA - CALLBACK HELL
// obtenerPersonaje(1, (character) => {
//     console.log(`Hola soy ${character.name}`);

//     obtenerPersonaje(2, function (character) {
//         console.log(`Hola soy ${character.name}`);

//         obtenerPersonaje(3, function (character) {
//             console.log(`Hola soy ${character.name}`);

//             obtenerPersonaje(4, function (character) {
//                 console.log(`Hola soy ${character.name}`);

//                 obtenerPersonaje(5, function (character) {
//                     console.log(`Hola soy ${character.name}`);

//                     obtenerPersonaje(6, function (character) {
//                         console.log(`Hola soy ${character.name}`);

//                         obtenerPersonaje(7, function (character) {
//                             console.log(`Hola soy ${character.name}`);
//                         });
//                     });
//                 });

//             });
//         });
//     });
// });

// si lo hacemos de esta manera la funcion con el id '2'
// siempre va a llamarse primero.
// obtenerPersonaje(1, obtenerPersonaje(2));


// onCharactersResponse es una función que queremos que se ejecute como callback
// cuando haya una respuesta exitosa de la función '$.get()'
// $.get(RICK, OPTIONS, onCharactersResponse);


/**PROMESAS */
// Valores que aún no conocemos
// tres estados:
// 1. pending
// 2. fullfied
// 3. rejected

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${CHARACTERS_URL.replace(':id', id)}`;
        $
            .get(URL, OPTIONS, function (data) {
                resolve(data);
            })
            .fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

// El código es mucho mas legible al encadenar las promesas y además se utiliza un solo catch 
// para cualquier error que suceda en cualquier promesa.
// obtenerPersonaje(1)
//     .then(personaje => {
//         console.log(`El personaje 1 es ${personaje.name}`);
//         return obtenerPersonaje(2);
//     })
//     .then(personaje => {
//         console.log(`El personaje 2 es ${personaje.name}`);
//         return obtenerPersonaje(3);
//     })
//     .then(personaje => {
//         console.log(`El personaje 3 es ${personaje.name}`);
//         return obtenerPersonaje(4);
//     })
//     .then(personaje => {
//         console.log(`El personaje 4 es ${personaje.name}`);
//         return obtenerPersonaje(5);
//     })
//     .then(personaje => {
//         console.log(`El personaje 5 es ${personaje.name}`);
//         return obtenerPersonaje(6);
//     })
//     .then(personaje => {
//         console.log(`El personaje 6 es ${personaje.name}`);
//         return obtenerPersonaje(7);
//     })
//     .then(personaje => {
//         console.log(`El personaje 7 es ${personaje.name}`);
//     })
//     .catch(onError);

// múltiples promesas en paralelo -> retornan en orden y se leen mucho mas prolijamente
// var ids = [1, 2, 3, 4, 5, 6, 7];
// var promesas = ids.map(id => obtenerPersonaje(id));
// Promise
//     .all(promesas)
//     .then(personajes => console.log(personajes))
//     .catch(onError);

// para optimizar aun mas la forma de trabajar con promesas usamos async..await
async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7];
    var promesas = ids.map(id => obtenerPersonaje(id));
    try {
        var personajes = await Promise.all(promesas);
        console.log(personajes);
    } catch (id) {
        onError(id);
    }
}
// obtenerPersonajes();

/**COMPLEMENTOS */
// var, let y const

for (var index = 0; index < 10; index++) {
    //...    
}
// si la variable 'index' de declara usando 'var' puede ser accedida fuera del ciclo for,
// pero si se declara con 'let' no se puede acceder fuera del ciclo.
// 'const' se comporta parecido a 'let' en los scopes pero no permite hacer reasignaciones
// console.log(`El índice está en el valor ${index}`);

// tiempo
function diasEntreFechas(fecha1, fecha2) {
    // 1000 milisegundos por 24 horas de un día
    const dia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2);
    return Math.floor(diferencia / dia);
}
// new Date(), devuelve la fecha actual por defecto
const hoy = new Date();
// constructor recibe año, mes, día(mes inicia en cero)
const nacimiento = new Date(1993, 6, 8);

//Recursividad
/*
13 / 4 <- división entera
13 - 4 = 9      cuenta +1 <--- caso recursivo
9 - 4 = 5       cuenta +1
5 - 4 = 1       cuenta +1
1 - 4 = -3      cuenta +0  <--- caso base

*/
function divisonEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0;
    }
    return 1 + divisonEntera(dividendo - divisor, divisor);
}

// Memoización
/*
    !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
    !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
*/

function factorial(n) {
    if (!this.cache) {
        this.cache = {};
    }
    if (this.cache[n]) {
        return this.cache[n];
    }
    if (n === 1) {
        return 1;
    }
    this.cache[n] = n * factorial(n - 1);
    this.cache[n];
}

// Closures
function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`);

    }
}

const saludoEcuatoriano = crearSaludo('mijin');
const saludoMexicano = crearSaludo('wey');
const saludoArgentino = crearSaludo('che');
const saludoColombiano = crearSaludo('parcero');

// saludoEcuatoriano('Firstname');
// saludoMexicano('Juan');
// saludoArgentino('Carlos');
// saludoColombiano('Maria');

// Estructuras de datos inmutables
const sann = {
    nombre: 'Firstname',
    apellido: 'Lastname',
    edad: 26
}

// const cumpleanos = persona => persona.edad++;
const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})
// la contraposicion/desventaja a este modo de tratar los datos es que necesitamos almacenar el resultado
// de la funcion que devuelve un nuevo objeto en una nueva variables, pero no se afecta al dato inicial

// Cambiar de contexto al ejecutar una función
function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);

}
//bind
//la función bind no ejecuta la función solamente retorna esa función con el contexto cambiado
// const saludarASan = saludar.bind(sann);
// el timeout es el que ejecuta la función
// setTimeout(saludar.bind(sann, 'Hola che'), 1000);

//call y apply
//ejecutan la función ese momento
// saludar.call(sann, 'Hola mijardin');
// saludar.apply(sann, ['Hola my garden']);






