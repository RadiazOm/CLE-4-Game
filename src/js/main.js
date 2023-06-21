import { DisplayMode, Engine } from "excalibur"
import { ResourceLoader } from "./loader.js";
import { MainController } from "./controller.js";
import { PlasRenner } from "./plasrenner.js";


export class Game extends Engine {

    mainController;

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
    }

    startGame() {
        // TODO: Scene manager
        console.log('yes')
        this.mainController = new MainController(this)
        this.add(this.mainController)

        this.addScene('plasrenner', new PlasRenner())

        this.goToScene('plasrenner')

        
    }

    onPreUpdate() {
        this.mainController.update()
    }
}

new Game()