import { Actor, DisplayMode, Engine, Label, Vector, Timer } from "excalibur"
import { ResourceLoader, Resources } from "./loader.js";
import { MainController } from "./controller.js";
import { Afvalverwijderaar } from "./afvalverwijderaar/afvalverwijderaar.js";
import { HertenSleper } from "./HertenSleper/hertensleper.js";
import { UI } from "./UI.js"
import { characterSelection } from "./characterSelection.js";


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
        console.log('yes')
        this.mainController = new MainController(this)
        this.add(this.mainController)

        this.addScene('afvalverwijderen', new Afvalverwijderaar())
        this.goToScene('afvalverwijderen')
    }
}

new Game()