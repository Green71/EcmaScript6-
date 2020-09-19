//https://static.platzi.com/media/user_upload/const-vs-let-vs-var-f3270d36-0e39-4e0d-8ed1-2681991b84b2.jpg

//MULTILÍNEA

//Antes
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et omnis aliquid reiciendis itaque aut exercitationem dolores necessitatibus vel ad \n"
+ "otra linea";
console.log(lorem);


//ECMAScript 6+

let lorem2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et omnis aliquid reiciendis itaque aut exercitationem dolores necessitatibus vel ad
otra linea`;
console.log(lorem2);



//DESESTRUCTURACIÓN

var person = {
    name : "Daniel",
    age : 16,
    country : "Mex"
}

//Antes

console.log(person.name, person.age, person.country);

//ECMAScript 6+

let {name, age, country} = person;
console.log(name, age, country);



//SPREAD OPERATOR

let team1 = ["Oscar", "Pedro", "Ricardo"];
let team2 = ["Maria", "Uwu", "Cemento"];

//Antes

let educacion = ["David","Oscar", "Pedro", "Ricardo","Maria", "Uwu", "Cemento"];
console.log(educacion) 

//ECMAScript 6+

let newEducation = ["David", ...team1, ...team2];
console.log(newEducation)


//LET, VAR Y CONST
//imagen arriba

//var esta en el scope global, pero no let y const
//EJEMPLO

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global let";
}

{
    const globalConst ="Global Const"
}

console.log(globalVar);
//Global Var
//console.log(globalLet);
////ERROR
//console.log(globalConst);
////ERROR
