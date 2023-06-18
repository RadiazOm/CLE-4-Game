import {DisplayMode, Engine} from "excalibur"
import { ResourceLoader, Resources } from "../loader.js";
import { CursorFurkan } from "./cursor.js";
import { BackgroundCatcher } from "./background.js";

export class Game extends Engine {

    constructor() {
        // The width and height will be in a 16:9 format, this is suvject to change
        // maxFps and displaymode are for performance and sizing requirements
        super({
            width: 320,
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
    let cursor1 = new CursorFurkan(30, 20);
    let cursor2 = new CursorFurkan(60, 40);
    let cursor3 = new CursorFurkan(90, 60);
    let cursor4 = new CursorFurkan(120, 80);

    this.add(cursor1);
    this.add(cursor2);
    this.add(cursor3);
    this.add(cursor4);

    let backgroundCatcher = new BackgroundCatcher();
    this.add(backgroundCatcher);
    }

}

new Game()