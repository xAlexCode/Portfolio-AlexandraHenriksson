import "./sass/style.scss";
import { initFullscreen } from "./scripts/fullscreen";
import { initHamburgerMenu } from "./scripts/hamburgerMenu";
import { renderProjects } from "./scripts/renderProjects";
import { renderSkills } from "./scripts/renderSkills";

initFullscreen();
initHamburgerMenu();
renderSkills();
renderProjects();
