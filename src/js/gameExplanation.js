import ExplanationMusic from "../sounds/happy.mp3"
import { UI } from "./UI";
import { Scene, Vector, Timer, Label } from "excalibur"
import { Resources } from "./loader";

export class Explanation extends Scene {

    playersready = [null, null, null, null];
    checkmarks = []
    scene;
    engine;
    starting = false;
    explanationMusic = new Audio(ExplanationMusic)

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.engine = engine
        let ui = new UI()

        for(let i = 0; i < 4; i++) {
            let label = new Label({
                pos: new Vector(250 + i * 20, 140),
                text: `${this.getPlayerText(i + 1)}`,
                font: ui.spriteFont
            })
            this.add(label)
        }

        document.addEventListener('keyup', (e) => {
            if (e.key == 'w'){
                this.countdown()
            }
        })
    }

    onActivate(data) {
        this.starting = false
        this.explanationMusic.play()
        this.playersready = [null, null, null, null];
        for (const label of this.checkmarks) {
            label.kill()
        }
        this.checkmarks = []
        this.scene = data.data
        console.log(data)
    }

    onDeactivate() {
        this.explanationMusic.pause()
    }

    onPreUpdate() {
        let begin = true
        for(const ready of this.playersready) {
            if (ready == null) {
                begin = false
            }
        }
        if(begin && this.starting == false) {
            this.countdown()
            this.starting = true
        }
    }

    Button0(player) {
        this.readyPlayer(player)
    }

    readyPlayer(player) {
        if (this.playersready[player - 1]) {
            return;
        }
        Resources.Ready.play()
        this.playersready[player - 1] = true
        console.log('ready!')
        let ui = new UI()
        let label = new Label({
            pos: new Vector(250 + (player - 1) * 20, 140),
            text: '^',
            font: ui.spriteFont
        })
        this.add(label)
        this.checkmarks.push(label)
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
            pos: new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2 + 16),
            font: ui.spriteFont
        })
        label.anchor = new Vector(0.5,0.5)
        this.add(label)
        const timer = new Timer({
            fcn: () => {
                if (time <= 0) {
                    this.engine.goToScene('loading', this.scene)
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
