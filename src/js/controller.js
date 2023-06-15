import { Actor } from "excalibur";
import { PlayerController } from "./playerController.js"
import { Arcade } from "arcade-game"


export class MainController extends Actor{

    arcade;
    player1;
    player2;
    player3;
    player4;
    controllers = [];
    joystickListener;

    constructor() {
        super()
        this.arcade = new Arcade(this, true, true);

        this.joystickListener = (e) => this.createControllers(e);
        document.addEventListener('joystickcreated', this.joystickListener)
    }

    createControllers() {
        console.log('createControllers')
        if (this.controllers.length > 3) {
            return;
        }
        let controllerIndex = this.controllers.length;
        if (controllerIndex === undefined) {
            controllerIndex = 1
        }
        console.log(controllerIndex)

        let player = new PlayerController(controllerIndex)
        this.controllers.push(player)
        switch (controllerIndex) {
            case 1:
                this.player1 = player
                break;
            case 2:
                this.player2 = player
                break;
            case 3:
                this.player3 = player
                break;
            case 4:
                this.player4 = player
                break;
        }
    }

    onPreUpdate() {
        for (let joystick of this.arcade.Joysticks) {
            joystick.update();
        }
    }

    disconnect() {
        document.removeEventListener("joystickcreated", this.joystickListener)
    }
}