import { Actor, DisplayMode, Engine, Label, Vector, Timer } from "excalibur"
import { ResourceLoader, Resources } from "./loader.js";
import { MainController } from "./controller.js";
import { Afvalverwijderaar } from "./afvalverwijderaar/afvalverwijderaar.js";
import { HertenSleper } from "./HertenSleper/hertensleper.js";
import { UI } from "./UI.js"
import { characterSelection } from "./characterSelection.js";
import { ScoreBoard } from "./scoreBoard.js";
import { GooseCatcher } from "./goosecatcher/goosecatcherMain.js";
import { PlasRenner } from "./PlasRenner/plasrenner.js";
import { MainMenu } from "./mainMenu.js";
import { Explanation } from "./gameExplanation.js";
import { Loading } from "./loading.js";
import { FinalScore } from "./finalScore.js";


export class Game extends Engine {

    mainController;
    begin = false;
    pressed = false;
    scenes = [];
    scenesRemaining = [];
    colours;

    constructor() {
        // The width and height will be in a 16:9 format, this is suvject to change
        // maxFps and displaymode are for performance and sizing requirements
        super({
            width: 360,
            height: 180,
            canvasElementId: 'game',
            maxFps: 144,
            displayMode: DisplayMode.FitScreen
        });
        this.mainController = new MainController(this)
        // Antialiasing set to false otherwise pixelart will look blurry
        this.setAntialiasing(false)
        // If something isnt going so well you can turn this to true and you will be able to see all sorts of cool information
        this.showDebug(false)
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        // TODO: Scene manager
        console.log('yes')
        this.addScene('hertensleper', new HertenSleper())
        this.addScene('goosecatcher', new GooseCatcher())
        this.addScene('afvalverwijderen', new Afvalverwijderaar())
        this.addScene('plasrenner', new PlasRenner())
        this.scenes.push('afvalverwijderen')
        this.scenes.push('hertensleper')
        this.scenes.push('goosecatcher')
        this.scenes.push('plasrenner')
        this.addScene('mainmenu', new MainMenu())
        this.addScene('characterselection', new characterSelection())
        this.addScene('scoreboard', new ScoreBoard())
        this.addScene('endscene', new FinalScore())
        this.addScene('explanation', new Explanation())
        this.addScene('loading', new Loading)

        for (let i = 0; i < this.scenes.length; i++) {
            this.scenesRemaining.push(i)
        }

        this.goToScene('mainmenu')
    }

    onPreUpdate() {
        this.mainController.update()
    }

    goToGame() {
        let gameIndex = this.scenesRemaining[Math.abs(Math.round(Math.random() * (this.scenesRemaining.length - 1)))]
        let game = this.scenes[gameIndex]
        this.scenesRemaining.splice(this.scenesRemaining.indexOf(gameIndex), 1)

        this.goToScene('explanation', game)
    }

    endGame(positions) {
        this.goToScene('scoreboard', positions)
    }

    addColours(array) {
        this.colours = array
    }

    getColour(player) {
        if (this.colours[player - 1] === null) {
            return 0
        }
        return this.colours[player - 1]
    }

    getCursorSprite(player) {
        let coloursindex = this.colours[player - 1]
        switch (coloursindex) {
            case 0: 
                return Resources.Cursor1.toSprite()
            case 1:
                return Resources.Cursor2.toSprite()
            case 2: 
                return Resources.Cursor3.toSprite()
            case 3:
                return Resources.Cursor4.toSprite()
        }
    }

    countdown() {
        let time = 3

        const ui = new UI()

        let label = new Label({
            text: time.toString(),
            pos: new Vector(this.screen.drawWidth / 2, this.screen.drawHeight / 2 + 16),
            font: ui.spriteFont
        })
        this.add(label)
        const timer = new Timer({
            fcn: () => {
                if (time <= 0) {
                    this.goToScene('goosecatcher')
                    timer.cancel()
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
}

new Game()