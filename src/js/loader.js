import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import skiImage from "../images/Snowboarder.png"
import afvalImage from "../images/backgrounds/backgroundAfval.png"
import banaanImage from "../images/sprites/banaan.png"
import fontmapImage from "../images/tilemap_packed_font.png"
import hertMapImage from "../images/hertenslepermap.png"
import cursor1Image from "../images/cursor.png"
import cursor2Image from "../images/cursor2.png"
import cursor3Image from "../images/cursor3.png"
import cursor4Image from "../images/cursor4.png"
import deerImage from "../images/deer.png"
import cageImage from "../images/cage.png"
import fontMap from "../images/tilemap_packed_font.png"
import cursorFurkanImage from "../images/Cursor_Furkan.png";
import backgroundCatcherImage from "../images/background.png";
import floatingGooseImage from "../images/gansWitDrijven.png";
import characterImage from "../images/characterCanvas.png"
import portraitRedImage from "../images/goosePortraitRed.png"
import portraitBlueImage from "../images/goosePortrait.png"
import portraitGreenImage from "../images/goosePortraitgreen.png"
import portraitYellowImage from "../images/goosePortraityellow.png"
import plasrennerBackgroundImage from "../images/plasrennerBackground.png";
import gansWitImage from "../images/gansWit.png";

const Resources = {
  Dino: new ImageSource(dinoImage),
  Snowboard: new ImageSource(skiImage),
  BackgroundAfval: new ImageSource(afvalImage),
  Banaan: new ImageSource(banaanImage),
  Fontmap: new ImageSource(fontmapImage),
  hertMap: new ImageSource(hertMapImage),
  Cursor1: new ImageSource(cursor1Image),
  Cursor2: new ImageSource(cursor2Image),
  Cursor3: new ImageSource(cursor3Image),
  Cursor4: new ImageSource(cursor4Image),
  Deer: new ImageSource(deerImage),
  Cage: new ImageSource(cageImage),
  Fontmap: new ImageSource(fontMap),
  CursorFurkan: new ImageSource(cursorFurkanImage),
  BackgroundCatcher: new ImageSource(backgroundCatcherImage),
  GooseFloating: new ImageSource(floatingGooseImage),
  CharacterCanvas: new ImageSource(characterImage),
  RedPortrait: new ImageSource(portraitRedImage),
  BluePortrait: new ImageSource(portraitBlueImage),
  GreenPortrait: new ImageSource(portraitGreenImage),
  YellowPortrait: new ImageSource(portraitYellowImage),
  PlasrennerBackground: new ImageSource(plasrennerBackgroundImage),
  GansWit: new ImageSource(gansWitImage)
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.Snowboard,
  Resources.BackgroundAfval,
  Resources.Banaan,
  Resources.Fontmap,
  Resources.hertMap,
  Resources.Cursor1,
  Resources.Cursor2,
  Resources.Cursor3,
  Resources.Cursor4,
  Resources.Deer,
  Resources.Cage,
  Resources.Fontmap,
  Resources.CursorFurkan,
  Resources.BackgroundCatcher,
  Resources.GooseFloating,,
  Resources.CharacterCanvas,
  Resources.RedPortrait,
  Resources.BluePortrait,
  Resources.GreenPortrait,
  Resources.YellowPortrait,
  Resources.PlasrennerBackground,
  Resources.GansWit
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
