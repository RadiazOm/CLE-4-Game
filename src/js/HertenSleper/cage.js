import { Actor, CollisionType, CompositeCollider, Shape, Vector } from "excalibur";
import { Resources } from "../loader";


export class Cage extends Actor {
    constructor() {
        super({
            width: Resources.Cage.width,
            height: Resources.Cage.height
        })
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Fixed
        this.graphics.use(Resources.Cage.toSprite())
        this.scale = new Vector(1.2, 1.2)

        this.anchor = new Vector(0,0)

        let compositeCollider = new CompositeCollider([
            Shape.Box(Resources.Cage.width, 15, new Vector(0, 0)),
            Shape.Box(Resources.Cage.width, 15, new Vector(0, 0), new Vector(0, Resources.Cage.height - 15)),
            Shape.Box(7, Resources.Cage.height, new Vector(0, 0)),
            Shape.Box(7, Resources.Cage.height, new Vector(0, 0),  new Vector(Resources.Cage.width - 7, 0)),
        ])

        this.collider.useCompositeCollider(compositeCollider.getColliders())
    }
}