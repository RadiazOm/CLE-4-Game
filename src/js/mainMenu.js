import { Actor, Scene, Vector } from "excalibur";

export class MainMenu extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {

        let button = new Actor({
            anchor: new Vector(0,0),
            pos: new Vector(0,0),
            width: engine.screen.drawWidth,
            height: engine.screen.drawHeight
        })

        this.add(button)
        button.on('pointerup', () => {
            engine.goToScene('characterselection')
        })
    }
}