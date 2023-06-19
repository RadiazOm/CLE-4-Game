import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import plasrennerBackgroundImage from "../images/plasrennerBackground.png";
import gansWitImage from "../images/gansWit.png";



const Resources = {
  Dino: new ImageSource(dinoImage),
  PlasrennerBackground: new ImageSource(plasrennerBackgroundImage),
  GansWit: new ImageSource(gansWitImage)
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.PlasrennerBackground,
  Resources.GansWit
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
// ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
