import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class title extends Actor{
    constructor(){
        super({
            width: Resources.TitleCard.width,
            height: Resources.TitleCard.height
        })
    }

    onInitialize(){
        this.pos = new Vector (400, 260);
        this.scale = new Vector (0.5, 0.5);

        this.graphics.add(Resources.TitleCard.toSprite());
    }
}
