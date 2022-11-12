// Output:
// promise-1
// promise-2
// Hello world from sync
// setTimeout-1
// setTimeout-2
// success

let promise = new Promise((resolve, reject) => {
    console.log("promise-1");
    setTimeout(() => {
        console.log("setTimeout-1");
        resolve("success");
        console.log("setTimeout-2");
    }, 0);
    console.log("promise-2");
}).then((value) => console.log(value));
console.log("Hello world from sync");
