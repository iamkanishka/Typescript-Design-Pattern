import { Gameworld } from './Gameworld';
import { SubSystem } from './SubSystem';

export class Game {
    private gameworld;
    private subSystemList: SubSystem[];
    constructor(gw: Gameworld) {
        this.gameworld = gw
        this.subSystemList = []
    }

    addSubsystem(ss: SubSystem) {
        ss.execute();
        this.subSystemList.push(ss);
    }

    setGameworld(gw: Gameworld) {
        console.log(`setting up game world ${gw.gameMap}`)
    }

    render() {
        const time = new Date()
        console.log(`Rendering at ${time.toLocaleTimeString()}...`);
    }

    update() {
        const time = new Date()
        console.log(`Updating at ${time.toLocaleTimeString()}...`);

    }
}
