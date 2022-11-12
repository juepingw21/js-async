let p1 = new Promise((resolve, reject) => {
    resolve("p1-success");
    // reject("p1-failed")
});

let p2 = p1.then(
    (value) => console.log("p1-result:", value),
    (reason) => console.log("p1-result:", reason)
).then(
    (value) => console.log("second success then:", value),
    (reason) => console.log("second failed then:", reason)
);

// Promise {<fulfilled>: 'p1-success'}
// Promise {<pending>}
console.log(p1);
console.log(p2);

// promise {<fulfilled>: 'p1-success'}
// Promise {<fulfilled>: undefined}
// setTimeout(() => {
//     console.log(p1);
//     console.log(p2);
// }, 0);

console.log("Hello world from sync");
