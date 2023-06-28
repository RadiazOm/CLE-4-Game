import {Color, DisplayMode, Engine, Label, Physics, Scene, Timer, Vector} from "excalibur"
import { ResourceLoader, Resources } from "../loader.js";
import { Cursor} from "./cursor.js";
import { BackgroundCatcher } from "./background.js";
import { GooseFloating } from "./floatinggoose.js";
import { ScoreTracker } from "./UIgoosecatcher.js";
import gooseMusic from "../../sounds/bgm_action_3.mp3"
import { UI } from "../UI.js";

export class GooseCatcher extends Scene {

    cursors = [];
    scoreTracker = [];
    goose = [];
    gameMusic = new Audio(gooseMusic)
    gameOver = true
    
    constructor() {
        super();
    }

    onActivate() {
        this.gameMusic.loop = true
        this.gameMusic.play()
        this.countdown()
    }

    onDeactivate() {
        this.gameMusic.pause()
    }

    onInitialize() {
        Physics.useRealisticPhysics()

        let backgroundCatcher = new BackgroundCatcher();
        this.add(backgroundCatcher);


        for( let i = 0; i<35; i++ ){
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

    beginGame() {
        this.gameOver = false
    }

    countdown() {
        let time = 3

        const ui = new UI()

        let label = new Label({
            text: time.toString(),
            pos: new Vector(this.engine.screen.drawWidth / 2 - 16, this.engine.screen.drawHeight / 2 - 16),
            font: ui.spriteFont
        })
        this.add(label)
        const timer = new Timer({
            fcn: () => {
                if (time <= 1) {
                    this.beginGame()
                    timer.cancel()
                    label.kill()
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


    Button0(player){
        this.cursors[player - 1].press()
    }
}

