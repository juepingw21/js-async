// order: sync > micro task > macro task

setTimeout(() => {
    console.log("I am setTimeout from macro task queue");
}, 0);

new Promise((resolve, reject) => {
    resolve("success");
    console.log("promise");
}).then(
    (value) => console.log("I am from micro task queue"),
    (reason) => console.log("failed")
);

console.log("Hello world from sync");

// Output
// promise
// Hello world from sync
// I am from micro task queue
// I am setTimeout from macro task queue
