// Promise states: pending, resolved, and rejected

new Promise((resolve, reject) => {
    resolve("success");
    // reject("fail");
}).then(
    value => {
        console.log("1. Do somthing after", value);
    },
    reason => {
        console.log("1. Do somthing after", reason);
    }
).then(
    value => {
        console.log("2. Do somthing after", value);
    },
    reason => {
        console.log("2. Do somthing after", reason);
    }
)
