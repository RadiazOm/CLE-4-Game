import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import skiImage from "../images/Snowboarder.png"
import hertMapImage from "../images/hertenslepermap.png"
import cursorImage from "../images/cursor.png"
import deerImage from "../images/deer.png"
import cageImage from "../images/cage.png"
import fontMap from "../images/tilemap_packed_font.png"


const Resources = {
  Dino: new ImageSource(dinoImage),
  Snowboard: new ImageSource(skiImage),
  hertMap: new ImageSource(hertMapImage),
  Cursor: new ImageSource(cursorImage),
  Deer: new ImageSource(deerImage),
  Cage: new ImageSource(cageImage),
  Fontmap: new ImageSource(fontMap),
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.Snowboard,
  Resources.hertMap,
  Resources.Cursor,
  Resources.Deer,
  Resources.Cage,
  Resources.Fontmap
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
