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
        this.collider.useCircleCollider(Resources.GooseFloating.width/2);
        this.body.bounciness = 1

        this.pos = new Vector(Math.random()*this.engine.screen.drawWidth, Math.random()*this.engine.screen.drawHeight)
        this.vel = new Vector(Math.random() * 50 - 25, Math.random() * 50 -25 )
       
        
        

        this.enableCapture = true;
        this.pointer.useGraphicsBounds = true;

        this.on("pointerup",(event) => {
            this.kill();
        })

        // this.on("collisionstart",(event)=>{
        //     if(event.other instanceof GooseFloating){
        //         this.vel = new Vector(-this.vel.x, -this.vel.y)
        //     }
        // })

        
    }

    onPostUpdate(){
      

        // this.pos.x = clamp(this.pos.x, 0 + Resources.GooseFloating.width / 2, this.engine.screen.drawWidth - Resources.GooseFloating.width / 2)
        // this.pos.y = clamp(this.pos.y, 0 + Resources.GooseFloating.height / 2, this.engine.screen.drawHeight - Resources.GooseFloating.height / 2)
      
        if(this.pos.x < 0){
            this.pos.x = 0
            this.vel.x = -this.vel.x 
        } 
        if(this.pos.x >this.engine.screen.drawWidth){
            this.pos.x = this.engine.screen.drawWidth
            this.vel.x = -this.vel.x
        }
        if(this.pos.y < 0){
            this.pos.y = 0
            this.vel.y = -this.vel.y
        }
        if(this.pos.y > this.engine.screen.drawHeight){
            this.pos.y = this.engine.screen.drawHeight
            this.vel.y = -this.vel.y
        }


        

        
        // wanneer de vel van de ganz posis is dan willen we de flipper zantel*acceser in de sprite() die willen we op fals hebbe
        //Als het negatief is dan op true

        if (this.vel.x > 0){
            this.sprite.flipHorizontal = false
            this.graphics.use(this.sprite)
        } else {
            this.sprite.flipHorizontal = true
            this.graphics.use(this.sprite)

        }

        this.rotation = 0
        

        

        


      


    }
}


