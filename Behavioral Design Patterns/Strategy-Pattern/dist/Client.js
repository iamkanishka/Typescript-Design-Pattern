import { QuickSorter, BubbleSorter } from './strategies.js';
export class SmallArray {
    constructor(d) {
        this.sorter = new BubbleSorter();
        this.data = d;
    }
    sort() {
        this.sorter.sort(this.data);
    }
}
export class BigArray {
    constructor(d) {
        this.sorter = new QuickSorter();
        this.data = d;
    }
    sort() {
        this.sorter.sort(this.data);
    }
}
//# sourceMappingURL=Client.js.map