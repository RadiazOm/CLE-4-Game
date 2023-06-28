import { Actor, Label, Scene, Timer, Vector } from "excalibur";
import { Player } from "./player";
import { Resources } from "../loader";
import islandMusic from "../../sounds/bgm_action_4.mp3"
import { UI } from "../UI";

export class IslandSlapper extends Scene {

    gameMusic = new Audio(islandMusic)
    geese = []
    positions = [];
    engine;

    constructor() {
        super()
    }

    onInitialize(engine) {
        this.gameMusic.loop = true
        this.engine = engine
        let bg = new Actor({
            pos: new Vector(0,0),
            anchor: new Vector(0,0)
        })
        bg.collider.useCircleCollider(70, new Vector(this.engine.screen.drawWidth / 2 - 5,this.engine.screen.drawHeight / 2))
        bg.graphics.use(Resources.Island.toSprite())
        bg.on('collisionend', (event) => this.playerLose(event))
        this.add(bg)
        console.log('new scene')

        for(let i = 0; i < 4; i++) {
            let goose = new Player(i + 1)
            this.add(goose)
            this.geese.push(goose)
        }
    }

    onActivate() {
        this.gameMusic.play()
        this.countdown()
    }

    onDeactivate() {
        this.gameMusic.pause()
    }

    playerLose(event) {
        if (event.other instanceof Player) {
            console.log(event)
            event.other.lose()
        }
    }

    beginGame() {
        for (const goose of this.geese) {
            goose.lock = false
        }
    }

    Button5(player) {
        this.geese[player - 1].swing()
    }

    onPostUpdate() {
        if (this.positions.length === 3) {
            for (const goose of this.geese) {
                if (goose.lost == false) {
                    this.positions.push(goose.player)
                }
            }
            this.positions.reverse()
            this.engine.endGame(this.positions)
        }
    }

    countdown() {
            let time = 3
    
            const ui = new UI()
    
            let label = new Label({
                text: time.toString(),
                pos: new Vector(this.engine.screen.drawWidth / 2 - 16, this.engine.screen.drawHeight / 2 - 16),
                font: ui.spriteFont
            })
            this.add(label)
            const timer = new Timer({
                fcn: () => {
                    if (time <= 1) {
                        this.beginGame()
                        timer.cancel()
                        label.kill()
                    } else {
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