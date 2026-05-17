import gsap from "gsap";
import SplitType from "split-type";
import { smoother } from "../Navbar";

let landingText: any = null;
let landingText2: any = null;
let landingText3: any = null;
let landingText4: any = null;
let landingText5: any = null;

export function initialFX() {
  const main = document.getElementsByTagName("main")[0];
  if (!main) return;

  document.body.style.overflowY = "auto";
  smoother?.scrollTo(0);

  main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // ---------------------------
  // HERO TEXT
  // ---------------------------
  landingText = new SplitType(".landing-info", {
    types: "chars,lines",
  });

  if (landingText?.chars?.length) {
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.025,
        delay: 0.3,
      },
    );
  }

  // ---------------------------
  // SECOND BLOCK
  // ---------------------------
  landingText2 = new SplitType(".landing-h2-info", {
    types: "chars,lines",
  });

  if (landingText2?.chars?.length) {
    gsap.fromTo(
      landingText2.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.025,
        delay: 0.3,
      },
    );
  }

  // static fades
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
  // LOOP TEXTS
  // ---------------------------
  landingText3 = new SplitType(".landing-h2-info-1", {
    types: "chars,lines",
  });

  landingText4 = new SplitType(".landing-h2-1", {
    types: "chars,lines",
  });

  landingText5 = new SplitType(".landing-h2-2", {
    types: "chars,lines",
  });

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
function LoopText(Text1: any, Text2: any) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.inOut",
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
