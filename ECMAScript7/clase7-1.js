//INCLUDES

var personas = ["Pepe", "Maria", "Luis", "Feranfloo"];

function who (persona)  {
    if(personas.includes(persona)){
        console.log(`${persona} esta en el equipo`);
    } else {
        console.log(`${persona} no esta en el equipo`)
    }
}

//ELEVAR A LA POTENCIA
let base = 3;
let exponente = 2 ;
let result  = base ** exponente;
console.log(result)
