const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("first async");
        // reject("first async failed");
    }, 1000);
})
// p1 still returns a resolved promise since catch() returns a promise.
// this causes all() still working

// .catch((error) => {
//      console.log(error);
// })

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("second async");
        // reject("second async failed");
    }, 1000);
});

// 1. When p1 and p2 are fulfilled, Promise.all([p1, p2]) changed to fulfilled.
// 2. When p1 or p2 is rejected, Promise.all([p1, p2]) changed to rejected. The first
// rejected promise will be return back to the callback.

// Promise.all([p1, p2]).then(
//     (result) => {
//         console.log(result);
//     },
//     (error) => {
//         console.log(error);
//     }
// )

function getUsers(names){
    let promises = names.map((name) => {
        return query(name);
    });
    return Promise.all(promises);
}
getUsers(["Lise", "Lott", "Zafar"]).then(users => {
    console.log("All request are finished");
    console.log(users);
})

