import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import skiImage from "../images/Snowboarder.png"


const Resources = {
  Dino: new ImageSource(dinoImage),
  Snowboard: new ImageSource(skiImage)
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.Snowboard
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
// ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
