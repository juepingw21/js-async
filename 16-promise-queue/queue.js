// let promise = Promise.resolve("1");
// promise
//     .then((value) => {
//         console.log(value);
//         return new Promise((resolve)=>{
//             resolve("2");
//         })
//     })
//     .then((value) => {
//         console.log(value);
//     });

let promise = Promise.resolve("1");

promise = promise.then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        resolve("2");
    });
});

promise = promise.then((value) => {
    console.log(value);
});

// function queue(nums) {
//     let promise = Promise.resolve();
//     nums.map((value) => {
//         promise = promise.then(() => {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     console.log(value);
//                     resolve();
//                 }, 1000);
//             });
//         });
//     });
// }

// queue([1,2,3,4,5]);

function p1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("p1");
            resolve();
        }, 3000);
    });
}

function p2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("p2");
            resolve();
        }, 1000);
    });
}

function queueMap(nums) {
    let promise = Promise.resolve();
    nums.map((value) => {
        promise = promise.then(() => {
            return value();
        });
    });
}

function queueReduce(nums) {
    nums.reduce((promise, value) => {
        return promise.then(() => {
            return value();
        });
    }, Promise.resolve());
}

function queue(tasks) {
    let curr = Promise.resolve();
    for (let i = 0; i < tasks.length; i++) {
        curr = curr.then(() => {
            return tasks[i]();
        });
    }
}
// queueMap([p1, p2]);
// queueReduce([p1, p2]);
// queue([p1, p2]);
