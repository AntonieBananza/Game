import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Scene1 } from "./Gamescene.js";

export class GameBegin extends Actor {

    constructor(){
        super({
            width: Resources.StartGame.width,
            height: Resources.StartGame.height
        })
    }

    onInitialize(engine){

        this.pos = new Vector (400, 380);
        this.scale = new Vector (0.4, 0.4);

        this.graphics.add(Resources.StartGame.toSprite());
        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;

        this.on("pointerup", (event) =>  engine.goToScene('scene1'))

    }
}