import { Scene, Vector } from "excalibur"
import { SpacePaper } from './Background'
import { GameOver } from "./Over"
import { NewGame } from "./StartOver";

export class GameSmover extends Scene {

    constructor(){
        super({
            width: 800,
            height: 600   
        })
    }

    onInitialize(engine){

        console.log(engine.score)
        
        const spacePaper = new SpacePaper();
        this.add(spacePaper);

        const Over = new GameOver();
        this.add(Over);
    
        const StartOverr = new NewGame();
        this.add(StartOverr);
        
    }

}