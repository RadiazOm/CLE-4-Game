import { Scene, SpriteSheet, Timer, Vector, Actor, range, Animation, Color, Label } from "excalibur"
import { Resources } from "./loader";
import { UI } from "./UI";

export class Loading extends Scene {

    timer;
    engine;
    gameScene;

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.engine = engine
        this.timer = new Timer({
            fcn: () => {this.finishLoading()},
            interval: 3000,
            repeats: false
        })

        const ui = new UI()
        
        let label = new Label({
            pos: new Vector(this.engine.drawWidth / 2, this.engine.drawHeight / 2 + 40),
            text: 'Loading...',
            font: ui.spriteFont
        })
        label.anchor = new Vector(0.5,0.5)


        let gooseSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.AnimatingGoose,
            grid: { rows: 1, columns: 4, spriteWidth: 24, spriteHeight: 33}
        })

        let animatingGoose = new Actor({
            pos: new Vector(this.engine.drawWidth / 2, this.engine.drawHeight / 2)
        })
        const dance = Animation.fromSpriteSheet(gooseSpriteSheet, range(0, 4), 100)
        animatingGoose.graphics.use(dance)

        this.add(label)
        this.add(animatingGoose)
        this.add(this.timer)
    }

    onActivate(data) {
        this.engine.backgroundColor = new Color(0,0,0)
        this.gameScene = data.data;
        this.timer.start()
    }

    onDeactivate() {
        this.timer.stop()
    }

    finishLoading() {
        this.engine.goToScene(this.gameScene)
    }
}