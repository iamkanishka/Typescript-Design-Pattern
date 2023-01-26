import { INITIAL_TEXT } from "./constants.js";
import Context from './context.js';

import { DeletetextCommand, ReplacetextCommand, InserTextCommad  } from "./command.js";

class Client{
    private context! :Context;
    insertCommand! :InserTextCommad;
    deleteCommand! :DeletetextCommand;
    replaceCommand! :ReplacetextCommand;

    constructor(text:string){
        this.context =  new Context(text);
        this.deleteCommand = new DeletetextCommand(this.context);
        this.insertCommand =  new InserTextCommad(this.context);
        this.replaceCommand = new ReplacetextCommand(this.context);

    }

    getText(){
        return this.context.text
    }

}


const main =  ()=>{
    const client = new Client(INITIAL_TEXT);
    const replaceButton =  (sourceWord:string, destWord:string ) =>{
        client.replaceCommand.execute(sourceWord, destWord)
    }

    const insertButton =  (sourceWord:string,position: number) =>{
        client.insertCommand.execute(sourceWord, position)
    }

    const deleteButton =  (sourceWord:string) =>{
        client.deleteCommand.execute(sourceWord)
    }


    setTimeout(() => {
          
        console.log("------------------====----------Before Insert:", client.getText());
        insertButton('I Love Peace....',String(client.getText()).length+1 )
        console.log("------------------====----------After Insert:", client.getText());
        console.log("------------------====--------------------------------=======");
        
        
    }, 1000);

    setTimeout(() => {
          
        console.log("------------------====----------Before Replce:", client.getText());
        replaceButton('dummy','intelligent')
        console.log("------------------====----------After Replace:", client.getText());
        console.log("------------------====--------------------------------=======");
        
        
    }, 5000);

    setTimeout(() => {
          
        console.log("------------------====----------Before Delete:", client.getText());
        deleteButton('I Love Peace....')
        console.log("------------------====----------After Delete:", client.getText());
        console.log("------------------====--------------------------------=======");
        
        
    }, 10000);

}

main();