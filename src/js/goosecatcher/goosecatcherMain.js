import {DisplayMode, Engine} from "excalibur"
import { ResourceLoader, Resources } from "../loader.js";
import { GooseFurkan } from "./goose.js";

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
    let goose1 = new GooseFurkan(30, 20);
    let goose2 = new GooseFurkan(60, 40);
    let goose3 = new GooseFurkan(90, 60);
    let goose4 = new GooseFurkan(120, 80);

    this.add(goose1);
    this.add(goose2);
    this.add(goose3);
    this.add(goose4);
    }

}

new Game()