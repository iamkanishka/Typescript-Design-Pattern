// array1.length <= 100
// array1.length > 100


// Main Strategy
export abstract class Sorter{
    constructor(){}
    sort(data:number[]):void{}
}

//Strategy1 extents Strategy
export class BubbleSorter extends Sorter{
    constructor(){
        super();
    }
    sort(data:number[]){
        const n = data.length;
        //o(n^2), I(n^2)
        setTimeout(()=>{
            console.log(`Bubble Soter finished in ${n*n} ms!`, n*n );
            
        })
    }
}

//Strategy1 extents Strategy
export class QuickSorter extends Sorter{
  constructor(){
    super();
  }

  sort(data: number[]) {
      const n = data.length;
      //O(n*log(n)), I(n*log(n)) -> n*log(n)
     setTimeout(()=>{
           console.log(`QuickSorter Finished in ${n*Math.log10(n)} ms!`);
           
     },n*Math.log10(n))

      
  }
}