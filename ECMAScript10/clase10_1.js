//FLAT

let array = [ 1 , 2 , 3 [ 1 , 2 , 3 [ 1 , 2, 3 ] ] ]; 
console.log(array.flat(2));



//FLAT MAP

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));
//(10) [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
//0: 1
//1: 2
//2: 2
//3: 4
//4: 3
//5: 6
//6: 4
//7: 8
//8: 5
//9: 10


//TRIM

let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world                  ';
console.log(hello2);
console.log(hello2.trimEnd());

////OPTIONAL CATCH ERROR
//
////Antes 
//
//catch(error){
//    error
//}
//
////ECMASccript 10
//
//catch{
//    error
//}

//ENTRIES

let persona = [["name", "Daniel"],["age", 16]];
console.log(Object.fromEntries(persona));
//{name: "Daniel", age: 16}


//SYMBOL OBJECT

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description)



//Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
//Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
//String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
//try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
//Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
//Symbol.prototype.description: permite regresar el descripcion opcional del Symbol


https://static.platzi.com/media/user_upload/IMG_D9D082386FA8-1-4d43d884-0cfd-4645-9cf4-d6c030985704.jpg