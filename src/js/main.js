import { Actor, DisplayMode, Engine, Label, Vector, Timer } from "excalibur"
import { ResourceLoader, Resources } from "./loader.js";
import { MainController } from "./controller.js";
import { HertenSleper } from "./HertenSleper/hertensleper.js";
import { UI } from "./HertenSleper/UI.js"
import { GooseCatcher } from "./goosecatcher/goosecatcherMain.js";


export class Game extends Engine {

    mainController;
    begin = false;
    pressed = false;

    constructor() {
        // The width and height will be in a 16:9 format, this is suvject to change
        // maxFps and displaymode are for performance and sizing requirements
        super({
            width: 360,
            height: 180,
            maxFps: 144,
            displayMode: DisplayMode.FitScreen
        });
        // Antialiasing set to false otherwise pixelart will look blurry
        this.setAntialiasing(false)
        // If something isnt going so well you can turn this to true and you will be able to see all sorts of cool information
        this.showDebug(false)
        this.start(ResourceLoader).then(() => this.startGame());

        document.addEventListener('keydown', (e) => {if (e.key === ' ') {
                this.pressed = true
            }
        })
    }

    startGame() {
        // TODO: Scene manager
        this.mainController = new MainController(this)
        this.add(this.mainController)

        this.addScene('goosecatcher', new GooseCatcher())

        const ui = new UI()

        const label = new Label({
            text: `connect your
controllers now!`,
            pos: new Vector(this.screen.drawWidth / 2, this.screen.drawHeight / 2),
            font: ui.spriteFont
        })
        label.anchor = new Vector(0.5,0.5)
        this.add(label)
    }



    onPreUpdate() {
        if (typeof this.mainController.player1 === "object" && this.begin == false && this.pressed == true) {
            this.begin = true
            this.countdown()
        }
        
        this.mainController.update()
    }

    countdown() {
        let time = 3

        const ui = new UI()

        let label = new Label({
            text: time.toString(),
            pos: new Vector(this.screen.drawWidth / 2, this.screen.drawHeight / 2 + 16),
            font: ui.spriteFont
        })
        this.add(label)
        const timer = new Timer({
            fcn: () => {
                if (time <= 0) {
                    this.goToScene('goosecatcher')
                    timer.cancel()
                } else {
                    time -= 1
                    label.text = time.toString()
                }
            },
            repeats: true,
            interval: 1000
        })
        this.add(timer)
        timer.start()
    }
}

new Game()