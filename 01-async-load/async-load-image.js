let resolve = (image) => {
    console.log("image loaded.");
    document.body.appendChild(image);
};

let reject = (image) => {
    console.log("fail to load image.");
};

// load a image asynchronously
function load(src, resolve, reject) {
    const image = new Image(200, 200);
    image.src = src;
    image.onload = () => resolve(image);
    image.onerror = reject;
}

load("./asset/img.png", resolve, reject);
console.log("Hello world");

// output
// Hello world
// image loaded.
