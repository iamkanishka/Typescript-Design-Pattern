import { GameGraphicsSubsystem } from './GameGraphicsSubsystem';
import { GameNetwokSubsystem } from './GameNetwokSubsystem';
import { GameLogicsSubsystem } from './GameLogicsSubsystem';
import { GameSoundSubsystem } from './GameSoundSubsystem';

import { Gameworld } from './Gameworld';

import { Game } from './Game';

export class GameBuilder {

    constructor() { }
    private initGameGraphicsSubsystem(): GameGraphicsSubsystem {
        return new GameGraphicsSubsystem("GPU Init");
    }
    private initGameNetwokSubsystem(): GameNetwokSubsystem {
        return new GameNetwokSubsystem("Initializing TCP/IP Stack....");
    }

    private buildGameWorld(gm: string, splm: string): Gameworld {
        return new Gameworld(gm, splm)
    }

    private buildGameLogic(): GameLogicsSubsystem {
        return new GameLogicsSubsystem("Loading Game Logic Module...");
    }

    private initGameSoundSubsystem(): GameSoundSubsystem {
        return new GameSoundSubsystem("Initializing Game Sound System...");
    }

    async buildGame(): Promise<Game> {
        const gameworld =  this.buildGameWorld("Fighter 2","Neural Network Logic")
        const game = new Game(gameworld);

        const gameGraphicsSubsystem =  this.initGameGraphicsSubsystem();
        game.addSubsystem(gameGraphicsSubsystem);

        const gameNetworkSubsystem =  this.initGameNetwokSubsystem();
        game.addSubsystem(gameNetworkSubsystem);

        game.addSubsystem(this.buildGameLogic());
        game.addSubsystem(this.initGameSoundSubsystem());
        

        return await game;
    }
}
