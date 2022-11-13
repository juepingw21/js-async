function timeout(delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}

console.log("hello world");
timeout(2000)
    .then(() => {
        console.log("after the 2 second");
        return timeout(2000);
    })
    .then(() => {
        console.log("after 2 second again");
    });
