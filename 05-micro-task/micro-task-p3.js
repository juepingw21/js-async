// output:
// p1-1
// p1-2
// promise-1
// promise-2
// Hello world from sync
// setTimeout-1
// setTimeout-2
// success-> success from p1

let p1 = new Promise((resolve, reject) => {
    console.log("p1-1");
    setTimeout(() => {
        console.log("setTimeout-1");
        resolve("success from p1");
        console.log("setTimeout-2");
    }, 2000);
    // reject("failed from p1");
    console.log("p1-2");
});

new Promise((resolve, reject) => {
    console.log("promise-1");
    resolve(p1);
    console.log("promise-2");
}).then(
    (value) => console.log("success->", value),
    (error) => console.log("failed->", error)
);
console.log("Hello world from sync");
