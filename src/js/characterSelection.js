import { Actor, Scene, Vector, Label, Timer } from "excalibur";
import { newText } from "./text";
import { Resources } from "./loader";
import { CharacterCanvas } from "./characterCanvas";
import { UI } from "./UI";
import characterMusic from "../sounds/8bit-Bossa.mp3"

export class characterSelection extends Scene {

    engine;
    player1connected = false;
    player2connected = false;
    player3connected = false;
    player4connected = false;
    characterCanvases = [];
    begin = false; 
    starting = false;
    menuMusic = new Audio(characterMusic)
    selectedColours = [null,null,null,null];
    

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.menuMusic.loop = true
        

        this.engine = engine;
        for (let x = 70; x < 370; x+= 220) {
            for (let y = 10; y < 190; y+= 160) {
                let text = new newText('press any button\nto connect', new Vector(x,y))
                this.add(text)
                console.log(text)

            }
        }

        document.addEventListener('keyup', (e) => {
            if (e.key == 'w'){
                this.begin = true
                console.log('spatie')
            }
        })
    }

    onActivate() {
        this.menuMusic.loop = true 
        this.menuMusic.play()       
    }

    onDeactivate() {
        this.menuMusic.pause()
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

        if (this.player1connected && !this.starting && this.begin) {
            this.countdown()
            this.starting = true
        }

        for (const colour of this.selectedColours) {
            this.begin = true
            if (colour === null) {
                this.begin = false
            }
        }
    }

    connectplayer(player) {
        let characterCanvas = new CharacterCanvas(player)
        this.add(characterCanvas)
        this.characterCanvases.push(characterCanvas)
    }

    Button3(player) {
        console.log('kwak')
        this.characterCanvases[player - 1].honk()
    }

    Button0(player) {
        this.characterCanvases[player - 1].select()
    }

    Button1(player) {
        if (this.begin === true) {
            return;
        }
        this.characterCanvases[player - 1].deselect()
    }

    countdown() {
        let time = 3

        const ui = new UI()

        let label = new Label({
            text: time.toString(),
            pos: new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2 + 16),
            font: ui.spriteFont
        })
        label.anchor = new Vector(0.5,0.5)
        this.add(label)
        const timer = new Timer({
            fcn: () => {
                if (time <= 0) {
                    this.engine.addColours(this.selectedColours)
                    this.engine.goToGame()
                    timer.cancel()
                } else {
                    Resources.SelectSound.play()
                    time -= 1
                    label.text = time.toString()
                }
            },
            repeats: true,
            interval: 1000
        })
        this.add(timer)
        timer.start()
    }

    

}