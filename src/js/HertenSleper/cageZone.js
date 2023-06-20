import { Actor, Vector } from "excalibur";
import { Resources } from "../loader";
import { Deer } from "./deer";

export class CageZone extends Actor {

    player;
    score = 0;
    engine;

    constructor(player) {
        super({
            width: Resources.Cage.width * 1.2 - 30,
            height: Resources.Cage.height * 1.2 - 14
        })
        this.player = player;
    }


    onInitialize(engine) {
        this.engine = engine
        switch (this.player + 1) {
            case 1:
                this.pos = new Vector(Resources.Cage.width * 1.2 / 2, Resources.Cage.height * 1.2 / 2)
                break;
            case 2:
                this.pos = new Vector(this.engine.screen.drawWidth - Resources.Cage.width * 1.2 / 2, Resources.Cage.height * 1.2 / 2)
                break;
            case 3:
                this.pos = new Vector(Resources.Cage.width * 1.2 / 2, this.engine.screen.drawHeight - Resources.Cage.height * 1.2 / 2)
                break;
            case 4:
                this.pos = new Vector(this.engine.screen.drawWidth - Resources.Cage.width * 1.2 / 2, this.engine.screen.drawHeight - Resources.Cage.height * 1.2 / 2)
                break;
        }

        this.on("collisionstart", (e) => this.OnCollision(e))
        this.on("collisionend", (e) => this.ExitCollision(e))
    }

    OnCollision(e) {
        if (e.other instanceof Deer) {
            this.score++
            this.engine.currentScene.scoreTrackers[this.player].updateScore(this.score)
        }
    }


    ExitCollision(e) {
        if (e.other instanceof Deer) {
            this.score--
            this.engine.currentScene.scoreTrackers[this.player].updateScore(this.score)
        }
    }
}