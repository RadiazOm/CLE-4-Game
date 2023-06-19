import { Actor, Vector, GraphicsGroup } from 'excalibur'
import { Resources } from '../loader.js'


export class Background extends Actor {

    offset
    
    onInitialize(engine){
        const background = Resources.BackgroundAfval.toSprite()
        this.offset = background.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: background,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: background,
                    pos: new Vector(background.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)       

    }


}