import { Knight, Mage, Undead } from './GameElements.js';
import { EnemyType } from './interfaces.js';
class Factory {
    constructor() { }
    createGameElement(name, elementType) { }
}
export class EnemyFactory extends Factory {
    constructor() {
        super();
    }
    createGameElement(name, elementType) {
        switch (elementType) {
            case EnemyType.Knight:
                return new Knight(name);
            case EnemyType.Mage:
                return new Mage(name);
            case EnemyType.Undead:
                return new Undead(name);
            default:
                throw ("Unspupported Enemy type");
        }
    }
}
export class KnightFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Knight(name);
    }
}
export class MageFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Mage(name);
    }
}
export class UndeadFactory extends EnemyFactory {
    constructor() {
        super();
    }
    createGameElement(name) {
        return new Undead(name);
    }
}
//# sourceMappingURL=Factory.js.map