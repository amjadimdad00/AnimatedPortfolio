declare module "gsap-trial/SplitText" {
  export default class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}
