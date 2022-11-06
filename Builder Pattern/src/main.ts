import {GameBuilder } from './GameBuilder';
import {Game} from './Game';

const main = async ()=>{
    const gameBuilder =  new GameBuilder();
    const game: Game =  await gameBuilder.buildGame();
    setInterval(()=>{
        game.render();
        game.update();
    },2000);

}


main();