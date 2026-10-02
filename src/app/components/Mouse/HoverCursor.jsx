
"use client";

import { useEffect, useRef } from "react";
import "./HoverCursor.css";

export default function HoverCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;

    if (!cursor || !follower || !label) return;

    const isTouch =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouch) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;

    let raf;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      raf = requestAnimationFrame(animate);
    };

    const enter = () => {
      document.body.classList.add("btw-cursor-active");
    };

    const leave = () => {
      document.body.classList.remove("btw-cursor-active");
    };

    const handleHover = (e) => {
      const target = e.target.closest(
        "a, button, [data-cursor], input, textarea, select"
      );

      if (target) {
        const text = target.getAttribute("data-cursor");

        follower.classList.add("btw-cursor-hover");

        if (text) {
          label.textContent = text;
          label.classList.add("btw-cursor-label-show");
        } else {
          label.classList.remove("btw-cursor-label-show");
        }
      } else {
        follower.classList.remove("btw-cursor-hover");
        label.classList.remove("btw-cursor-label-show");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);
    document.documentElement.addEventListener("mouseenter", enter);
    document.documentElement.addEventListener("mouseleave", leave);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
      document.documentElement.removeEventListener("mouseenter", enter);
      document.documentElement.removeEventListener("mouseleave", leave);

      cancelAnimationFrame(raf);
      document.body.classList.remove("btw-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="btw-cursor-dot">
        <span />
      </div>

      <div ref={followerRef} className="btw-cursor-follower">
        <div className="btw-cursor-inner">
          <span className="btw-cursor-arrow">↗</span>
          <span ref={labelRef} className="btw-cursor-label" />
        </div>
      </div>
    </>
  );
}

