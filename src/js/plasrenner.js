/*
PSUEDO CODE

Toon 4 karakters
    Toon speler 1
    Toon speler 2
    Toon Speler 3
    Toon Speler 4

Begin met aftellen

if aftellen = 0
    toon "GO"

Als speler 1 op 'x' klikt
    laat speler 1's karakter 1 naar voor gaan
    voeg 1 toe aan wincounter van speler 1
Als speler 2 op 'x' klikt
    laat speler 2's karakter 1 naar voor gaan
    voeg 1 toe aan wincounter van speler 2
Als speler 3 op 'x' klikt
    laat speler 3's karakter 1 naar voor gaan
    voeg 1 toe aan 'wincounter' van speler 3
Als speler 4 op 'x' klikt
    laat speler 4's karakter 1 naar voor gaan
    voeg 1 toe aan wincounter van speler 4

if wincounter van speler !!! = 100
    sla speler !!! op in array
    stop inputs van speler !!!
if array = 3
    stop alle spelers inputs
    ga naar scoreboard

*/
import '../css/style.css'
import { Actor, Engine, Vector, Label, FontUnit, Font} from "excalibur"
import { Resources, ResourceLoader } from './loader.js'
import { GansWit } from './control'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const dino = new Actor()
        //const plasrennerBackground = new Actor()
        const gansWit = new GansWit()
        dino.graphics.use(Resources.Dino.toSprite())
        //plasrennerBackground.graphics.use(Resources.plasrennerBackground.toSprite())
        gansWit.graphics.use(Resources.GansWit.toSprite())


        dino.pos = new Vector(400, 300)
        //plasrennerBackground.pos = new Vector (400, 300)
        gansWit.pos = new Vector (100, 100)
        //dino.vel = new Vector(-10,0)
        /*if (
            engine.input.keyboard.isHeld(ex.Input.Keys.W) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Up)
          ) {
            dino.pos = new Vector (400, 300)
            //dino._moveForward()
            console.log("Het is gebeurd")
          }*/
        //this.add(plasrennerBackground)
        //this.add(dino)
        this.add(gansWit)


        const label = new Label({
            text: 'FINISH!',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
            
        })
        this.add(label)
        



        /*const otherDino = new Actor()
        otherDino.graphics.use(Resources.Fish.toSprite())
        otherDino.pos = new Vector(500, 600)
        otherDino.vel = new Vector(-11,0)
        this.add(otherDino)
*/
    }
}

new Game()