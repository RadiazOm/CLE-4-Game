import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import fishImage from "../images/fish.png";


const Resources = {
  Fish: new ImageSource(fishImage),
};
const ResourceLoader = new Loader([
  Resources.Fish,
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
// ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
