import { Actor, Scene, Vector } from "excalibur";
import { newText } from "./text";
import { Resources } from "./loader";
import { CharacterCanvas } from "./characterCanvas";

export class characterSelection extends Scene {

    engine;
    player1connected = false;
    player2connected = false;
    player3connected = false;
    player4connected = false;
    goosePortraitsSprites = []
    goosePortraits = []
    

    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log('to characters')
        this.engine = engine;
        for (let x = 70; x < 370; x+= 220) {
            for (let y = 10; y < 190; y+= 160) {
                let text = new newText('press any button\nto connect', new Vector(x,y))
                this.add(text)
                console.log(text)

            }
        }
        this.goosePortraitsSprites.push(Resources.BluePortrait.toSprite())
        this.goosePortraitsSprites.push(Resources.RedPortrait.toSprite())
        this.goosePortraitsSprites.push(Resources.GreenPortrait.toSprite())
        this.goosePortraitsSprites.push(Resources.YellowPortrait.toSprite())
    }

    onPreUpdate() {
        if (typeof this.engine.mainController.player1 === "object" && this.player1connected == false) {
            this.player1connected = true
            this.connectplayer(1)
        }
        if (typeof this.engine.mainController.player2 === "object" && this.player2connected == false) {
            this.player2connected = true
            this.connectplayer(2)
        }
        if (typeof this.engine.mainController.player3 === "object" && this.player3connected == false) {
            this.player3connected = true
            this.connectplayer(3)
        }
        if (typeof this.engine.mainController.player4 === "object" && this.player4connected == false) {
            this.player4connected = true
            this.connectplayer(4)
        }
    }

    connectplayer(player) {
        let characterCanvas = new CharacterCanvas(player)
        this.add(characterCanvas)
        // this.engine.goToScene('hertensleper')
    }

    

}