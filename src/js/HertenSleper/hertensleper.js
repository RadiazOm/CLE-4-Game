import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../loader";
import { Cursor } from "./cursor";

export class HertenSleper extends Scene {

    cursor;

    constructor(){
        super()
    }

    onInitialize() {
        let background = new Actor({
            anchor: new Vector(0,0)
        })
        background.graphics.use(Resources.hertMap.toSprite())
        this.add(background)

        for(let i = 1; i < 5; i++) {
            this.cursor = new Cursor(i)
            this.add(this.cursor)
        }
    }
}