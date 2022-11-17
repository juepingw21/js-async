const rate = 200;

// shrink the div to the right side by 10px/sec
let shrinkDiv = (timeId) => {
    const div = document.querySelector("div");
    let width = parseInt(window.getComputedStyle(div).width);
    div.style.width = width - 10 + "px";
    if (width <= 100) {
        // stop shrink horizontally
        clearInterval(timeId);
    }
};

// move the div to the right side by 10px/sec
let moveDiv = (timeId) => {
    const div = document.querySelector("div");
    let left = parseInt(window.getComputedStyle(div).left);
    div.style.left = left + 10 + "px";
    if (left >= 200) {
        // stop div horizontal movement when left >= 200
        clearInterval(timeId);
        // shrink the div horizontally by 10px/sec
        interval(shrinkDiv, rate);
    }
};

function interval(callback, delay = 1000) {
    let id = setInterval(() => callback(id), delay);
}

interval(moveDiv, rate);

console.log("Hello world");

/* Un-optimized code */
// interval((timeId) => {
//     // move the div to the right side by 10px/sec
//     const div = document.querySelector("div");
//     let left = parseInt(window.getComputedStyle(div).left);
//     div.style.left = left + 10 + "px";
//     console.log(div.style.left);

//     // stop div horizontal movement when left >= 200
//     if (left >= 200) {
//         clearInterval(timeId);

//         // shrink the div horizontally by 10px/sec
//         interval((timeId) => {
//             let width = parseInt(window.getComputedStyle(div).width);
//             div.style.width = width - 10 + "px";

//             // stop shrink horizontally
//             if (width <= 100) {
//                 clearInterval(timeId);
//             }
//         }, 1000);
//     }
// }, 1000);
