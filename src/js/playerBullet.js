import { Actor, Vector, Random, CollisionType, Shape, Scene } from 'excalibur'
import { Resources } from './resources.js'

import { BossHead } from './Boss.js';
import { BossL } from './Bossleft.js';
import { BossR } from './Bossright.js';
import { UI } from './ScoreCounter.js';



export class Bullet extends Actor {

    game

    constructor(){

        super({
            width: 8,
            height: Resources.Plaser.height
        })
    }

    onInitialize(engine){

        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = false;

        this.game = engine
        this.graphics.add(Resources.Plaser.toSprite());
        this.scale = new Vector(0.2,0.4);
        this.vel = new Vector(0, -750);

        this.on("collisionstart", (event) => this.hit(event));
    }

    hit(event) {

        if(event.other instanceof BossHead) {
         
            this.kill();
            this.game.score += 1000
            event.other.getHit()
            
        }

        if(event.other instanceof BossL) {
      
            this.kill();
            this.game.score += 750
        }

        if(event.other instanceof BossR) {
   
            this.kill(); 
            this.game.score += 750
        }
     }
     
}