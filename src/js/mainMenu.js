import { Actor, Scene, Vector, Animation, SpriteSheet, range} from "excalibur";
import { Resources } from "./loader";

export class MainMenu extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {

        let mainMenuSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.MainMenu,
            grid: { rows: 1, columns: 4, spriteWidth: 360, spriteHeight: 180}
        })

        let mainMenuBackground = new Actor({
            pos: new Vector(0, 0),
            anchor: new Vector(0, 0)
        })
        const mainMenuAnimation = Animation.fromSpriteSheet(mainMenuSpriteSheet, range(0, 4), 500)
        mainMenuBackground.graphics.use(mainMenuAnimation)

        this.add(mainMenuBackground)

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