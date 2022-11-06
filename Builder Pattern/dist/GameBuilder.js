var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GameGraphicsSubsystem } from './GameGraphicsSubsystem';
import { GameNetwokSubsystem } from './GameNetwokSubsystem';
import { GameLogicsSubsystem } from './GameLogicsSubsystem';
import { GameSoundSubsystem } from './GameSoundSubsystem';
import { Gameworld } from './Gameworld';
import { Game } from './Game';
export class GameBuilder {
    constructor() { }
    initGameGraphicsSubsystem() {
        return new GameGraphicsSubsystem("GPU Init");
    }
    initGameNetwokSubsystem() {
        return new GameNetwokSubsystem("Initializing TCP/IP Stack....");
    }
    buildGameWorld(gm, splm) {
        return new Gameworld(gm, splm);
    }
    buildGameLogic() {
        return new GameLogicsSubsystem("Loading Game Logic Module...");
    }
    initGameSoundSubsystem() {
        return new GameSoundSubsystem("Initializing Game Sound System...");
    }
    buildGame() {
        return __awaiter(this, void 0, void 0, function* () {
            const gameworld = this.buildGameWorld("Fighter 2", "Neural Network Logic");
            const game = new Game(gameworld);
            const gameGraphicsSubsystem = this.initGameGraphicsSubsystem();
            game.addSubsystem(gameGraphicsSubsystem);
            const gameNetworkSubsystem = this.initGameNetwokSubsystem();
            game.addSubsystem(gameNetworkSubsystem);
            game.addSubsystem(this.buildGameLogic());
            game.addSubsystem(this.initGameSoundSubsystem());
            return yield game;
        });
    }
}
//# sourceMappingURL=GameBuilder.js.map