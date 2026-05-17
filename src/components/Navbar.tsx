import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import Lenis from "lenis";
import "./styles/Navbar.css";

export let smoother: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    // -------------------------
    // Smooth Scroll (SAFE)
    // -------------------------
    smoother = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      smoother?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    smoother.scrollTo(0);

    // -------------------------
    // NAV LINK SCROLLING
    // -------------------------
    const links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          const section = element.getAttribute("data-href");

          if (section) {
            smoother?.scrollTo(section);
          }
        }
      });
    });

    // -------------------------
    // CLEANUP (IMPORTANT)
    // -------------------------
    return () => {
      smoother?.destroy();
      smoother = null;
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AI
        </a>

        <a
          href="mailto:amjadabro598@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          amjadabro598@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
