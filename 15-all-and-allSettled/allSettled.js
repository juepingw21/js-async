const pp1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("first async");
        // reject("first async failed");
    }, 1000);
})

const pp2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("second async");
        // reject("second async failed");
    }, 1000);
});

Promise.allSettled([pp1,pp2]).then(users => {
    console.log("allSettled:");
    console.log(users);
})


function getUsers(names){
    let promises = names.map((name) => {
        return query(name);
    });
    return Promise.allSettled(promises);
}
getUsers(["Lise", "Lott", "Zafar", "Wang"]).then(users => {
    console.log("All request are finished");
    console.log(users);
})
