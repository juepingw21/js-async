// init a database for the cache
const db = new DB();
function initDB() {
    let name = ["Lise", "Lott", "Zafar"];
    for (let i = 0; i < name.length; i++) {
        let student = new Student(name[i], i + 1);
        db.add(student);
    }
}
initDB();

// create a fake ajax request to the database
function fakeAjax(name) {
    return new Promise((resolve, reject) => {
        let student = db.findByName(name);
        if (student) {
            resolve(student);
        } else {
            reject(student);
        }
    });
}

// create a query with a simple cache.
function query(name) {
    const cache = query.cache || (query.cache = new Map());
    if (cache.has(name)) {
        console.log("Cache is working");
        return Promise.resolve(cache.get(name));
    }
    return fakeAjax(name).then(
        (student) => {
            cache.set(name, student);
            return student;
        },
        (error) => {
            return "Cannot find the student";
        }
    );
}

/* Notes: 
    implementing Promise.resolve(...)
*/
Promise.myResolve = function (value) {
    return new Promise((resolve) => resolve(value));
};

// Demo
query("Lise").then(
    (value) => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
);

setTimeout(() => {
    query("Zafar").then(
        (value) => {
            console.log(value);
        },
        (error) => {
            console.log(error);
        }
    );
}, 2000);

setTimeout(() => {
    query("Lise").then(
        (value) => {
            console.log(value);
        },
        (error) => {
            console.log(error);
        }
    );
}, 3000);

setTimeout(() => {
    query("Lott").then(
        (value) => {
            console.log(value);
        },
        (error) => {
            console.log(error);
        }
    );
}, 4000);
