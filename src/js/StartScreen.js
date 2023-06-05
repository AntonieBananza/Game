import { Scene, Vector } from "excalibur"
import { SpacePaper } from './Background'
import { title } from "./title"
import { GameBegin } from "./Play.js";

export class Startscreen extends Scene {

    constructor(){
        super({
            width: 800,
            height: 600   
        })
    }

    onInitialize(){
        
        const spacePaper = new SpacePaper();
        this.add(spacePaper);

        const Title = new title();
        this.add(Title);
    
        const GameStart = new GameBegin();
        this.add(GameStart);
        
    }

}