import { Actor, CollisionType, Vector, Shape, Input, Timer, SpriteSheet, range, Animation } from "excalibur";
import {Resources} from './resources.js'; 
import { ohNo } from "./Enemypellet.js";




export class BossL extends Actor { 

    //points = 0;
    timer
    bulletTimer

    constructor() {
        super({
            width: 50,
            height: 60
        })
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.SSLarm,
            grid: { rows: 22, columns: 1, spriteWidth: 64, spriteHeight: 64 }
        })
        const idle = runSheet.sprites[0] 
        const ShootAnim = Animation.fromSpriteSheet(runSheet, range(1, 21), 80)
      

        this.graphics.add("idle", idle)
        this.graphics.add("ShootAnim", ShootAnim)
      

        this.graphics.use(idle)
    
        this.timer = new Timer({
            fcn: () => this.shoot(),
            repeats: true,
            interval:400
        })
        this.bulletTimer = new Timer({
            fcn: () => this.createBullet(),
            repeats: false,
            interval:1800

        })
    }
    

    onInitialize(engine){

        this.body.CollisionType = CollisionType.Active

        this.scale = new Vector (2.0,2.0);

        this.game = engine
        this.game.currentScene.add(this.timer)
        this.game.currentScene.add(this.bulletTimer)

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

        this.graphics.use('ShootAnim')

        this.bulletTimer.start()
    }

    createBullet() {

        const ohNoBullet = new ohNo();
        ohNoBullet.pos = this.pos.clone();
        ohNoBullet.scale = new Vector(0.5,0.5);
        ohNoBullet.vel = new Vector(350, 300);
        this.scene.add(ohNoBullet);
        this.graphics.use('idle')
        this.timer.start();
    }
}