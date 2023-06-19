import { Actor, Engine, Vector, Label, Color, Font, FontUnit, TileMap, DisplayMode, FrameStats, SpriteSheet, SpriteFont, ScreenElement } from "excalibur";
import { Resources, ResourceLoader } from "./loader.js";


export class UI extends ScreenElement { 

    spriteFont;

    constructor() {
        super({
            z: 0
        })
        this.z =  0

        const spriteFontSheet = SpriteSheet.fromImageSource({
            image: Resources.Fontmap,
            grid: {
                rows: 4,
                columns: 12,
                spriteWidth: 16,
                spriteHeight: 16,
            },
        })

        this.spriteFont = new SpriteFont({
            alphabet: '0123456789: ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%+-*/=.',
            caseInsensitive: true,
            spriteSheet: spriteFontSheet,
            spacing: 0,
        })
    }
}