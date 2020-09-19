//PARÁMETROS EN OBJETOS

let name = "Oscar";
let age = 32;

//Antes

objeto = {name: name, age:age};
console.log(objeto);
//ECMAScript 6+

objeto2 = {name, age};
console.log(objeto2);


//ARROW FUNCTIONS

let names = [
    {namez: "Oscar", age: 15},
    {namez: "Daria", age: 32}
];

//Antes

let listOfNames = names.map(function (item){
    console.log(item.namez);
})

//ECMAScript 6+

let listOfNames2 = names.map(item => console.log(item.namez))

const listOfNames3 = (namez, age) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

//terminar clase