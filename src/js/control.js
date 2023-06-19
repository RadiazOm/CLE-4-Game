import { Actor, Vector, Input } from "excalibur"

export class GansWit extends Actor {

    constructor(){
        super()
    }

    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard

        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left)) {
            xspeed = -300
            // optioneel, flip de sprite
            // this.sprite.flipHorizontal = true
        }
        if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right)) {
            xspeed = 300
            // optioneel, flip de sprite
            // this.sprite.flipHorizontal = false
        }
        
        // schieten en springen gebeurt maar 1 keer na een press
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            console.log("jump!")
        }

        this.vel = new Vector(xspeed, yspeed)
    }
}