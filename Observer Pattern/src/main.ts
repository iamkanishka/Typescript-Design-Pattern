import Wareahouse from "./Warehouse.js";
import { CorporateCustomer, RegularCustomer } from "./Customer.js";

const wareHouse = new Wareahouse();

const IBM = new CorporateCustomer();
const MCD = new CorporateCustomer();
const PH = new CorporateCustomer();
const KFC = new CorporateCustomer();


const kannu = new RegularCustomer();
const atomless = new RegularCustomer();
const gadgetGuy = new RegularCustomer();
const hotShot = new RegularCustomer();


wareHouse.attach(IBM);
wareHouse.attach(MCD);
wareHouse.attach(PH);
wareHouse.attach(KFC);


wareHouse.attach(kannu);
wareHouse.attach(atomless);
wareHouse.attach(gadgetGuy);
wareHouse.attach(hotShot);


let counter = 0;
const id = setInterval(() => {
    const news = Math.round(Math.random());
    console.log(`${news === 0 ? 'Corpoarte' : 'Product'} news update`);
    switch (news) {
        case 0:
            wareHouse.updateStockPrice();
            break;
        case 1:
            wareHouse.updateProductPrice();
            break;
        default:
            console.log('impossible');
    }
    if (counter === 2) {

        wareHouse.detach(IBM);
        wareHouse.detach(MCD);
    
    }
    if (counter === 3) {
        wareHouse.detach(PH);
        wareHouse.detach(KFC);
    }
    if (counter>4) {
       clearInterval(id);
    }
    counter += 1;

}, 3000);





