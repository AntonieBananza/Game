import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import {Resources} from './resources.js';
import { Bullet } from "./playerBullet.js";

export class Player extends Actor {

    lives = 1
    damage
    offset
    timer
    cooldown = false

    constructor(){

        super({
            height: Resources.Player.height,
            width:  Resources.Player.width
        })

        this.timer = new Timer({
            fcn: () => this.onCooldown(),
            repeats: false,
            interval:300
        })
    }

    onInitialize(engine){

        this.body.collisionType = CollisionType.Active;

        this.graphics.add('Alive', Resources.Player.toSprite());
        this.graphics.add('Unalive', Resources.Explosion.toSprite());
        this.graphics.use('Alive')
        this.scale = new Vector (0.6,0.6);

        this.game = engine
        this.game.currentScene.add(this.timer)
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

    onCooldown(){
        this.cooldown = false

    }

    attack() {
        if(this.cooldown === false){
        this.pos = new Vector(this.pos.x , 445);

        const plaser = new Bullet();
        plaser.pos = this.pos.clone();
        this.scene.add(plaser);
        this.cooldown = true
        this.timer.start();
        }
        
    }

    Boom () {

        this.lives -= 1 

        if(this.lives < 1) {
            this.graphics.use('Unalive');
        }

    }
}

