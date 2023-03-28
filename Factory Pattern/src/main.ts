// import {ArtifactType} from './interfaces.js'
// import { Factory } from './Factory.js';


// const factory =  new Factory();

// const DecardCain = factory.createGameArtifact("DecardCain  Calm", ArtifactType.NPC);
// const bomb = factory.createGameArtifact("Neuclear Bomb", ArtifactType.Bomb);
// const Diablo = factory.createGameArtifact("Diablo Enemy", ArtifactType.Enemy);

// DecardCain.act();
// DecardCain.move();

// bomb.act();
// bomb.move();

// Diablo.act();
// Diablo.move();

// console.log("The End");


import {ArtifactType, EnemyType} from './interfaces.js'
import { EnemyFactory } from './Factory.js';


const factory =  new EnemyFactory();

const Knight  = factory.createGameElement("Knight Enemy ", EnemyType.Knight);
const mage = factory.createGameElement(" Mage Enemy", EnemyType.Mage);
const undead = factory.createGameElement("Undead Enemy", EnemyType.Undead);

Knight.act();
Knight.move();

mage.act();
mage.move();

undead.act();
undead.move();

console.log("The End");



