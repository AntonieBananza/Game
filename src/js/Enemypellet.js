import { Actor, Vector, Random, CollisionType, Shape } from 'excalibur'
import { Resources } from './resources.js'

import { Player } from './Player.js'
import { Bullet } from './playerBullet.js'


export class ohNo extends Actor {

    points = 0

    constructor(){

        super({
            width: Resources.BossPellet.width,
            height: Resources.BossPellet.height
        })
    }

    onInitialize(){

        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = false;

        this.graphics.add(Resources.BossPellet.toSprite());
        
        

        this.on("collisionstart", (event) => this.ohShoot(event));
    }

    ohShoot(event) {

        if(event.other instanceof Player) {
            event.other.Boom()
            this.kill()
        }
        if(event.other instanceof Bullet) {
            this.kill()
            event.other.kill()
        }
    }

}