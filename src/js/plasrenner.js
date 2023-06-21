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
import { Actor, Engine, Vector, Label, FontUnit, Font, DisplayMode, Scene} from "excalibur"
import { Resources, ResourceLoader } from './loader.js'
import { GansWit } from './control'

export class PlasRenner extends Scene {

    engine;
    ganzen= [];

    constructor() {
        super()
    }

    onInitialize(engine) {
        console.log("start de game!")
        this.engine = engine

        const plasrennerBackground = new Actor()
        plasrennerBackground.graphics.use(Resources.PlasrennerBackground.toSprite())
        plasrennerBackground.pos = new Vector(this.engine.screen.drawWidth / 2, this.engine.screen.drawHeight / 2)
        this.add(plasrennerBackground)

        for (let i = 0; i < 4; i++) {
            const gansWit = new GansWit()
            gansWit.graphics.use(Resources.GansWit.toSprite())
            gansWit.pos = new Vector (32, 30 + (39 * i))
            this.ganzen.push(gansWit)
            this.add(gansWit)
        }
    }

    Button0(player) {
        console.log('kjdfgkj')
        this.ganzen[player - 1].press()
    }
}


        // const label = new Label({
        //     text: 'FINISH!',
        //     pos: new Vector(100, 100),
        //     font: new Font({
        //         family: 'impact',
        //         size: 24,
        //         unit: FontUnit.Px
        //     })
            
        // })
        // this.add(label)