import { UI } from "./UI";

export class Timer extends UI{
  timer = 25

  constructor(timer){

    super({
      z: 0,
    })
    this.timer = timer
  }

  onInitialize(engine) {
    this.engine = engine
    this.pos = new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2)
    this.timer = new Label({
      text: this.timer.toString(),
      pos: new Vector(0,0),
      font: this.spriteFont
    })

  }
}