import { Actor, Input, Vector } from "excalibur";
import { Resources } from "../loader";

export class GooseFurkan extends Actor{
    constructor(x,y){
        super({
            width: Resources.GooseFurkan.width,
            height: Resources.GooseFurkan.height
        })

        this.graphics.use(Resources.GooseFurkan.toSprite())
        this.pos = new Vector(x,y)
    }

    

    onPostUpdate(engine) {

        let xspeed = 0;
        let yspeed = 0;
        let kb = engine.input.keyboard;

        
        if(kb.isHeld(Input.Keys.W)|| kb.isHeld(Input.Keys.Up)){
            yspeed = -60
            console.log("go up")
        }
        if (kb.isHeld(Input.Keys.S)|| kb.isHeld(Input.Keys.Down)){
            yspeed = 60
        }
        if (kb.isHeld(Input.Keys.A)|| kb.isHeld(Input.Keys.Left)){
            xspeed = -60
        }
        if (kb.isHeld(Input.Keys.D)|| kb.isHeld(Input.Keys.Right)){
            xspeed = 60
        }

        this.vel = new Vector(xspeed, yspeed)

    }
}