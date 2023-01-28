import { CorporateCustomer, RegularCustomer } from './Customer.js';
import EventType from "./EventType.js";
export default class Wareahouse {
    constructor() {
        this.stockPrice = 0;
        this.productPrice = 0;
        this.corporateCustomer = [];
        this.regularCustomer = [];
        this.stockPrice = 1;
        this.productPrice = 10;
    }
    updateStockPrice() {
        this.stockPrice = Math.round(100 * Math.random());
        this.notify(EventType.Corporate, `${this.stockPrice}`);
    }
    updateProductPrice() {
        this.productPrice = Math.round(20 * Math.random());
        this.notify(EventType.Regular, `${this.stockPrice}`);
    }
    isCorporateCustomer(customer) {
        return customer instanceof CorporateCustomer;
    }
    isRegularCustomer(customer) {
        return customer instanceof RegularCustomer;
    }
    attach(customer) {
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
    detach(customer) {
        if (this.isCorporateCustomer(customer)) {
            const index = this.corporateCustomer.indexOf(customer);
            if (index === -1) {
                throw `No Corpotate Subscriber`;
            }
            else {
                this.corporateCustomer.splice(index, 1);
            }
        }
        else if (this.isRegularCustomer(customer)) {
            const index = this.regularCustomer.indexOf(customer);
            if (index === -1) {
                throw `No Regular Subscriber`;
            }
            else {
                this.regularCustomer.splice(index, 1);
            }
        }
        else {
            throw `Subscriber type is not supported`;
        }
    }
    notify(eventType, info) {
        switch (eventType) {
            case EventType.Corporate:
                this.corporateCustomer.forEach((customer, index) => {
                    customer.update(info);
                });
                break;
            case EventType.Regular:
                this.regularCustomer.forEach((customer, index) => {
                    customer.update(info);
                });
                break;
            default:
        }
    }
}
//# sourceMappingURL=Warehouse.js.map