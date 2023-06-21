import {Color, DisplayMode, Engine, Physics, Scene} from "excalibur"
import { ResourceLoader, Resources } from "../loader.js";
import { Cursor} from "./cursor.js";
import { BackgroundCatcher } from "./background.js";
import { GooseFloating } from "./floatinggoose.js";
import { ScoreTracker } from "./UIgoosecatcher.js";

export class GooseCatcher extends Scene {

    cursors = [];
    scoreTracker = [];
    goose = [];
    gameMusic = Resources.GooseMusic
    
    constructor() {
        super();
    }

    onActivate() {
        this.gameMusic.loop = true
        this.gameMusic.play()
    }

    onDeactivate() {
        this.gameMusic.stop()
    }

    onInitialize() {
        Physics.useRealisticPhysics()

        let backgroundCatcher = new BackgroundCatcher();
        this.add(backgroundCatcher);


        for( let i = 0; i<35; i++ ){

            console.log("ganzen gespawned")
            let goose = new GooseFloating();
            this.add(goose);
            this.goose.push(goose)
                
        }
        for(let i = 1; i < 5; i++) {
            let cursor = new Cursor(i)
            this.add(cursor)
            this.cursors.push(cursor)
        }

        for( let i = 0; i < 4; i++){
            const scoreTracker = new ScoreTracker(i+1)
            this.add(scoreTracker)
            this.scoreTracker.push(scoreTracker) 
        }
    
    }

    Button0(player){
        this.cursors[player - 1].press()
    }
}

