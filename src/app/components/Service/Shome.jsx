"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import "./Shome.css";

export default function ServiceHome() {
  const compRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Timeline for smooth sequence animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-top",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(
        ".hero-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.4"
      )
      .fromTo(
        ".hero-side-copy",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".hero-bottom",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      // Simple parallax or fade for Intro section
      gsap.fromTo(
        ".service-intro .intro-content > *",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".service-intro",
            start: "top 80%",
          },
        }
      );
    }, compRef);

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, []);

  return (
    <main className="service-page" ref={compRef}>

      {/* ================= HERO ================= */}
      <section className="service-hero">
        <div className="service-container">

          <div className="hero-top">
            <span className="eyebrow">
              <span className="eyebrow-line"></span>
              DIGITAL AGENCY
            </span>

            <span className="hero-index">
              SERVICES / 01
            </span>
          </div>

          <div className="hero-heading-wrap">
            <h1 className="hero-heading">
              Digital
              <span className="heading-outline">
                experiences
              </span>
              <span className="heading-small">
                built to matter.
              </span>
            </h1>

            <div className="hero-side-copy">
              <p>
                We design and develop modern digital experiences for brands
                that want to look different, perform better and grow faster.
              </p>

            <a
  href="https://wa.me/919654151216?text=Hello,%20I%20am%20looking%20to%20get%20a%20professional%20website%20developed%20for%20my%20business.%20I%20would%20like%20to%20discuss%20the%20project%20details,%20timeline,%20and%20pricing.%20Please%20connect%20with%20me."
  target="_blank"
  rel="noopener noreferrer"
  className="hero-link"
>
  <span>Discuss a project</span>
  <span className="hero-link-arrow">↗</span>
</a>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-statement">
              <span>01</span>
              <p>
                Strategy <b>+</b> Design <b>+</b> Technology
              </p>
            </div>

            <div className="hero-scroll">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-arrow">↓</span>
            </div>
          </div>

        </div>

        <div className="hero-shape hero-shape-one" aria-hidden="true" />
        <div className="hero-shape hero-shape-two" aria-hidden="true" />
      </section>

      {/* ================= INTRO (WHAT WE DO) ================= */}
      <section className="service-intro">
        <div className="service-container">
          <div className="intro-label">
            WHAT WE DO
          </div>

          <div className="intro-content">
            <h2>
              Not just websites.
              <br />
              <span>
                We build digital presence.
              </span>
            </h2>

            <p>
              Your website is often the first interaction people have with
              your brand. We combine thoughtful design, clean development
              and business strategy to make that interaction count.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}