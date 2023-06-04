import { Actor, Vector, Random, CollisionType, Shape, Scene } from 'excalibur'
import { Resources } from './resources.js'

import { BossHead } from './Boss.js';
import { BossL } from './Bossleft.js';
import { BossR } from './Bossright.js';



export class Bullet extends Actor {

    game

    constructor(){

        super({
            width: Resources.Plaser.width,
            height: Resources.Plaser.height
        })
    }

    onInitialize(engine){

        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = false;

        this.game = engine
        this.graphics.add(Resources.Plaser.toSprite());
        this.scale = new Vector(0.35,0.4);
        this.vel = new Vector(0, -600);

        this.on("collisionstart", (event) => this.hit(event));
    }

    hit(event) {

        if(event.other instanceof BossHead) {
         
            this.kill();
            this.Game.score += 1000
        }

        if(event.other instanceof BossL) {
      
            this.kill();
            this.Game.score += 10
        }

        if(event.other instanceof BossR) {
   
            this.kill(); 
            this.Game.score += 10
        }
     }
}