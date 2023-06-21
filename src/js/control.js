import { Actor, Vector, Input } from "excalibur"

export class GansWit extends Actor {

    player

    constructor(player){
        super()
        this.player = player
    }

    onInitialize(engine) {
        let kb = engine.input.keyboard

        kb.on("press", (event) => {
            console.log(event)
            if (event.key == "KeyW") {
                this.pos.x = this.pos.x + 5  
            }
        })
    }

    onPreUpdate() {
        console.log(this.pos.x)
        if (this.pos.x > 325) {
            this.engine.gameEnd()
        }
    }

    press() {
        this.pos.x += 5
    }

}
//325 is de max