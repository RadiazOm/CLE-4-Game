import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import skiImage from "../images/Snowboarder.png"
import afvalImage from "../images/backgrounds/backgroundAfval.png"


const Resources = {
  Dino: new ImageSource(dinoImage),
  Snowboard: new ImageSource(skiImage),
  BackgroundAfval: new ImageSource(afvalImage)
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.Snowboard,
  Resources.BackgroundAfval
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
// ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
