import { Actor, Resource, Vector } from "excalibur";
import { Resources } from "../loader";


export class Player extends Actor {

    player;
    engine;

    constructor(player) {
        super()
        this.player = player
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.TopdownGoose.toSprite())
        this.setPosition(this.player)
    }

    setPosition(player) {
        switch (player) {
            case 1:
                this.pos = new Vector(0,0)
                break;
            case 2:
                this.pos = new Vector(this.engine.screen.drawWidith,0)
                break;
            case 3:
                this.pos = new Vector(0,this.engine.screen.drawHeight)
                break;
            case 4:
                this.pos = new Vector(this.engine.screen.drawWidith,this.engine.screen.drawHeight)
                break;
        }
    }
}