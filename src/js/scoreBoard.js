import { Scene, Vector, Timer, Label } from "excalibur";
import { newText } from "./text";
import { UI } from "./UI";
import { Resources } from "./loader";
import endMusic from "../sounds/8bitvictory.ogg"


export class ScoreBoard extends Scene {

    labels = [];
    starting = false;
    engine;
    scores = [0,0,0,0];
    playerFont;
    final = false;
    scoreMusic = new Audio(endMusic)

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.engine = engine
        for (let i = 0; i < 4; i++) {
            let label = new newText(`${this.getPlayerText(i + 1)}player${i + 1}:0`, new Vector(this.engine.screen.drawWidth / 2, 20 + i * 20))
            this.labels.push(label)
            this.add(label)
        }
        let ui = new UI()
        let label = new Label({
            pos: new Vector(this.engine.screen.drawWidth / 2 - 85, 160),
            text: 'P1: press ) to continue',
            font: ui.tinyFont
        })
        this.add(label)
    }

    onDeactivate() {
        this.scoreMusic.pause()
    }

    onActivate(data) {
        this.scoreMusic.loop = true
        this.scoreMusic.play()
        this.starting = false
        let positions = data.data
        if (positions !== null) {
            this.givePoints(positions)
            for (let i = 0; i < 4; i++) {
                this.labels[i].changeText(`${this.getPlayerText(i + 1)}player${i + 1}:${this.scores[i]}`)
            }
        }
        if (this.engine.scenesRemaining.length == 0) {
            this.engine.goToScene('endscene', this.scores)
        }
    }

    Button1(player) {
        if (player == 1 && this.starting == false) {
            this.countdown()
            this.starting = true
        }
    }

    givePoints(positions) {
        for (let i = 0; i < 4; i++) {
            switch (positions[i]) {
                case 1:
                    this.scores[i] += 7
                    break;
                case 2:
                    this.scores[i] += 5
                    break;
                case 3:
                    this.scores[i] += 3
                    break;
                case 4:
                    this.scores[i] += 1
                    break;
            }
        }
    }

    
    getPlayerText(player) {
        let playerFont
        switch (this.engine.getColour(player)) {
            case 0:
                playerFont = '[' 
                break;
            case 1:
                playerFont = ']' 
                break;
            case 2:
                playerFont = '{'
                break; 
            case 3:
                playerFont = '}'  
                break;   
        }
        return playerFont;
    }

    countdown() {
        let time = 3

        const ui = new UI()

        let label = new Label({
            text: time.toString(),
            pos: new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2 + 40),
            font: ui.spriteFont
        })
        label.anchor = new Vector(0.5,0.5)
        this.add(label)
        const timer = new Timer({
            fcn: () => {
                if (time <= 0) {
                    this.engine.goToGame()
                    timer.cancel()
                    this.remove(timer)
                    label.kill()
                } else {
                    Resources.SelectSound.play()
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