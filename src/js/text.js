import { Label, Vector } from "excalibur"
import { UI } from "./UI"

export class newText extends UI {

    label;
    text;
    pos;

    constructor(text, pos) {
        super()
        this.text = text
        this.pos = pos
    }

    onInitialize() {
        this.label = new Label({
            text: this.text,
            pos: this.pos,
            font: this.spriteFont,
            scale: new Vector(0.5,0.5)
        })
        this.label.anchor = new Vector(0.5,0.5)
        this.addChild(this.label)
    }

    changeText(text) {
        this.label.text = text
    }
}