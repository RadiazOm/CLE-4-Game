import { Actor, Vector, Input } from "excalibur"

export class GansWit extends Actor {

    finished = false;
    player
    engine

    constructor(player){
        super()
        this.player = player

        document.addEventListener('click', () => {this.press()})
    }

    onInitialize(engine) {
        this.engine = engine
    }

    onPreUpdate() {
        if (this.pos.x > 325 && this.finished == false) {
            this.finished = true
            this.engine.currentScene.finishedPlayer(this.player)
        }
    }

    press() {
        if (this.finished == true || this.engine.currentScene.freeze) {
            return;
        }
        this.pos.x += 5
    }

}
//325 is de max