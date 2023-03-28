import Observable from "./Observable.js";
import { CorporateCustomer, RegularCustomer } from './Customer.js'
import EventType from "./EventType.js";
import Observer from "./Observer.js";


export default class Wareahouse implements Observable {
    private corporateCustomer: CorporateCustomer[];
    private regularCustomer: RegularCustomer[];
    private stockPrice: number = 0;
    private productPrice: number = 0;


    constructor() {
        this.corporateCustomer = [];
        this.regularCustomer = [];
        this.stockPrice = 1;
        this.productPrice = 10;

    }

    updateStockPrice() {
        this.stockPrice = Math.round(100 * Math.random());
        this.notify(EventType.Corporate, `${this.stockPrice}`)
    }


    updateProductPrice() {
        this.productPrice = Math.round(20 * Math.random());
        this.notify(EventType.Regular, `${this.stockPrice}`)
    }

    private isCorporateCustomer(customer: Observer) {
        return customer instanceof CorporateCustomer
    }

    private isRegularCustomer(customer: Observer) {
        return customer instanceof RegularCustomer
    }


    attach(customer: Observer): void {
        if (this.isCorporateCustomer(customer)) {
            this.corporateCustomer.push(customer);
        }
        else if (this.isRegularCustomer(customer)) {
            this.regularCustomer.push(customer);
        }
        else {
            return;
        }
    }

    detach(customer: Observer): void {
        if (this.isCorporateCustomer(customer)) {
            const index = this.corporateCustomer.indexOf(customer);
            if (index === -1) {
                throw `No Corpotate Subscriber`;
            }
            else {
                this.corporateCustomer.splice(index, 1)
            }
        }
        else if (this.isRegularCustomer(customer)) {
            const index = this.regularCustomer.indexOf(customer);
            if (index === -1) {
                throw `No Regular Subscriber`;
            }
            else {
                this.regularCustomer.splice(index, 1)
            }
        }

        else {
            throw `Subscriber type is not supported`
        }



    }



    notify(eventType: EventType, info: string): void {
        switch (eventType) {
            case EventType.Corporate:
                this.corporateCustomer.forEach((customer, index) => {
                    customer.update(info);
                });
                break;
            case EventType.Regular:
                this.regularCustomer.forEach((customer, index) => {
                    customer.update(info)
                });
            break;
                default: 
        }
    }

}