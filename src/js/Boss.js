import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import {Resources} from './resources.js';
import { BossOhNo } from "./BossBullet.js"; 

export class BossHead extends Actor { 

    //points = 0;
    game;
    timer
    hitTimer
  

    constructor() {
        super({
            width: Resources.BossHead.width,
            height: Resources.BossHead.height   
        })
        this.timer = new Timer({
            fcn: () => this.BossShot(),
            repeats: true,
            interval:5000
        })
        this.hitTimer = new Timer({
            fcn: () => this.returnHit(),
            repeats: false,
            interval:200
        })
    }  

    onInitialize(engine){

        this.body.CollisionType = CollisionType.Fixed

        this.graphics.add('normal', Resources.BossHead.toSprite());
        this.graphics.add('hit', Resources.HitBoss.toSprite());

        this.graphics.use('normal')

        this.scale = new Vector (3.0,3.0);

        this.game = engine
        this.game.currentScene.add(this.timer)
        this.game.currentScene.add(this.hitTimer)

        this.timer.start();



    }

    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }

    getHit() {

        this.graphics.use('hit')
        this.hitTimer.start();
    
    }

    returnHit() {

        this.graphics.use('normal')
    }

    BossShot() {
        const ohNoBullet = new BossOhNo();
        ohNoBullet.pos = this.pos.clone();
        ohNoBullet.scale = new Vector(0.1,0.5);
        ohNoBullet.vel = new Vector(0, 400);
        this.scene.add(ohNoBullet);  
    }
}

