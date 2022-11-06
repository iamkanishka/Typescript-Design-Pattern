import {SubSystem} from './SubSystem'

export class GameGraphicsSubsystem implements SubSystem{
    name: string
    constructor(n:string){
        this.name=n;
    }

    execute(): void {
        console.log(`Executing ${this.name} Subsytem`);
    }
}
