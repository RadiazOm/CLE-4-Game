import { Actor, Vector, clamp } from "excalibur";
import { Resources } from "../loader";

export class GooseFloating extends Actor {


    constructor() {
        super({
            width: Resources.GooseFloating.width,
            height: Resources.GooseFloating.height,
        });
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.GooseFloating.toSprite());

    
        this.pos.x = Math.random()* this.engine.screen.drawWidth
        if(this.pos.x < 225 && this.pos.x >135){
            this.pos.y = Math.random()* this.engine.screen.drawHeight
        } else {
            this.pos.y = (Math.random()*15) + (this.engine.screen.drawHeight - 5 ) / 2
        } 

        // this.vel.x = Math.random()* this.engine.screen.drawWidth
        // if(this.vel.x < 10 && this.vel.x > 20 ){
        //     this.vel.y = Math.random()* this.engine.drawHeight
        // } else {
        //     this.vel.y = (Math.random()* 15) + (this.engine.screen.drawHeight - 5)/2
        // }
        
    }

    onPostUpdate(){
        this.pos.x = clamp(this.pos.x, 0 + Resources.GooseFloating.width / 2, this.engine.screen.drawWidth - Resources.GooseFloating.width / 2)
        this.pos.y = clamp(this.pos.y, 0 + Resources.GooseFloating.height / 2, this.engine.screen.drawHeight - Resources.GooseFloating.height / 2)
    }
}


