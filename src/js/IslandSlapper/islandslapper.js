import { Actor, Scene, Vector } from "excalibur";
import { Player } from "./player";
import { Resources } from "../loader";

export class IslandSlapper extends Scene {

    geese = []
    positions = [];
    engine;

    constructor() {
        super()
    }

    onInitialize(engine) {
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

    playerLose(event) {
        if (event.other instanceof Player) {
            console.log(event)
            event.other.lose()
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
}