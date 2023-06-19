import { Actor, Vector } from "excalibur";
import { Resources } from "../loader";

export class GooseFloating extends Actor {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.graphics.use(Resources.GooseFloating.toSprite());
        this.pos = new Vector(160, 90);

        
    }

    

}
