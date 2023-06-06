import { Actor, Engine, Vector, vec, Scene, ScreenElement, Label, Font, FontUnit, Color, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class UI extends ScreenElement {

    
    scoreText
    timer
    game

    constructor() {
        super({ x: 10, y: 10 })

        this.timer = new Timer({
            fcn: () => this.updateScore(),
            repeats: true,
            interval:10
        })
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: 'Score: 0',
            font: new Font({
                unit: FontUnit.Px,
                family: 'cursive',
                size: 28,
                color: Color.Yellow,
            }),
            pos: new Vector(50, 550)
        })
        this.addChild(this.scoreText)

        this.game = engine
        this.game.currentScene.add(this.timer)

        this.timer.start();

    }

    updateScore(engine) {
        this.scoreText.text = `Score: ${this.game.score}`
    }
}