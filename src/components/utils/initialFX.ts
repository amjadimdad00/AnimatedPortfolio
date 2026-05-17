import SplitText from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

let landingText: SplitText | null = null;
let landingText2: SplitText | null = null;
let landingText3: SplitText | null = null;
let landingText4: SplitText | null = null;
let landingText5: SplitText | null = null;

export function initialFX() {
  const main = document.getElementsByTagName("main")[0];
  if (!main) return;

  document.body.style.overflowY = "auto";
  smoother?.paused(false);

  main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const TextProps = {
    type: "chars,lines",
    linesClass: "split-line",
  };

  // ---------------------------
  // FIRST SPLIT (HERO TEXT)
  // ---------------------------
  landingText = new SplitText(".landing-info", TextProps);

  if (landingText?.chars?.length) {
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      },
    );
  }

  // ---------------------------
  // SECOND TEXT BLOCK
  // ---------------------------
  landingText2 = new SplitText(".landing-h2-info", TextProps);

  if (landingText2?.chars?.length) {
    gsap.fromTo(
      landingText2.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      },
    );
  }

  // static fade elements
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    },
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    },
  );

  // ---------------------------
  // LOOP TEXT SETUP
  // ---------------------------
  landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  landingText4 = new SplitText(".landing-h2-1", TextProps);
  landingText5 = new SplitText(".landing-h2-2", TextProps);

  if (landingText2 && landingText3) {
    LoopText(landingText2, landingText3);
  }

  if (landingText4 && landingText5) {
    LoopText(landingText4, landingText5);
  }
}

// ---------------------------
// LOOP ANIMATION
// ---------------------------
function LoopText(Text1: SplitText, Text2: SplitText) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
    },
    0,
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      1,
    )
    .to(
      Text1.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      delay,
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
      },
      delay2,
    );
}
