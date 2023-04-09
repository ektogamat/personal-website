import { motion } from "framer-motion";
// import SmoothScroll from "./SmoothScroll";
import React, { useEffect, useCallback, useRef } from "react";
import Lenis from "@studio-freight/lenis";

let lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  mouseMultiplier: 1
});

lenis.start();

export default function Overlay() {
  const rafID = useRef();

  const raf = useCallback((time) => {
    lenis.raf(time);
    rafID.current = requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    rafID.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafID.current);
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        mouseMultiplier: 1
      });
      lenis.stop();
    };
  }, [raf]);

  return (
    // <SmoothScroll>
    <div className="container">
      <motion.header
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 60, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 6,
          delay: 6
        }}
      >
        <h3>ANDERSONMANCINI.DEV</h3>
        <motion.button
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-120%", opacity: 0 }}
          transition={{
            delay: 2.6
          }}
          className="ctaButton contact"
          onClick={() => {
            window.open("https://discord.com/invite/hHdDx4GuF4", "tab");
          }}
        >
          GET IN TOUCH
        </motion.button>
        <img src="menu.svg" className="menu" alt="menu" />
      </motion.header>
      <section className="overlay">
        <motion.h1
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-100%", opacity: 0 }}
          transition={{
            duration: 1.8,
            delay: 2.5
          }}
        >
          Unlocking your hidden Threejs super powers
        </motion.h1>
        <motion.button
          animate={{ translateX: "0%", opacity: 1 }}
          initial={{ translateX: "-120%", opacity: 0 }}
          transition={{
            delay: 2.6
          }}
          className="ctaButton"
          onClick={() => {
            window.open("https://discord.com/invite/hHdDx4GuF4", "tab");
          }}
        >
          BROWSE MY RECENT WORK
        </motion.button>
      </section>

      <section className="works">
        <h3>RECENT WORKS</h3>
        <div className="gallery-container">
          <div className="row-2">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/windland.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/jewelry.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/vrseat.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/gsi.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/fgr.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/real_estate.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/archiviz.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/canon.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-2">
            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/watch.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/dna.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/haunted_house.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/vitamina.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/houses.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/piball.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/r3f_course.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/wax.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-2">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/cosmetics.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/graces.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/skull.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/eq_studios.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/threejs_talk.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/eqmusic.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/jiotto.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/ola.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>
        </div>
      </section>

      <footer>Website under development. Tap anywhere to change colors</footer>
    </div>
    // </SmoothScroll>
  );
}
