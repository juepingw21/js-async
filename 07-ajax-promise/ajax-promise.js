/* 
    Part 1: Quick learning ajax: 
*/

// function ajax(url) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onload = function () {
//         console.log(`Loaded: ${xhr.status} ${xhr.response}`);
//     };

//     xhr.onerror = function () {
//         // only triggers if the request couldn't be made at all
//         console.log(`Network Error`);
//     };

//     xhr.onprogress = function (event) {
//         // triggers periodically
//         // event.loaded - how many bytes downloaded
//         // event.lengthComputable = true if the server sent Content-Length header
//         // event.total - total number of bytes (if lengthComputable)
//     };
// }

// let url = "https://www.reddit.com/r/worldnews.json";
// ajax(url);

/* 
    Part 2: Original request
*/
function ajax(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
        if (this.status == 200) {
            callback(JSON.parse(this.response));
        } else {
            throw new Error("failed to load the contents");
        }
    };
}

/* 
    Part 2: Original request with promise
*/
function ajaxWithPromise(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(JSON.parse(this.response));
            } else {
                reject("failed to load the contents");
            }
        };
        xhr.onerror = function () {
            reject("onerror " + this);
        };
    });
}

function displayTitles(json) {
    let children = json.data.children;
    for (let i = 0; i < children.length; i++) {
        let title = children[i].data.title;
        if (title.length > 75) {
            title = title.substring(0, 75) + "...";
        }
        console.log("Post " + (i + 1) + ": " + title);
    }
}

let url = "https://www.reddit.com/r/worldnews.json";
ajaxWithPromise(url).then(
    value => displayTitles(value),
    error => console.log(error)
);
