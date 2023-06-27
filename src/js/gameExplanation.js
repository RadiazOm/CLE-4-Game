import ExplanationMusic from "../sounds/happy.mp3"
import { UI } from "./UI";
import { Scene, Vector, Timer, Label, Actor } from "excalibur"
import { Resources } from "./loader";

export class Explanation extends Scene {

    playersready = [null, null, null, null];
    checkmarks = [];
    labels = [];
    scene;
    engine;
    starting = false;
    explanationMusic = new Audio(ExplanationMusic)
    background;

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.engine = engine
        let ui = new UI()

        this.background = new Actor({
            pos: new Vector(0,0),
            anchor: new Vector(0,0)
        })
        this.add(this.background)

        for(let i = 0; i < 4; i++) {
            let label = new Label({
                pos: new Vector(250 + i * 20, 140),
                text: `${this.getPlayerText(i + 1)}`,
                font: ui.spriteFont
            })
            this.add(label)
        }

        let readyLabel = new Label({
            pos: new Vector(200, 160),
            text: 'Press x to ready up!',
            font: ui.spriteFont
        })
        readyLabel.scale = new Vector(0.5,0.5)
        this.add(readyLabel)

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
        this.background.graphics.use(this.getExplanationImage(this.scene))
        this.createExplanationText(this.scene)
    }

    onDeactivate() {
        this.explanationMusic.pause()
        for (const label of this.labels) {
            label.kill()
        }
    }

    onPostUpdate() {
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

    getExplanationImage(scene) {
        switch (scene) {
            case 'afvalverwijderen':
                return Resources.AfvalExplanation.toSprite()
            case 'hertensleper':
                return Resources.HertExplanation.toSprite()
            case 'goosecatcher':
                return Resources.CatchExplanation.toSprite()
            case 'plasrenner':
                return Resources.RaceExplanation.toSprite()
        }
    }

    createExplanationText(scene) {
        let ui = new UI()
        let explanation
        let controls
        switch (scene) {
            case 'afvalverwijderen':
                explanation = new Label({
                    pos: new Vector(210, 10),
                    text: 'Gebruik de\njoystick om de\ncursus boven de\nbananen op te\nruimen met X.',
                    font: ui.spriteFont
                })
                explanation.scale = new Vector(0.5,0.5)
                this.add(explanation)
                controls = new Label({
                    pos: new Vector(10, 150),
                    text: 'beweeg      pak op',
                    font: ui.spriteFont
                })
                controls.scale = new Vector(0.5,0.5)
                this.add(controls)
                this.labels.push(controls)
                this.labels.push(explanation)
                break;
            case 'hertensleper':
                explanation = new Label({
                    pos: new Vector(210, 10),
                    text: 'Beweeg met de\njoystick de\ncursus zodat je\nboven herten X\nkan drukken om\nze vast te\npakken. Sleep\nze daarna terug\nnaar jouw hok om\nmet X het\nlos te laten\nin jouw hok.',
                    font: ui.spriteFont
                })
                explanation.scale = new Vector(0.5,0.5)
                this.add(explanation)
                controls = new Label({
                    pos: new Vector(10, 150),
                    text: 'beweeg      pak op',
                    font: ui.spriteFont
                })
                controls.scale = new Vector(0.5,0.5)
                this.add(controls)
                this.labels.push(controls)
                this.labels.push(explanation)
                break;
            case 'goosecatcher':
                explanation = new Label({
                    pos: new Vector(210, 10),
                    text: 'Beweeg je cursor\nmet de joystick\nom zoveel mogelijk\nganzen te vangen\nmet X voordat je\ntegenstanders het\ndoen.',
                    font: ui.spriteFont
                })
                explanation.scale = new Vector(0.5,0.5)
                this.add(explanation)
                controls = new Label({
                    pos: new Vector(10, 150),
                    text: 'beweeg      vang',
                    font: ui.spriteFont
                })
                controls.scale = new Vector(0.5,0.5)
                this.add(controls)
                this.labels.push(controls)
                this.labels.push(explanation)
                break;
            case 'plasrenner':
                explanation = new Label({
                    pos: new Vector(210, 10),
                    text: 'Druk zo snel\nmogelijk achter\nelkaar op X\nom te rennen\nmet jouw gans\nen als eerste\nover de finish\nte krijgen.',
                    font: ui.spriteFont
                })
                explanation.scale = new Vector(0.5,0.5)
                this.add(explanation)
                controls = new Label({
                    pos: new Vector(10, 150),
                    text: '    ren',
                    font: ui.spriteFont
                })
                controls.scale = new Vector(0.5,0.5)
                this.add(controls)
                this.labels.push(controls)
                this.labels.push(explanation)
                break;
        }
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
