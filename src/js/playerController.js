import { Vector } from "excalibur"
import { Arcade } from "arcade-game"

export class PlayerController {

    playerIndex
    xAxis = new Vector(0, 0)
    yAxis = new Vector(0, 0)

    constructor(playerIndex) {
        this.playerIndex = playerIndex
        this.createListeners()
    }

    createListeners() {
        document.addEventListener(`joystick${this.playerIndex - 1}up`,(e) => {this.joystickUp(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}down`,(e) => {this.joystickDown(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}left`,(e) => {this.joystickLeft(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}right`,(e) => { this.joystickRight(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}neutral`,(e) => { this.joystickNeutral(e)})

        document.addEventListener(`joystick${this.playerIndex - 1}button0`,(e) => { this.joystickButton0(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button1`,(e) => { this.joystickButton1(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button2`,(e) => { this.joystickButton2(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button3`,(e) => { this.joystickButton3(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button4`,(e) => { this.joystickButton4(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button5`,(e) => { this.joystickButton5(e)})
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