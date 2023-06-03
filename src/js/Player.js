import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import {Resources} from './resources.js';
import { Bullet } from "./playerBullet.js";
import { GameSmover } from "./GameSmover.js";

export class Player extends Actor {

    lives = 1
    damage
    offset
    timer
    cooldown = false
    timer2

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

        this.timer2 = new Timer({
            fcn: () => this.die(),
            repeats: false,
            interval:400
        })
    }

    onActivate(ctx) {

        this.player.pos = new Vector(400, 480);
        this.player.reset();
    }         

    onInitialize(engine){

        this.body.collisionType = CollisionType.Active;

        this.graphics.add('Alive', Resources.Player.toSprite());
        this.graphics.add('Unalive', Resources.Explosion.toSprite());
        this.graphics.use('Alive')
        this.scale = new Vector (0.6,0.6);

        this.game = engine
        this.game.currentScene.add(this.timer)
        this.game.currentScene.add(this.timer2)
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
        this.graphics.use('Unalive');
        this.timer2.start();

    }

    die() {
        if(this.lives < 1) {
            
            this.game.goToScene('gameOver', new GameSmover());
        }
    }

    reset() {
        this.graphics.use('Alive');
        this.lives = 1 
        
    }
}

