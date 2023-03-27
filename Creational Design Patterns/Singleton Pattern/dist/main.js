"use strict";
class Singleton {
    constructor(d) {
        this.data = d;
    }
    static getInstance(d) {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton(d);
        }
        return Singleton._instance;
    }
}
const theOne = Singleton.getInstance('Neo');
console.log(theOne.data);
const theAnother = Singleton.getInstance('Iron Man');
console.log(theAnother.data);
console.log(theOne === theAnother);
//# sourceMappingURL=main.js.map