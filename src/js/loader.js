import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
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
import portraitRedHonkImage from "../images/PortraitRedHonk.png"
import portraitBlueHonkImage from "../images/PortraitBlueHonk.png"
import portraitGreenHonkImage from "../images/PortraitGreenHonk.png"
import portraitYellowHonkImage from "../images/PortraitYellowHonk.png"
import plasrennerBackgroundImage from "../images/plasrennerBackground.png";
import gansWitImage from "../images/gansWit.png";
import titleImage from "../images/GanzenPartyTitle.png"

import hertenMusic from "../sounds/fight.wav"
import rennerMusic from "../sounds/8-bit_mechanical_complex.mp3"
import afvalMusic from "../sounds/one_0.mp3"
import gooseMusic from "../sounds/bgm_action_3.mp3"
import characterMusic from "../sounds/8bit-Bossa.mp3"
import endMusic from "../sounds/8bitvictory.ogg"
import explanationMusic from "../sounds/happy.mp3"
import select from "../sounds/blipSelect.wav"
import menuSelect from "../sounds/menuSelect.wav"
import hertPickup from "../sounds/hertPickup.wav"
import hertDrop from "../sounds/hertDrop.wav"
import readyUp from "../sounds/Ready.wav"
import kwak from "../sounds/cannard.mp3"
import honk from "../sounds/goose-honk.mp3"



const Resources = {
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
  RedHonk: new ImageSource(portraitRedHonkImage),
  BlueHonk: new ImageSource(portraitBlueHonkImage),
  GreenHonk: new ImageSource(portraitGreenHonkImage),
  YellowHonk: new ImageSource(portraitYellowHonkImage),
  PlasrennerBackground: new ImageSource(plasrennerBackgroundImage),
  GansWit: new ImageSource(gansWitImage),
  Title: new ImageSource(titleImage),

  CharacterMusic: new Sound(characterMusic),
  EndMusic: new Sound(endMusic),
  HertenMusic: new Sound(hertenMusic),
  RennerMusic: new Sound(rennerMusic),
  GooseMusic: new Sound(gooseMusic),
  AfvalMusic: new Sound(afvalMusic),
  ExplanationMusic: new Sound(explanationMusic),
  MenuSelect: new Sound(menuSelect),
  HertPickup: new Sound(hertPickup),
  HertDrop: new Sound(hertDrop),
  Ready: new Sound(readyUp),
  SelectSound: new Sound(select),
  Kwak: new Sound(kwak),
  Honk: new Sound(honk)
};
const ResourceLoader = new Loader([
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
  Resources.GooseFloating,
  Resources.CharacterCanvas,
  Resources.RedPortrait,
  Resources.BluePortrait,
  Resources.GreenPortrait,
  Resources.YellowPortrait,
  Resources.RedHonk,
  Resources.BlueHonk,
  Resources.GreenHonk,
  Resources.YellowHonk,
  Resources.PlasrennerBackground,
  Resources.GansWit,
  Resources.Title,

  Resources.Kwak,
  Resources.Honk,
  Resources.CharacterMusic,
  Resources.SelectSound,
  Resources.MenuSelect,
  Resources.HertPickup,
  Resources.HertDrop,
  Resources.Ready,
  Resources.HertenMusic,
  Resources.RennerMusic,
  Resources.AfvalMusic,
  Resources.GooseMusic,
  Resources.EndMusic,
  Resources.ExplanationMusic,
]);


ResourceLoader.suppressPlayButton = true
ResourceLoader.logo = titleImage
ResourceLoader.logoWidth = 90
ResourceLoader.logoHeight = 64
ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
ResourceLoader.loadingBarColor = Color.Black

export { Resources, ResourceLoader };
