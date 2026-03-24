import "bootstrap/dist/js/bootstrap.bundle.min.js";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import initLangToggle from "./scripts/langToggle";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initLangToggle();

