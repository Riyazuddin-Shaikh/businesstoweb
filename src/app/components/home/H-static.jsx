"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./H-static.css";

const STATS_DATA = [
  {
    number: "100%",
    label: "Custom Code & Architecture",
    sub: "NO TEMPLATES, BUILT FROM SCRATCH",
  },
  {
    number: "99+",
    label: "Performance & SEO Score",
    sub: "LIGHTHOUSE OPTIMIZED BUILDS",
  },
  {
    number: "24/7",
    label: "Direct Founder Support",
    sub: "DEDICATED HANDS-ON EXECUTION",
  },
  {
    number: "2.0x",
    label: "Faster Load Times",
    sub: "NEXT.JS & TAILWIND EXPERTISE",
  },
];

export default function Static() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const header = section.querySelector(".btw-static-header");
      const cards = section.querySelectorAll(".btw-static-card");

      if (reduceMotion) {
        gsap.set([header, ...cards].filter(Boolean), {
          clearProps: "all",
        });
        return;
      }

      // Professional Scroll Timeline Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      if (header) {
        tl.fromTo(
          header,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
        );
      }

      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="btw-static-section" id="stats">
      {/* Fixed Background Image with Dark Gradient Overlay */}
      <div className="btw-static-bg-wrap">
        <div className="btw-static-overlay" />
      </div>

      <div className="btw-static-container">
        
        {/* Header Area */}
        <div className="btw-static-header">
          <div className="btw-static-badge">
            <span className="badge-line" />
            THE [H] ADVANTAGE
          </div>
          <h2 className="btw-static-title">
            Engineered for speed, <br />
            <em>built without shortcuts.</em>
          </h2>
          <p className="btw-static-desc">
            We don’t rely on heavy templates or bloated plugins. Every line of code is custom-crafted to ensure lightning-fast performance and top-tier SEO rankings.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="btw-static-grid">
          {STATS_DATA.map((item, index) => (
            <div key={index} className="btw-static-card">
              <div className="card-top-line" />
              <div className="btw-static-num">{item.number}</div>
              <div className="btw-static-label">{item.label}</div>
              <div className="btw-static-sub">{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}