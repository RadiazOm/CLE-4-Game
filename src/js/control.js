import { Actor, Vector, Input } from "excalibur"

export class GansWit extends Actor {

    constructor(){
        super()
    }

    onInitialize(engine) {
        let kb = engine.input.keyboard

        engine.screen.drawWidth
        kb.on("press", (event) => {
            console.log(event)
            if (event.key == "KeyW") {
                this.pos.x = this.pos.x + 10  
            }
        })
    }

}