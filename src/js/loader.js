import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import gooseFurkanImage from "../images/goose_Furkan.png";


const Resources = {
  Dino: new ImageSource(dinoImage),
  GooseFurkan: new ImageSource(gooseFurkanImage),
 
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.GooseFurkan,
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
// ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
