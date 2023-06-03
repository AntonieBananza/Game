import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Scene1 } from "./Gamescene.js";

export class NewGame extends Actor {

    constructor(){
        super({
            width: Resources.StartOver.width,
            height: Resources.StartOver.height
        })
    }

    onInitialize(engine){

        this.pos = new Vector (400, 480);
        this.scale = new Vector (0.5, 0.5);

        this.graphics.add(Resources.StartOver.toSprite());

        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;

        this.on("pointerup", (event) =>  engine.goToScene('scene1'))

    }

}