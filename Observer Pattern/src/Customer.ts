import Observer from './Observer';

export class CorporateCustomer implements  Observer{
    update(info:string){
        console.log(`Stock Price is now`, info);

    }
}

export class RegularCustomer implements  Observer{
    update(info:string){
        console.log(`Product Price is now`, info);

    }
}


