import { Actor, Vector } from "excalibur"
import { Arcade } from "arcade-game"

export class PlayerController{

    engine;
    gamepad;
    playerIndex;
    Axis = new Vector(0, 0);

    constructor(playerIndex, gamepad, engine) {
        this.engine = engine
        this.playerIndex = playerIndex
        this.gamepad = gamepad
        this.createListeners()
    }

    createListeners() {
        document.addEventListener(`joystick${this.playerIndex - 1}button0`,(e) => { this.joystickButton0(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button1`,(e) => { this.joystickButton1(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button2`,(e) => { this.joystickButton2(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button3`,(e) => { this.joystickButton3(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button4`,(e) => { this.joystickButton4(e)})
        document.addEventListener(`joystick${this.playerIndex - 1}button5`,(e) => { this.joystickButton5(e)})
    }

    joystickButton0(e) {
        if (typeof this.engine.currentScene.Button0 === "function") {
            this.engine.currentScene.Button0(this.playerIndex)
        }
    }

    joystickButton1(e) {
        if (typeof this.engine.currentScene.Button1 === "function") {
            this.engine.currentScene.Button1(this.playerIndex)
        }
    }

    joystickButton2(e) {
        if (typeof this.engine.currentScene.Button2 === "function") {
            this.engine.currentScene.Button2(this.playerIndex)
        }
    }

    joystickButton3(e) {
        if (typeof this.engine.currentScene.Button3 === "function") {
            this.engine.currentScene.Button3(this.playerIndex)
        }
    }

    joystickButton4(e) {
        if (typeof this.engine.currentScene.Button4 === "function") {
            this.engine.currentScene.Button4(this.playerIndex)
        }
    }

    joystickButton5(e) {
        if (typeof this.engine.currentScene.Button5 === "function") {
            this.engine.currentScene.Button5(this.playerIndex)
        }
    }

    getXAxis2() {
        return navigator.getGamepads()[this.playerIndex - 1].axes[2].toFixed(1)
    }
    
    getYAxis2() {
        return navigator.getGamepads()[this.playerIndex - 1].axes[3].toFixed(1)
    }

    getXAxis() {
        return navigator.getGamepads()[this.playerIndex - 1].axes[0].toFixed(1)
    }

    getYAxis() {
        return navigator.getGamepads()[this.playerIndex - 1].axes[1].toFixed(1)
    }

    IsHeld(button) {
        return navigator.getGamepads()[this.playerIndex - 1].buttons[button].pressed
    }

    shake(duration) {
        let gp = navigator.getGamepads()[this.playerIndex - 1]

        gp.vibrationActuator.playEffect("dual-rumble", {
            startDelay: 0,
            duration: duration,
            weakMagnitude: 1.0,
            strongMagnitude: 0.0,
          });    }

    update() {        
        this.Axis = new Vector(this.gamepad.X, this.gamepad.Y)
    }
}