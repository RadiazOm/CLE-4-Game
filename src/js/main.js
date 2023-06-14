import { DisplayMode, Engine } from "excalibur"
import { ResourceLoader } from "./loader";


export class Game extends Engine {
    constructor() {
        // The width and height will be in a 16:9 format, this is suvject to change
        // maxFps and displaymode are for performance and sizing requirements
        super({
            width: 1600,
            height: 900,
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
    }
}