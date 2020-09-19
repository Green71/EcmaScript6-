//OPERADOR DE REPOSO

const obj = {
    name: "Daniel",
    age: 16,
    country: "MX"
}

let { name, ...all } = obj;

console.log(name);
//Daniel
console.log(name, all);
//Daniel {age: 16, country: "MX"}
console.log(all);
//{age: 16, country: "MX"}



//PROPIEDADES DE PROPAGACION

const obj2 = {
    name: "Daniel",
    age: 16
}

const obj3 = {
    ...obj2,
    country: "MX"
}

console.log(obj3);



//PROMISE.FINNALY

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? resolve("Hello World")
        : reject(new Error("Test Error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("finalizo"))



    //REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec(`2020-04-20`);
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
