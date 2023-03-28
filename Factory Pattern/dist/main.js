import { EnemyType } from './interfaces.js';
import { EnemyFactory } from './Factory.js';
const factory = new EnemyFactory();
const Knight = factory.createGameElement("Knight Enemy ", EnemyType.Knight);
const mage = factory.createGameElement(" Mage Enemy", EnemyType.Mage);
const undead = factory.createGameElement("Undead Enemy", EnemyType.Undead);
Knight.act();
Knight.move();
mage.act();
mage.move();
undead.act();
undead.move();
console.log("The End");
//# sourceMappingURL=main.js.map