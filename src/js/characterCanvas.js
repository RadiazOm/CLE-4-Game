import { Actor, Vector, Timer, Axis } from "excalibur"
import { UI } from "./UI";
import { Resources } from "./loader";
import { newText } from "./text";

export class CharacterCanvas extends UI {

    engine;
    player;
    axis;
    portraitSprites;
    honkSprites;
    portrait;
    currentSpriteIndex;
    cooldown = 0;
    ready = false;
    readyLabel;


    constructor(player) {
        super()
        this.player = player
        this.portraitSprites = [Resources.BluePortrait.toSprite(), Resources.YellowPortrait.toSprite(), Resources.GreenPortrait.toSprite(), Resources.RedPortrait.toSprite()]
        this.honkSprites = [Resources.BlueHonk.toSprite(), Resources.YellowHonk.toSprite(), Resources.GreenHonk.toSprite(),Resources.RedHonk.toSprite(),]
    }

    onInitialize(engine) {
        this.engine = engine
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

        this.readyLabel = new newText('', new Vector(85, 70))
        background.addChild(this.readyLabel)
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

    onPostUpdate() {
        if (this.player === 1 && typeof this.engine.mainController.player1 !== 'undefined') {
            this.axis = Math.round(this.engine.mainController.player1.getXAxis())
        }
        if (this.player === 2 && typeof this.engine.mainController.player2 !== 'undefined') {
            this.axis = Math.round(this.engine.mainController.player2.getXAxis())
        }
        if (this.player === 3 && typeof this.engine.mainController.player3 !== 'undefined') {
            this.axis = Math.round(this.engine.mainController.player3.getXAxis())

        }
        if (this.player === 4 && typeof this.engine.mainController.player4 !== 'undefined') {
            this.axis = Math.round(this.engine.mainController.player4.getXAxis())
        }
    }

    onPreUpdate() {
        if (this.ready) {
            return;
        }
        if (this.cooldown <= 0 && this.axis) {
            this.changePortrait(this.axis)
            this.cooldown = 30
        } else {
            this.cooldown--
        }
    }

    honk() {
        Resources.Honk.play()
        let quack = new newText('quack', new Vector(50 + ((this.player === 2 || this.player === 4) * 190), 30 + ((this.player === 3 || this.player === 4) * 100)))
        this.portrait.graphics.use(this.honkSprites[this.currentSpriteIndex])
        this.addChild(quack)
        let timer = new Timer({
            fcn: () => {
                this.portrait.graphics.use(this.portraitSprites[this.currentSpriteIndex])
                this.removeChild(quack)
                this.engine.currentScene.remove(timer)
            },
            interval: 200,
            repeats: false
        })
        timer.start()
        this.engine.currentScene.add(timer)
    }

    select() {
        for (const colour of this.engine.currentScene.selectedColours) {
            console.log(colour + ' ' + this.currentSpriteIndex)
            if (colour === this.currentSpriteIndex) {
                return;
            }
        }
        this.engine.currentScene.selectedColours[this.player - 1] = this.currentSpriteIndex
        this.ready = true
        this.readyLabel.changeText('Ready!')
        console.log('colour selected!')
    }

    deselect() {
        this.ready = false
        this.readyLabel.changeText('')
        this.engine.currentScene.selectedColours[this.player - 1] = null
    }
}