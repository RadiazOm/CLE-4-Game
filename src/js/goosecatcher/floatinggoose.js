import { Actor, Vector, clamp } from "excalibur";
import { Resources } from "../loader";

export class GooseFloating extends Actor {

    sprite;


    constructor() {
        super({
            width: Resources.GooseFloating.width,
            height: Resources.GooseFloating.height,
        });
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.GooseFloating.toSprite());
        this.sprite = Resources.GooseFloating.toSprite()

    
        this.pos.x = Math.random()* this.engine.screen.drawWidth
        if(this.pos.x < 225 && this.pos.x >135){
            this.pos.y = Math.random()* this.engine.screen.drawHeight
        } else {
            this.pos.y = (Math.random()*15) + (this.engine.screen.drawHeight - 5 ) / 2
        } 

        this.vel = new Vector(Math.random() * 10 - 5, Math.random() * 10 - 5)

    }

    onPostUpdate(){
        this.pos.x = clamp(this.pos.x, 0 + Resources.GooseFloating.width / 2, this.engine.screen.drawWidth - Resources.GooseFloating.width / 2)
        this.pos.y = clamp(this.pos.y, 0 + Resources.GooseFloating.height / 2, this.engine.screen.drawHeight - Resources.GooseFloating.height / 2)

        // wanneer de vel van de ganz posis is dan willen we de flipper zantel*acceser in de sprite() die willen we op fals hebbe
        //Als het negatief is dan op true

        console.log(this.graphics)

        if (this.vel.x > 0){
            this.sprite.flipHorizontal = false
            this.graphics.use(this.sprite)
        } else {
            this.sprite.flipHorizontal = true
            this.graphics.use(this.sprite)
        }
    }
}


