import { Actor, Label, Vector } from "excalibur";
import { PlayerController } from "./playerController.js"
import { Arcade } from "arcade-game"
import { UI } from "./UI.js"


export class MainController{

    game;
    arcade;
    player1;
    player2;
    player3;
    player4;
    controllers = [];
    joystickListener;

    constructor(game) {
        this.game = game
        this.arcade = new Arcade(this, true, false);
        console.log(this.arcade)

        this.joystickListener = (e) => this.createController(e);
        window.addEventListener('gamepadconnected', this.joystickListener)
        window.addEventListener('gamepaddisconnected', (e) => {this.disconnect(e)})
    }

    createController(e) {
        const gp = navigator.getGamepads()[e.gamepad.index]
        console.log(e)
        if (this.controllers.length > 3) {
            return;
        }
        let controllerIndex = e.gamepad.index + 1

        let player = new PlayerController(controllerIndex, this.arcade.Joysticks[controllerIndex -1], this.game)
        this.controllers.push(player)
        console.log(controllerIndex)

        const ui = new UI()

        let label

        switch (controllerIndex) {
            case 1:
                this.player1 = player
                console.log('player1 connected')
                this.player1.shake(200)
                break;
            case 2:
                this.player2 = player
                console.log('player2 connected')
                this.player2.shake(200)
                break;
            case 3:
                this.player3 = player
                console.log('player3 connected')
                this.player3.shake(200)
                break;
            case 4:
                this.player4 = player
                console.log('player4 connected')
                this.player4.shake(200)
                this.game.add(label)
                break;
        }
    }

    update() {
        for (let joystick of this.arcade.Joysticks) {
            joystick.update();
        }
        if (typeof this.player1 !== "undefined") {
            this.player1.update()
        }
        if (typeof this.player2 !== "undefined") {
            this.player2.update()
        }
        if (typeof this.player3 !== "undefined") {
            this.player3.update()
        }
        if (typeof this.player4 !== "undefined") {
            this.player4.update()
        }
    }

    disconnect(e) {
        let ui = new UI()
        let label = new Label({
            text: `dont do that please`,
            pos: new Vector(0, 80),
            font: ui.spriteFont
        })
        this.game.add(label)
    }
}