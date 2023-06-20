import { Actor, Vector, CollisionType} from "excalibur";
import { Resources } from "../loader.js";

export class Banaan extends Actor {

  engine

  constructor() {
    super({
      width: Resources.Banaan.width,
      height: Resources.Banaan.height,
    });


  }

  onInitialize(engine) {
    this.engine = engine
    this.graphics.use(Resources.Banaan.toSprite());
    this.pos = new Vector(Math.random() * 320, Math.random() * 140);
    this.body.collisionType = CollisionType.Active;

    this.enableCapturePointer = true;
    this.pointer.useGraphicsBounds = true;
     
    this.on("collisionstart", (event) => {
      // console.log(event.other);

      if (event.other instanceof Banaan) {
        this.pos = new Vector(Math.random() * 320, Math.random() * 140);
      }

    });
  }

    pickUp(player) {
      this.kill();
      this.engine.currentScene.score++;
      this.engine.currentScene.scoreTracker[player - 1].updateScore(this.engine.currentScene.score);
    }

}