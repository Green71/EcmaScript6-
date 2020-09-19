//OBJECT ENTRIES

const data = {
    frontend : "Oscar",
    Backend : "Isabel",
    Design: "Ana"
}

const entries = Object.entries(data);
console.log(entries)
//clase8_1.js:10 (3) [Array(2), Array(2), Array(2)]
console.log(entries.length)
//3

//OBJECT VALUE

const data2 = {
    frontend : "Oscar",
    Backend : "Isabel",
    Design: "Ana"
}

const values = Object.values(data2);
console.log(values)
//(3) ["Oscar", "Isabel", "Ana"]
console.log(values.length)
//3


//PADDING

const string = "Hello";
console.log(string.padStart(16,"tum"));
//tumtumtumtuHello
console.log(string.padEnd(18,"."));
//Hello.............


//ASYNC AWAIT

const helloWorld =() =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
}

const helloAsync =async() =>{
    const hello = await helloWorld();
    console.log(hello);

}
helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(`${hello} equisde`)
    } catch (error) {
        console.log("error")
    }
}

anotherFunction();