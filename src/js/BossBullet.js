import { Actor, Vector, Random, CollisionType, Shape } from 'excalibur'
import { Resources } from './resources.js'

import { Player } from './Player.js'
import { Bullet } from './playerBullet.js'
import { BossHead } from './Boss.js'


export class BossOhNo extends Actor {
   

    constructor(){

        super({
            width: 10,
            height: 35
        })
    }

    onInitialize(){

        this.body.collisionType = CollisionType.Passive
        this.body.useGravity = false;

        this.graphics.add(Resources.Plaser.toSprite());
        
        

        this.on("collisionstart", (event) => this.ShootShoot(event));
    }

    ShootShoot(event) {

        if(event.other instanceof Player) {
            event.other.Boom()
            this.kill()
        }
        if(event.other instanceof Bullet) {
            event.other.kill()
            
        }

    }


}