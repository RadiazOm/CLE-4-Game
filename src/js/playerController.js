import { Vector } from "excalibur"
import { Arcade } from "arcade-game"

export class PlayerController {

    playerIndex
    xAxis = new Vector(0, 0)
    yAxis = new Vector(0, 0)

    constructor(playerIndex) {
        console.log(playerIndex)
        this.playerIndex = playerIndex
        this.createListeners()
    }

    createListeners() {
        document.addEventListener(`joystick${this.playerIndex}up`,(e) => {this.joystickUp(e)})
        document.addEventListener(`joystick${this.playerIndex}down`,(e) => {this.joystickDown(e)})
        document.addEventListener(`joystick${this.playerIndex}left`,(e) => {this.joystickLeft(e)})
        document.addEventListener(`joystick${this.playerIndex}right`,(e) => { this.joystickRight(e)})
        document.addEventListener(`joystick${this.playerIndex}neutral`,(e) => { this.joystickNeutral(e)})

        document.addEventListener(`joystick${this.playerIndex}button0`,(e) => { this.joystickButton0(e)})
        document.addEventListener(`joystick${this.playerIndex}button1`,(e) => { this.joystickButton1(e)})
        document.addEventListener(`joystick${this.playerIndex}button2`,(e) => { this.joystickButton2(e)})
        document.addEventListener(`joystick${this.playerIndex}button3`,(e) => { this.joystickButton3(e)})
        document.addEventListener(`joystick${this.playerIndex}button4`,(e) => { this.joystickButton4(e)})
        document.addEventListener(`joystick${this.playerIndex}button5`,(e) => { this.joystickButton5(e)})

        console.log('listeners created')
    }

    joystickUp(e) {
        console.log(`player${this.playerIndex} up`)
    }

    joystickDown(e) {
        console.log(`player${this.playerIndex} down`)
    }

    joystickLeft(e) {
        console.log(`player${this.playerIndex} left`)
    }

    joystickRight(e) {
        console.log(`player${this.playerIndex} right`)
    }

    joystickNeutral(e) {
        console.log(`player${this.playerIndex} neutral`)
    }

    joystickButton0(e) {
        console.log(`player${this.playerIndex} button0`)
    }

    joystickButton1(e) {
        console.log(`player${this.playerIndex} button1`)
    }

    joystickButton2(e) {
        console.log(`player${this.playerIndex} button2`)
    }

    joystickButton3(e) {
        console.log(`player${this.playerIndex} button3`)
    }

    joystickButton4(e) {
        console.log(`player${this.playerIndex} button4`)
    }

    joystickButton5(e) {
        console.log(`player${this.playerIndex} button5`)
    }
}