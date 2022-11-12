// return an object at then()

let p1 = new Promise((resolve, reject) => {
    resolve("success");
})
    .then((value) => {
        // then() in an object
        let object = {
            name: "object",
            then(resolve, reject) {
                resolve("resolve from [object] then()");
            },
        };

        // then() in a class
        class HD {
            then(resolve, reject) {
                resolve("resolve from [HD] then()");
            }
        }

        // static then()
        class HDS {
            static then(resolve, reject) {
                resolve("resolve from [HDS] static then()");
            }
        }

        console.log("first-then:", value);
        return HDS;
    })
    .then((value) => {
        console.log("second-then:", value);
    });
