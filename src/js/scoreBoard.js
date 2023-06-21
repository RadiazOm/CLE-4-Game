import { Scene, Vector, Timer, Label } from "excalibur";
import { newText } from "./text";
import { UI } from "./UI";
import { Resources } from "./loader";

export class ScoreBoard extends Scene {

    labels = [];
    engine;
    scores = [0,0,0,0];
    final = false;
    scoreMusic = Resources.EndMusic

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.engine = engine
        for (let i = 0; i < 4; i++) {
            let label = new newText(`player${i + 1}:0`, new Vector(this.engine.screen.drawWidth / 2, 50 + i * 20))
            this.labels.push(label)
            this.add(label)
        }
    }

    onDeactivate() {
        this.scoreMusic.stop()
    }

    onActivate(data) {
        this.scoreMusic.loop = true
        this.scoreMusic.play()
        let player = data.data
        if (player !== null) {
            this.scores[player - 1]++
            this.labels[player - 1].changeText(`player${player}:${this.scores[player - 1]}`)
        }
        if (this.engine.scenesRemaining.length == 0) {
            let highestScore = 0
            let playerwon = null
            for (const score of this.scores) {
                if (highestScore < score) {
                    highestScore = score
                    playerwon = this.scores.indexOf(score)
                }
            }
            let label = new newText(`player${playerwon + 1} won!`, new Vector(this.engine.screen.drawWidth / 2, 130))
            this.add(label)
            this.final = true
        }
    }

    Button1(player) {
        if (player == 1 && this.final == false) {
            this.countdown()
        }
    }

    countdown() {
        let time = 3

        const ui = new UI()

        let label = new Label({
            text: time.toString(),
            pos: new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2 + 16),
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