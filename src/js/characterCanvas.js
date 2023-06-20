import { Actor, Vector } from "excalibur"
import { UI } from "./UI";
import { Resources } from "./loader";
import { newText } from "./text";

export class CharacterCanvas extends UI {

    engine;
    player;
    portraitSprites;
    portrait;
    currentSpriteIndex;


    constructor(player) {
        super()
        this.player = player
    }

    onInitialize(engine) {
        this.engine = engine
        this.portraitSprites = [Resources.RedPortrait.toSprite(), Resources.BluePortrait.toSprite(), Resources.GreenPortrait.toSprite(), Resources.YellowPortrait.toSprite()]
        let background = new Actor({
            pos: new Vector(0 + ((this.player === 2 || this.player === 4) * 189), 0 + ((this.player === 3 || this.player === 4) * 97))
        })
        background.anchor = new Vector(0,0)
        background.graphics.use(Resources.CharacterCanvas.toSprite())
        this.addChild(background)

        this.portrait = new Actor({
            pos: new Vector(60 + ((this.player === 2 || this.player === 4) * 190), 25 + ((this.player === 3 || this.player === 4) * 100))
        })
        this.portrait.anchor = new Vector(0,0)
        this.portrait.graphics.use(this.portraitSprites[this.player - 1])
        this.currentSpriteIndex = this.player - 1
        this.addChild(this.portrait)
        

        let text = new newText(`player${this.player} connected`, new Vector(70 + ((this.player === 2 || this.player === 4) * 190), 10 + ((this.player === 3 || this.player === 4) * 100)))
        this.addChild(text)
    }

    changePortrait(changeIndex) {
        this.currentSpriteIndex += changeIndex;
        if (this.currentSpriteIndex > this.portraitSprites.length - 1) {
            this.currentSpriteIndex = 0
        }
        if (this.currentSpriteIndex < 0) {
            this.currentSpriteIndex = this.portraitSprites.length - 1
        }
        this.portrait.graphics.use(this.portraitSprites[this.currentSpriteIndex])
    }

    onPreUpdate() {
        this.changePortrait(Math.round(this.engine.mainController.player1.getXAxis()))
    }
}