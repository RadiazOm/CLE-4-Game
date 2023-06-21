import { Actor, Vector, Input } from "excalibur"

export class GansWit extends Actor {

    player
    engine

    constructor(player){
        super()
        this.player = player
    }

    onInitialize(engine) {
        this.engine = engine
    }

    onPreUpdate() {
        if (this.pos.x > 325) {
            this.engine.endGame(this.player)
        }
    }

    press() {
        this.pos.x += 5
    }

}
//325 is de max