import { SmallArray, BigArray } from './Client.js';
const tiny = [];
for (let i = 0; i < 100; i++) {
    tiny.push(500 * Math.random());
}
const tinyArray = new SmallArray(tiny);
const bigy = [];
for (let i = 0; i < 1000; i++) {
    bigy.push(50000 * Math.random());
}
const bigyArray = new BigArray(bigy);
tinyArray.sort();
bigyArray.sort();
//# sourceMappingURL=main.js.map