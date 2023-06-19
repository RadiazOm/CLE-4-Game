import { ImageSource, Sound, Resource, Loader , Color} from "excalibur";
import dinoImage from "../images/dino.jpg";
import cursorFurkanImage from "../images/Cursor_Furkan.png";
import backgroundCatcherImage from "../images/background.png";
import floatingGooseImage from "../images/gansWitDrijven.png";


const Resources = {
  Dino: new ImageSource(dinoImage),
  CursorFurkan: new ImageSource(cursorFurkanImage),
  BackgroundCatcher: new ImageSource(backgroundCatcherImage),
  GooseFloating: new ImageSource(floatingGooseImage),

 
};
const ResourceLoader = new Loader([
  Resources.Dino,
  Resources.CursorFurkan,
  Resources.BackgroundCatcher,
  Resources.GooseFloating,
]);

// ResourceLoader.logo = titleImage
// ResourceLoader.logoWidth = 256
// ResourceLoader.logoHeight = 256
// ResourceLoader.backgroundColor = Color.fromHex('#eef8fe')
// ResourceLoader.loadingBarColor = Color.Black
// ResourceLoader.suppressPlayButton = true

export { Resources, ResourceLoader };
