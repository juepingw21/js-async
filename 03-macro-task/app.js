function load(src, resolve) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    document.body.appendChild(script);
}

// In macro-task queue, the exe-order does not guarantee following the order of 
// function declarations. It may case error in this case.
load("./hd.js", () => {
    console.log("First loading function");
    hd();
    console.log("\n");
});

load("./func.js", () => {
    console.log("Second loading function");
    func();
    console.log("\n");
});

// load-hd.js must be loaded before load-func.js
// callback hell exists here
load("./hd.js", () => {
    console.log("Loading load-hd.js -> load-func.js");
    hd();
    load("./func.js", () => {
        func();
        console.log("\n");
    });
});

console.log("Hello world");
