import { Actor, Vector, Random, CollisionType, Shape } from 'excalibur'
import { Resources } from './resources.js'

import { BossHead } from './Boss.js';
import { BossL } from './Bossleft.js';
import { BossR } from './Bossright.js';


export class Bullet extends Actor {

    points = 0

    constructor(){

        super({
            width: Resources.Plaser.width,
            height: Resources.Plaser.height
        })
    }

    onInitialize(){

        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = false;

        this.graphics.add(Resources.Plaser.toSprite());
        this.scale = new Vector(0.5,0.5);
        this.vel = new Vector(0, -600);

        this.on("collisionstart", (event) => this.hit(event));
    }

    hit(event) {

        if(event.other instanceof BossHead) {
         
            this.kill();
            this.points + 10
        }

        if(event.other instanceof BossL) {
      
            this.kill();
            this.points + 10
        }

        if(event.other instanceof BossR) {
   
            this.kill(); 
            this.points + 10
        }
    }
}