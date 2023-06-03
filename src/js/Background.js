import { Actor, Engine, Vector, Label, Color, Font, FontUnit,  TileMap, DisplayMode, FrameStats, GraphicsGroup} from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class SpacePaper extends Actor{

    offset

    constructor() {
        super()
        let scrollImage = Resources.Background.toSprite()
        this.anchor = new Vector(0, 0)
        this.offset = scrollImage.height

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: scrollImage,
                    pos: new Vector(0, 0)
                },
                {
                    graphic: scrollImage,
                    pos: new Vector(0, scrollImage.height)
                }
            ]
        })

        this.graphics.add(group)
        this.pos = new Vector(0, -750)
        this.vel = new Vector(0, 100)
    }

    onPostUpdate() {
        //console.log(this.pos.y)
        if (this.pos.y > 0) {
             this.pos = new Vector(0, -2000)
        }
    }
}