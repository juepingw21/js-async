function load(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(script);
        document.body.appendChild(script);
    });
}

load("./hd.js")
    .then(
        (value) => {
            console.log("loaded", value);
            return load("./func.js");
        },
        (error) => {}
    )
    .then(
        (value) => {
            console.log("loaded", value);
            func();
        },
        (error) => {}
    );

console.log("Hello world");
