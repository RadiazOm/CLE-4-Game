import { Actor, CollisionType, Vector, clamp } from "excalibur";
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
        this.sprite = Resources.GooseFloating.toSprite();
        this.body.collisionType = CollisionType.Active;

    
        this.pos.x = Math.random()* this.engine.screen.drawWidth
        if(this.pos.x < 225 && this.pos.x >135){
            this.pos.y = Math.random()* this.engine.screen.drawHeight
        } else {
            this.pos.y = (Math.random()*15) + (this.engine.screen.drawHeight - 5 ) / 2
        } 

        this.vel = new Vector(Math.random() * 20 - 5, Math.random() * 5 - 5)

        this.enableCapture = true;
        this.pointer.useGraphicsBounds = true;

        this.on("pointerup",(event) => {
            this.kill();
        })

        this.on("collisionstart",(event) =>{
            if(event.other instanceof GooseFloating){
                this.pos = new Vector (Math.random()*320, Math.random()*180)  
            }
        });

    }

    onPostUpdate(){
        this.pos.x = clamp(this.pos.x, 0 + Resources.GooseFloating.width / 2, this.engine.screen.drawWidth - Resources.GooseFloating.width / 2)
        this.pos.y = clamp(this.pos.y, 0 + Resources.GooseFloating.height / 2, this.engine.screen.drawHeight - Resources.GooseFloating.height / 2)

        

        // wanneer de vel van de ganz posis is dan willen we de flipper zantel*acceser in de sprite() die willen we op fals hebbe
        //Als het negatief is dan op true


        if (this.vel.x > 0){
            this.sprite.flipHorizontal = false
            this.graphics.use(this.sprite)
        } else {
            this.sprite.flipHorizontal = true
            this.graphics.use(this.sprite)
        }
    }
}


