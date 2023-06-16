import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import skiImage from "../images/Snowboarder.png"
import hertMapImage from "../images/hertenslepermap.png"
import cursorImage from "../images/cursor.png"
import deerImage from "../images/deer.png"


const Resources = {
  Dino: new ImageSource(dinoImage),
  Snowboard: new ImageSource(skiImage),
  hertMap: new ImageSource(hertMapImage),
  Cursor: new ImageSource(cursorImage),
  Deer: new ImageSource(deerImage)
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.Snowboard,
  Resources.hertMap,
  Resources.Cursor,
  Resources.Deer
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
// ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
