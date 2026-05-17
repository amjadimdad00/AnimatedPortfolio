import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Tween;
  split?: any;
}

let lenis: any;

// optional smooth scroll (safe replacement for ScrollSmoother)
function initSmoothScroll() {
  import("lenis").then(({ default: Lenis }) => {
    lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  initSmoothScroll();

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play none none reverse";

  // cleanup old instances (important)
  function killOld(el: ParaElement) {
    if (el.anim) el.anim.kill();
    if (el.split) el.split.revert();
  }

  // -----------------------
  // PARAGRAPHS
  // -----------------------
  paras.forEach((para) => {
    para.classList.add("visible");
    killOld(para);

    para.split = new SplitType(para, {
      types: "lines,words",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          start: TriggerStart,
          toggleActions: ToggleAction,
        },
      },
    );
  });

  // -----------------------
  // TITLES
  // -----------------------
  titles.forEach((title) => {
    killOld(title);

    title.split = new SplitType(title, {
      types: "chars,lines",
    });

    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 60, rotate: 8 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          start: TriggerStart,
          toggleActions: ToggleAction,
        },
      },
    );
  });

  // IMPORTANT FIX: avoid infinite recursion
  ScrollTrigger.refresh();
}
