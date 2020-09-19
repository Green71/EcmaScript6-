
//////PARAMS

//Antes

function newFunction(name, age, country) {
    var name = name || "Oscar";
    var age = age || "32";
    var country = country || "Mex";
    console.log(name, age, country);
}

newFunction("Daniel", "16", "Mex");
// Igual a = Daniel   16   Mex

newFunction();
// Igual a = Oscar 32 Mex




//ECMAScript 6+


function newFunction2(name = "Oscar", age = 16, country = "usa"){
    console.log(name, age, country)
}

newFunction2();
// Igual a = Oscar 16 usa

newFunction2("Enrique", 78, "Arabia")
// Igual a = Enrique 78 Arabia




///CONCANETACIÓN



let hello = "Hello";
let world = "World";


//Antes

let frase = hello + " " + world;

//ECMAScript 6+

let frase2 = `${hello} ${world}`;
