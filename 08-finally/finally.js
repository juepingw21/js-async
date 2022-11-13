function ajax(url) {
    return new Promise((resolve, reject) => {
        loading.style.display = "block";
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

ajax(url)
    .then(
        (value) => displayTitles(value),
        (error) => console.log(error)
    )
    .finally(() => {
        loading.style.display = "none";
    });
