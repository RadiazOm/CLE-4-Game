import { Actor, GraphicsGroup, Vector } from "excalibur";
import { Resources } from "../loader";

export class BackgroundCatcher extends Actor{
    offset
   onInitialize(engine){
    const backgroundTile = Resources.BackgroundCatcher.toSprite()
    this.offset = backgroundTile.height

    const group = new GraphicsGroup({
        members:[
            {
                graphic: backgroundTile,
                pos: new Vector(0,0)
            },
            {
                graphic:backgroundTile,
                pos: new Vector(0,backgroundTile.height)
            }
        ]
    })

    this.graphics.anchor = new Vector(0,0)
    this.graphics.add(group)
    this.pos = new Vector(0,0)
    this.vel = new Vector(0,30)

   }   

   onPostUpdate(engine, delta) {
    if (this.pos.y >= engine.drawHeight) {
        this.pos = new Vector(0, -this.offset);
    }
}

}