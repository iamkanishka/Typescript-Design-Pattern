export class Game {
    constructor(gw) {
        this.gameworld = gw;
        this.subSystemList = [];
    }
    addSubsystem(ss) {
        ss.execute();
        this.subSystemList.push(ss);
    }
    setGameworld(gw) {
        console.log(`setting up game world ${gw.gameMap}`);
    }
    render() {
        const time = new Date();
        console.log(`Rendering at ${time.toLocaleTimeString()}...`);
    }
    update() {
        const time = new Date();
        console.log(`Updating at ${time.toLocaleTimeString()}...`);
    }
}
//# sourceMappingURL=Game.js.map