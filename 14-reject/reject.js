// case 1: resolve("success");
let hd = {
    then(resolve, reject) {
        resolve("success");
    },
};
Promise.resolve(hd).then((value) => console.log(value));

// case 2: reject("failed");
Promise.reject("failed")
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

new Promise((resolve, reject) => {
    resolve("test");
})
    .then((value) => {
        if (value !== "success") {
            return Promise.reject("not success");
        }
    })
    .catch((error) => {
        console.log(error);
    });
