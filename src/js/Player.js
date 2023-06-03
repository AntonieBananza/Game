import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import {Resources} from './resources.js';
import { Bullet } from "./playerBullet.js";

export class Player extends Actor {

    lives
    damage
    offset

    constructor(){

        super({
            height: Resources.Player.height,
            width:  Resources.Player.width
        })
    }

    onInitialize(){

        this.body.collisionType = CollisionType.Active;

        this.graphics.add(Resources.Player.toSprite());
        this.scale = new Vector (0.6,0.6)
    }

    onPreUpdate(engine) {

        let xspeed = 0;
        let yspeed = 0;
        
        if(engine.input.keyboard.isHeld(Input.Keys.D)) {
            xspeed = 250;
        }

        if(engine.input.keyboard.isHeld(Input.Keys.A)) {
            xspeed = -250;
        }

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.attack();
            console.log('pew')
        }

        this.vel = new Vector(xspeed, yspeed)
    }   

    attack() {

        this.pos = new Vector(this.pos.x , 445)

        const plaser = new Bullet();
        plaser.pos = this.pos.clone();
        this.scene.add(plaser);

    }
}

