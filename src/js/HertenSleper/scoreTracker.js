import { Label, ScreenElement, Vector } from "excalibur";
import { Resources } from "../loader";


export class ScoreTracker extends ScreenElement {

    player;
    engine;
    score;

    constructor(player){
        super({
            z: 0
        })
        this.player = player
    }

    onInitialize(engine) {
        this.engine = engine
        switch (this.player) {
            case 1:
                this.pos = new Vector(Resources.Cage.width * 1.2, 8)
                break;
            case 2:
                this.pos = new Vector(this.engine.screen.drawWidth - Resources.Cage.width * 1.2 - 10, 8)
                break;
            case 3:
                this.pos = new Vector(Resources.Cage.width * 1.2, this.engine.screen.drawHeight - 6)
                break;
            case 4:
                this.pos = new Vector(this.engine.screen.drawWidth - Resources.Cage.width * 1.2 - 10, this.engine.screen.drawHeight - 6)
                break;
        }
        this.score = new Label({
            text: `P${this.player}: 0`,
            pos: new Vector(0,0)
        })
        if (this.player == 2 || this.player == 4) {
            this.score.anchor = new Vector(1, 0)
        }

        this.addChild(this.score)
    }

    updateScore(score) {
        this.score.text = `P${this.player}: ${score.toString()}`
    }
}
