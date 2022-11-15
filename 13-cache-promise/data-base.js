class Student {
    #name;
    #id;

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    get name() {
        return this.#name;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    set name(name) {
        this.#name = name;
    }
}

class DB {
    #students;

    constructor() {
        this.#students = [];
    }

    #find(callback) {
        for (let i = 0; i < this.#students.length; i++) {
            if (callback(this.#students[i])) {
                return this.#students[i];
            }
        }
        return null;
    }

    size() {
        return this.#students.length;
    }

    add(student) {
        this.#students.push(student);
    }

    findByName(name) {
        return this.#find((student) => {
            return student.name === name;
        });
    }

    findByID(id) {
        return this.#find((student) => {
            return student.id === id;
        });
    }
    toString() {
        return this.#students;
    }
}
