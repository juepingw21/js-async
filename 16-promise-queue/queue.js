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

function p1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("p1");
            resolve();
        }, 1000);
    })
}

function p2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("p2");
            resolve();
        }, 1000);
    })
}

function queue(nums) {
    let promise = Promise.resolve();
    nums.map((value) => {
        promise = promise.then(() => {
            return value();
        });
    });
}

queue([p1, p2]);