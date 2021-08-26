import { RippleDirective } from "./ripple";
import { TiltDirective } from "./tilt";

export const directives = [
  new TiltDirective().Entry(),
  new RippleDirective().Entry(),
];
