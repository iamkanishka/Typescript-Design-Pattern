import {SubSystem} from './SubSystem'

export class GameNetwokSubsystem implements SubSystem{
    name: string
    constructor(n:string){
        this.name=n;
    }

    execute(): void {
        console.log(`Executing ${this.name} Subsytem`);
    }
}
