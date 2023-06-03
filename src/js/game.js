import '../css/style.css'
import { Actor, Engine, Vector, vec, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Scene1 } from './Gamescene.js'
import { GameSmover } from './GameSmover'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true);
    }

    startGame() {

        this.addScene('scene1', new Scene1());
        this.addScene('gameOver', new GameSmover())
        this.goToScene('scene1');
    }
}

new Game()
