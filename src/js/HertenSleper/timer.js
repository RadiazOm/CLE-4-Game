import { Label, Vector } from "excalibur";
import { UI } from "./UI";

export class GameTimer extends UI {

    time;
    label

    constructor(time) {
        super()
        this.time = time
    }

    onInitialize(engine) {
        this.label = new Label({
            text: `${this.time}s`,
            pos: new Vector(engine.screen.drawWidth / 2, 20),
            font: this.spriteFont
        })

        this.label.anchor = new Vector(0.5,0.5)

        this.addChild(this.label)
    }

    updateTime(time) {
        this.label.text = `${time}s`
    }
}