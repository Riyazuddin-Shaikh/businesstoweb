"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./BackToTop.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      opacity: show ? 1 : 0,
      y: show ? 0 : 15,
      scale: show ? 1 : 0.9,
      duration: 0.45,
      ease: "power3.out",
      pointerEvents: show ? "auto" : "none",
    });
  }, [show]);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      className="btw-backtop"
      onClick={goTop}
      type="button"
      aria-label="Back to top"
    >
      {/* WORKSHOP ICON */}
      <span className="btw-workshop-icon">
        <span className="btw-tool-handle" />
        <span className="btw-tool-head" />
      </span>

      {/* ARROW */}
      <span className="btw-top-arrow">
        <span className="btw-arrow-line" />
        <span className="btw-arrow-left" />
        <span className="btw-arrow-right" />
      </span>

      <span className="btw-top-label">TOP</span>
    </button>
  );
}