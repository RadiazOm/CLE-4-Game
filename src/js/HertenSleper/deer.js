import { Actor, Vector, clamp, Timer, CollisionType } from "excalibur";
import { Resources } from "../loader";

export class Deer extends Actor {

    grabbable = true;
    target = null;

    constructor() {
        super({
            width: Resources.Deer.width,
            height: Resources.Deer.height
        })
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Deer.toSprite())
        this.body.collisionType = CollisionType.Active
        this.pos.x = Math.random() * this.engine.screen.drawWidth
        if (this.pos.x < 225 && this.pos.x > 135) {
            this.pos.y = Math.random() * this.engine.screen.drawHeight
        } else {
            this.pos.y = (Math.random() * 10) + (this.engine.screen.drawHeight - 5) / 2
        }

        const timer = new Timer({
            fcn: () => {this.wander()},
            repeats: true,
            interval: Math.random() * 2000
        })

        this.engine.currentScene.add(timer)
        timer.start()
    }

    grab(target) {
        this.target = target
        this.body.collisionType = CollisionType.PreventCollision
    }

    release() {
        this.target = null
        this.body.collisionType = CollisionType.Active
    }

    wander() {
        if (this.grabbable === true && this.engine.currentScene.gameOver === false) {
            this.vel = new Vector(Math.random() * 10 - 5, Math.random() * 10 - 5)
        }
    }

    onPostUpdate() {
        this.pos.x = clamp(this.pos.x, 0 + Resources.Deer.width / 2, this.engine.screen.drawWidth - Resources.Deer.width / 2)
        this.pos.y = clamp(this.pos.y, 0 + Resources.Deer.height / 2, this.engine.screen.drawHeight - Resources.Deer.height / 2)

        if (this.target !== null) {
            this.pos = this.target.pos
            this.vel = new Vector(0,0)
        }
    }
}