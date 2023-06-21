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


export class Game extends Engine {

    mainController;
    begin = false;
    pressed = false;
    scenes = [];
    scenesRemaining = [];

    constructor() {
        // The width and height will be in a 16:9 format, this is suvject to change
        // maxFps and displaymode are for performance and sizing requirements
        super({
            width: 360,
            height: 180,
            width: 360,
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
        // TODO: Scene manager
        console.log('yes')
        this.mainController = new MainController(this)

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

        this.goToScene(game)
    }

    endGame(player) {
        this.goToScene('scoreboard', player)
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