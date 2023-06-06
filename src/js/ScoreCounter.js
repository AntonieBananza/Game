import { Actor, Engine, Vector, vec, Scene, ScreenElement, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Game } from "./game.js"

export class UI extends ScreenElement {

    scoreUI = Game.score
    scoreText

    constructor() {
        super({ x: 10, y: 10 })
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
    }

    updateScore() {
        this.scoreUI++
        this.scoreText.text = `Score: ${this.scoreUI}`
    }
}