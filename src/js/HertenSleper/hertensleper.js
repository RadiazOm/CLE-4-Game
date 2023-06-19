import { Actor, Label, Physics, Repeat, Scene, Timer, Vector } from "excalibur";
import { Resources } from "../loader";
import { Cursor } from "./cursor";
import { Deer } from "./deer";
import { Cage } from "./cage";
import { CageZone } from "./cageZone";
import { ScoreTracker } from "./scoreTracker";
import { GameTimer } from "./timer";
import { UI } from "../UI";

export class HertenSleper extends Scene {

    cursors = [];
    deer = [];
    scoreTrackers = [];
    timer;
    time = 25;
    engine;
    gameOver = false;

    constructor(){
        super()
        Physics.useArcadePhysics()
    }

    onInitialize(engine) {
        this.engine = engine
        let background = new Actor({
            anchor: new Vector(0,0)
        })
        background.graphics.use(Resources.hertMap.toSprite())
        this.add(background)

        for (let x = 0; x < 370; x+= 360 - Resources.Cage.width * 1.2) {
            for (let y = 0; y < 190; y+= 180 - Resources.Cage.height * 1.2) {
                let cage = new Cage()
                cage.pos.x = x
                cage.pos.y = y
                this.add(cage)
                console.log(cage.pos.x + ' ' + cage.pos.y)
            }
        }

        for (let i = 0; i < 4; i++) {
            let cageZone = new CageZone(i)
            this.add(cageZone)
        }

        for (let i = 0; i < 10; i++) {
            let deer = new Deer()
            this.add(deer)
            this.deer.push(deer)
        }

        for(let i = 1; i < 5; i++) {
            let cursor = new Cursor(i, this.deer)
            this.add(cursor)
            this.cursors.push(cursor)
        }

        for(let i = 0; i < 4; i++) {
            let scoreTracker = new ScoreTracker(i + 1)
            this.add(scoreTracker)
            this.scoreTrackers.push(scoreTracker)
        }

        this.timer = new GameTimer(this.time)
        this.add(this.timer)


        const timer = new Timer({
            fcn: () => {
                if (this.time <= 0) {
                    this.gameover()
                    timer.cancel()
                } else {
                    this.time -= 1
                    this.timer.updateTime(this.time)
                }
            },
            repeats: true,
            interval: 1000
        })
        this.add(timer)
        timer.start()
    }



    Button0(player) {
        this.cursors[player - 1].grab()
        // switch (player) {
        //     case 1:
        //         this.cursors[0].grab()
        //         break;
        //     case 1:
        //         this.cursors[1].grab()
        //         break;
        // }
    }

    gameover() {
        this.gameOver = true
        for (const deer of this.deer) {
            deer.vel = new Vector(0,0)
        }
        for (const cursor of this.cursors) {
            cursor.vel = new Vector(0,0)
        }
        let highestScore = 0
        let playerwon = null
        for (const scoretracker of this.scoreTrackers) {
            if (highestScore < scoretracker.scoreNumber) {
                highestScore = scoretracker.scoreNumber
                playerwon = scoretracker.player
            }
        }
        const ui = new UI()
        let label = new Label({
            pos: new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2),
            font: ui.spriteFont
            })
            label.anchor = new Vector(0.5,0.5)
        if (playerwon == null) {
            label.text = 'no one won boo'
        } else {
            label.text = `player${playerwon} won!`
        }
        this.add(label)
    }
}