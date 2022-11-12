let p1 = new Promise((resolve, reject) => {
    resolve("success");
})
    .then(
        (value) => {
            console.log("Part 1: Promise chainning without return statement:");
            console.log("p1-first-then:", value);
        },
        (reason) => console.log("p1-first-then error:", reason)
        // then() returns a Promise object with undefined PromiseState
        // We need to return a new Promise object from the prev then() function
    )
    .then(
        (value) => console.log("p1-second-then:", value),
        (reason) => console.log("p1-second-then error:", reason)
    );

let p2 = new Promise((resolve, reject) => {
    resolve("success");
})
    .then(
        (value) => {
            console.log("Part 2: Promise chainning with return statement:");
            console.log("p2-first-then:", value);
            // return a new Promise object for the next then()
            return new Promise((resolve, reject) => {
                // next then will wait for this Promise changing its state
                setTimeout(() => {
                    resolve("I am from the first-then");
                }, 2000);
            });
        },
        (reason) => console.log("p2-first-then error:", reason)
    )
    .then(
        (value) => console.log("p2-second-then:", value),
        (reason) => console.log("p2-second-then error:", reason)
    );
