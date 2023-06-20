import {Color, DisplayMode, Engine} from "excalibur"
import { ResourceLoader, Resources } from "../loader.js";
import { CursorFurkan } from "./cursor.js";
import { BackgroundCatcher } from "./background.js";
import { GooseFloating } from "./floatinggoose.js";

export class Game extends Engine {

    
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
        this.debug.transform.showAll = false
        this.start(ResourceLoader).then(() => this.startGame());
        
    }

    startGame() {

    let cursor1 = new CursorFurkan(10, 10);
    let cursor2 = new CursorFurkan(350, 10);
    let cursor3 = new CursorFurkan(10, 170);
    let cursor4 = new CursorFurkan(350, 170);

    let backgroundCatcher = new BackgroundCatcher();
    this.add(backgroundCatcher);


    let floatingGoose = new GooseFloating();
    this.add(floatingGoose);

    for( let i = 0; i<30; i++ ){

        console.log("ganzen gespawned")
        let goose = new GooseFloating();
        this.add(goose);
            
    }

    this.add(cursor1);
    this.add(cursor2);
    this.add(cursor3);
    this.add(cursor4);
    
    }
}

new Game()