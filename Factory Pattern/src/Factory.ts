import { NFC, Bomb, Enemy, Knight, Mage, Undead } from './GameElements.js'
import { ArtifactType, EnemyType } from './interfaces.js'


// export class Factory{
//     createGameArtifact(name:string, elementType:ArtifactType){
//         switch(elementType){
//             case ArtifactType.Bomb:
//                 return new Bomb(name);
//             case ArtifactType.NPC:
//                 return new NFC(name);
//             case ArtifactType.Enemy:
//                 return new Enemy(name);
//             default:
//                 throw("unsupported GameArtifiact Type");
//         }
//     }
// }


abstract class Factory {
    constructor() { }

    createGameElement(name: string, elementType: ArtifactType | EnemyType) { }
}

export class EnemyFactory extends Factory {
    constructor() {
        super()
    }

    createGameElement(name: string, elementType: ArtifactType | EnemyType) {
        switch(elementType) {
            case EnemyType.Knight:
                return new Knight(name);
            case EnemyType.Mage:
                return new Mage(name);
            case EnemyType.Undead:
                return new Undead(name);
            default:
                throw("Unspupported Enemy type")
        }
    }
}


export class KnightFactory extends EnemyFactory{
    constructor(){
        super()
    }

    createGameElement(name: string){
        return  new Knight(name);
    }

}


export class MageFactory extends EnemyFactory{
    constructor(){
        super()
    }

    createGameElement(name: string){
        return  new Mage(name);
    }

}

export class UndeadFactory extends EnemyFactory{
    constructor(){
        super()
    }

    createGameElement(name: string){
        return  new Undead(name);
    }

}