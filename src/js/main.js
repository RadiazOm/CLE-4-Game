import { Actor, DisplayMode, Engine, Vector } from "excalibur"
import { ResourceLoader, Resources } from "./loader.js";
import { MainController } from "./controller.js";


export class Game extends Engine {

    mainController;

    testActor;

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
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        // TODO: Scene manager
        console.log('yes')
        this.mainController = new MainController()
        this.add(this.mainController)

        this.testActor = new Actor({
            pos: new Vector(this.screen.drawWidth / 2, this.screen.drawHeight / 2)
        })
        this.testActor.graphics.use(Resources.Snowboard.toSprite())
        this.add(this.testActor)
    }

    onPostUpdate() {
        if (this.mainController.player1 != null) {
            this.testActor.vel.x = this.mainController.player1.Axis.x * 100
            this.testActor.vel.y = this.mainController.player1.Axis.y * 100

        }
    }

    Button5(player) {
        console.log('button5 ' + player)
    }
}

new Game()