import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import {Resources} from './resources.js'; 
import { ohNo } from "./Enemypellet.js";




export class BossL extends Actor { 

    //points = 0;
    timer

    constructor() {
        super({
            width: Resources.BossL.width,
            height: Resources.BossL.height   
        })
        this.timer = new Timer({
            fcn: () => this.shoot(),
            repeats: true,
            interval:1400
        })
    }  

    onInitialize(engine){

        this.body.CollisionType = CollisionType.Active

        this.graphics.add(Resources.BossL.toSprite());
        this.scale = new Vector (1.2,1.2);

        this.game = engine
        this.game.currentScene.add(this.timer)

        this.timer.start();

        this.actions.repeatForever((ctx) => {

            ctx.moveBy(-100, 0, 50)

            ctx.moveBy(100, 0, 50)

        })

        
    console.log("hi");

    }
    
    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }

    shoot() {
        const ohNoBullet = new ohNo();
        ohNoBullet.scale = new Vector(0.5,0.5);
        ohNoBullet.pos = this.pos.clone();
        ohNoBullet.vel = new Vector(200, 300);
        this.scene.add(ohNoBullet);
    }
}