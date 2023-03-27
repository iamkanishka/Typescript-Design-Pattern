export class Gameworld{
    gameMap :string;
    specificgameLogic:string;
    constructor(map:string, logic:string){
        this.gameMap=map;
        this.specificgameLogic=logic;
        console.log(`Setting up game map ${this.gameMap}`);
    }
}