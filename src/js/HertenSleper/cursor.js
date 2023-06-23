import { Actor, Vector, clamp } from "excalibur";
import { Resources } from "../loader";

export class Cursor extends Actor {

    player;
    deer;
    engine;
    holdingDeer = false;
    holdedDeer;

    constructor(player, deer) {
        super({
            width: Resources.Cursor1.width,
            height: Resources.Cursor1.height
        })
        this.z = 1
        this.player = player;
        this.deer = deer;
        console.log(this.deer)
    }

    onInitialize(engine) {
        this.engine = engine
        console.log(this.graphics)
        this.pos = new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2)

        switch (this.player) {
            case 1:
                this.pos = new Vector(Resources.Cage.width * 1.2 / 2, Resources.Cage.height * 1.2 / 2)
                // this.graphics.use(Resources.Cursor1.toSprite())
                break;
            case 2:
                this.pos = new Vector(this.engine.screen.drawWidth - Resources.Cage.width * 1.2 / 2, Resources.Cage.height * 1.2 / 2)
                // this.graphics.use(Resources.Cursor2.toSprite())
                break;
            case 3:
                this.pos = new Vector(Resources.Cage.width * 1.2 / 2, this.engine.screen.drawHeight - Resources.Cage.height * 1.2 / 2)
                // this.graphics.use(Resources.Cursor3.toSprite())
                break;
            case 4:
                this.pos = new Vector(this.engine.screen.drawWidth - Resources.Cage.width * 1.2 / 2, this.engine.screen.drawHeight - Resources.Cage.height * 1.2 / 2)
                // this.graphics.use(Resources.Cursor4.toSprite())
                break;
        }
        this.graphics.use(this.engine.getCursorSprite(this.player))
    }

    onPreUpdate() {
        if (this.engine.currentScene.gameOver === true) {
            return;
        }
        if (this.player === 1) {
            this.vel.x = this.engine.mainController.player1.getXAxis() * 100
            this.vel.y = this.engine.mainController.player1.getYAxis() * 100
        }
        if (this.player === 2 && typeof this.engine.mainController.player2 !== 'undefined') {
            this.vel.x = this.engine.mainController.player2.getXAxis() * 100
            this.vel.y = this.engine.mainController.player2.getYAxis() * 100
        }
        if (this.player === 3 && typeof this.engine.mainController.player3 !== 'undefined') {
            this.vel.x = this.engine.mainController.player3.getXAxis() * 100
            this.vel.y = this.engine.mainController.player3.getYAxis() * 100
        }
        if (this.player === 4 && typeof this.engine.mainController.player4 !== 'undefined') {
            this.vel.x = this.engine.mainController.player4.getXAxis() * 100
            this.vel.y = this.engine.mainController.player4.getYAxis() * 100
        }

        this.pos.x = clamp(this.pos.x, 0 + Resources.Cursor1.width / 2, this.engine.screen.drawWidth - Resources.Cursor1.width / 2)
        this.pos.y = clamp(this.pos.y, 0 + Resources.Cursor1.width / 2, this.engine.screen.drawHeight - Resources.Cursor1.width / 2)

    }

    grab() {
        if (this.engine.currentScene.gameOver === true) {
            return;
        }
        if (this.holdingDeer === true) {
            this.holdedDeer.release();
            this.holdingDeer = false;
            this.holdedDeer.grabbable = true
            this.holdedDeer = null
        } else {
            for (const deer of this.deer) {
                if (this.contains(deer.pos.x, deer.pos.y) && this.holdingDeer === false && deer.grabbable === true) {
                    deer.grabbable = false
                    this.holdingDeer = true
                    this.holdedDeer = deer
                    deer.grab(this)
                }  
            }
        }
    }
}