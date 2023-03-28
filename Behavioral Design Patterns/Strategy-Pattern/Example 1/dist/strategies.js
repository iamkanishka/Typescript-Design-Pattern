export class Sorter {
    constructor() { }
    sort(data) { }
}
export class BubbleSorter extends Sorter {
    constructor() {
        super();
    }
    sort(data) {
        const n = data.length;
        setTimeout(() => {
            console.log(`Bubble Soter finished in ${n * n} ms!`, n * n);
        });
    }
}
export class QuickSorter extends Sorter {
    constructor() {
        super();
    }
    sort(data) {
        const n = data.length;
        setTimeout(() => {
            console.log(`QuickSorter Finished in ${n * Math.log10(n)} ms!`);
        }, n * Math.log10(n));
    }
}
//# sourceMappingURL=strategies.js.map