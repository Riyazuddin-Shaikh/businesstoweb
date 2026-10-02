"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import "./A-home.css";

export default function AboutBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    let ctx;

    const runAnimations = () => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
          ".btw-reveal-text",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, stagger: 0.1 }
        )
        .fromTo(
          ".btw-studio-frame",
          { scale: 0.96, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.3 },
          "-=0.7"
        )
        .fromTo(
          ".btw-meta-col",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
          "-=0.8"
        );
      }, bannerRef);
    };

    // Agar aapka preloader window ya custom event dispatch karta hai, toh ye sunega:
    const handlePreloaderDone = () => {
      runAnimations();
    };

    // Agar preloader already khatam ho chuka ho ya event na ho, toh fallback ke liye 
    // thoda delay ya direct run kar sakte hain. Agar aap preloader trigger use karte hain, 
    // toh window.addEventListener("preloaderComplete", ...) trigger kar sakte hain.
    window.addEventListener("preloaderComplete", handlePreloaderDone);

    // Fallback timeragar preloader event trigger na ho toh 100ms baad animation chal jaye
    const fallbackTimer = setTimeout(() => {
      if (!ctx) runAnimations();
    }, 300);

    return () => {
      window.removeEventListener("preloaderComplete", handlePreloaderDone);
      clearTimeout(fallbackTimer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section className="btw-about-banner" ref={bannerRef}>
      <div className="btw-container">
        
        {/* Top Header Row / Editorial Tag */}
        <div className="btw-reveal-text btw-top-meta">
          <span className="btw-studio-status">
            <span className="live-dot" />
            STUDIO ARCHITECTURE &bull; 2026
          </span>
          <span className="btw-location">NEW DELHI / GLOBAL</span>
        </div>

        {/* Main Massive Editorial Hero */}
        <div className="btw-hero-grid">
          <div className="btw-left-content">
            <h1 className="btw-reveal-text btw-main-title">
              Engineered <br />
              <span>without templates.</span>
            </h1>
          </div>
          <div className="btw-right-desc">
            <p className="btw-reveal-text btw-lead-text">
              We operate at the intersection of high-performance engineering and elite visual design. Every web application we build is 100% custom-coded using <strong>React, Next.js, and GSAP</strong>—crafted specifically for brands that refuse to blend in.
            </p>
          </div>
        </div>

        {/* Cinematic Visual Studio Frame */}
        <div className="btw-studio-frame">
          <div className="btw-img-container">
            <Image 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85" 
              alt="BusinessToWeb High-End Engineering" 
              fill
              sizes="100vw"
              priority
              className="btw-hero-img"
            />
          </div>
          <div className="btw-frame-overlay-text">
            <span>RAW CODE CRAFTSMANSHIP</span>
            <span>0% BLOAT &bull; 100% SPEED</span>
          </div>
        </div>

        {/* Bottom Technical Specifications Bar */}
        <div className="btw-specs-grid">
          <div className="btw-meta-col">
            <span className="spec-label">01 / STACK</span>
            <h4>Next.js & React Core</h4>
            <p>Scalable server-side rendering architecture optimized for core web vitals.</p>
          </div>
          <div className="btw-meta-col">
            <span className="spec-label">02 / MOTION</span>
            <h4>Cinematic GSAP Pipelines</h4>
            <p>Fluid, buttery-smooth physics-based scrolling and custom interactions.</p>
          </div>
          <div className="btw-meta-col">
            <span className="spec-label">03 / EXECUTION</span>
            <h4>Direct Engineering</h4>
            <p>Zero middle-men. You collaborate directly with the core architect.</p>
          </div>
        </div>

      </div>
    </section>
  );
}