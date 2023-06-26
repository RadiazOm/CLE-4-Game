import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "./loader";

export class MainMenu extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {

        let title = new Actor({
            pos: new Vector(engine.screen.drawWidth / 2, 50),
        })
        title.graphics.use(Resources.Title.toSprite())
        this.add(title)

        let button = new Actor({
            anchor: new Vector(0.5,0.5),
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