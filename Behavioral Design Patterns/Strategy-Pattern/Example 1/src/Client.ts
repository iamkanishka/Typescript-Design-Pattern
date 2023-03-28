import {Sorter, QuickSorter, BubbleSorter} from './strategies.js';

export interface IArray{
    sorter:Sorter;
    data:number[]
}

export class SmallArray implements IArray{
    sorter:Sorter;
    data:number[]
    constructor(d:number[]){
        this.sorter = new BubbleSorter();
        this.data=d
    }

    sort(){
        this.sorter.sort(this.data)
    }
}


export class BigArray implements IArray{
    sorter:Sorter;
    data:number[]
    constructor(d:number[]){
        this.sorter = new QuickSorter();
        this.data=d
    }

    sort(){
        this.sorter.sort(this.data)
    }
}