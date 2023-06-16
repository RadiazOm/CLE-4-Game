import { Actor, Physics, Scene, Vector } from "excalibur";
import { Resources } from "../loader";
import { Cursor } from "./cursor";
import { Deer } from "./deer";

export class HertenSleper extends Scene {

    cursors = [];
    deer = [];
    engine;

    constructor(){
        super()
        Physics.useArcadePhysics()
    }

    onInitialize(engine) {
        this.engine = engine
        let background = new Actor({
            anchor: new Vector(0,0)
        })
        background.graphics.use(Resources.hertMap.toSprite())
        this.add(background)

        for (let i = 0; i < 10; i++) {
            let deer = new Deer()
            this.add(deer)
            this.deer.push(deer)
        }

        for(let i = 1; i < 5; i++) {
            let cursor = new Cursor(i, this.deer)
            this.add(cursor)
            this.cursors.push(cursor)
        }
    }

    Button0(player) {
        switch (player) {
            case 1:
                this.cursors[0].grab()
                break;
        }
    }
}