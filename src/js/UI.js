import { Actor, Engine, Vector, Label, Color, Font, FontUnit, TileMap, DisplayMode, FrameStats, SpriteSheet, SpriteFont, ScreenElement } from "excalibur";
import { Resources, ResourceLoader } from "./loader.js";


export class UI extends ScreenElement { 

    spriteFont;
    tinyFont;

    constructor() {
        super({
            z: 0
        })
        this.z =  0

        const spriteFontSheet = SpriteSheet.fromImageSource({
            image: Resources.Fontmap,
            grid: {
                rows: 5,
                columns: 12,
                spriteWidth: 16,
                spriteHeight: 16,
            },
        })

        this.spriteFont = new SpriteFont({
            alphabet: '0123456789: ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%+-*/=.[]{}^()',
            caseInsensitive: true,
            spriteSheet: spriteFontSheet,
            spacing: 0
        })

        const SpriteTinySheet = SpriteSheet.fromImageSource({
            image: Resources.TinyFontMap,
            grid: {
                rows: 4,
                columns: 13,
                spriteWidth: 7,
                spriteHeight: 9
            }
        })

        this.tinyFont = new SpriteFont({
            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ., :!()1234567890[]{}',
            caseInsensitive: true,
            spriteSheet: SpriteTinySheet,
            spacing: 0
        })
    }
}