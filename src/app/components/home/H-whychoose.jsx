"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./H-whychoose.css";

const REASONS = [
  {
    number: "01",
    title: "Strategic Business Thinking",
    text: "We align your website directly with your business goals, target audience psychology, and post-launch conversion workflows.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    tag: "BUSINESS STRATEGY",
  },
  {
    number: "02",
    title: "Purposeful Modern Design",
    text: "Every visual and structural decision has intent. We create frictionless, high-end interfaces that amplify your brand authority.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    tag: "UI / UX EXCELLENCE",
  },
  {
    number: "03",
    title: "Engineered For Real People",
    text: "Lightning-fast, responsive experiences across phones, tablets, and desktops ensuring your visitors never struggle to navigate.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tag: "USER EXPERIENCE",
  },
  {
    number: "04",
    title: "Long-Term Scalability",
    text: "We build clean, robust foundations designed to give your digital presence room to evolve as your business grows and scales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tag: "FUTURE PROOF",
  },
];

export default function WhyChoose() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const header = section.querySelector(".btw-why-header");
      const intro = section.querySelector(".btw-why-intro");
      const cards = section.querySelectorAll(".btw-why-card");
      const bottom = section.querySelector(".btw-why-bottom");

      if (reduceMotion) {
        gsap.set([header, intro, bottom, ...cards].filter(Boolean), {
          clearProps: "all",
        });
        return;
      }

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
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      if (intro) {
        tl.fromTo(
          intro,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.4"
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
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      if (bottom) {
        tl.fromTo(
          bottom,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );
      }
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="btw-why-section" id="why-us">
      {/* Background Vertical Line Pattern matching service section */}
      <div className="btw-why-bg-line" />

      <div className="btw-why-container">
        {/* Header Area */}
        <div className="btw-why-header">
          <div className="btw-why-label">
            <span className="btw-why-label-line" />
            WHY BUSINESSTOWEB
          </div>
          <div className="btw-why-count">04 / STANDARDS</div>
        </div>

        {/* Intro Grid */}
        <div className="btw-why-intro">
          <div className="btw-why-intro-title">
            <h2>
              Your website should work <br />
              <em>as hard as you do.</em>
            </h2>
          </div>
          <div className="btw-why-intro-copy">
            <p>
              We merge high-end creative direction with high-performance engineering to build digital assets that separate market leaders from the noise.
            </p>
            <span>CORE ARCHITECTURE</span>
          </div>
        </div>

        {/* Feature Cards Stack */}
        <div className="btw-why-list">
          {REASONS.map((item, index) => (
            <div 
              key={item.number} 
              className={`btw-why-card ${index % 2 === 1 ? "reversed" : ""}`}
            >
              {/* Content Box */}
              <div className="btw-why-details">
                <span className="btw-why-tag">{item.tag}</span>
                <div className="btw-why-title-row">
                  <h3>{item.title}</h3>
                </div>
                <p className="btw-why-description">{item.text}</p>
                
                <div className="btw-why-meta">
                  <span>BUSINESSTOWEB STANDARD</span>
                  <span>PERFORMANCE FIRST</span>
                </div>

                <div className="btw-why-actions">
                 <a
  href="https://wa.me/919654151216?text=Hello,%20I%20am%20looking%20to%20get%20a%20professional%20website%20developed%20for%20my%20business.%20I%20would%20like%20to%20discuss%20the%20project%20details,%20timeline,%20and%20pricing.%20Please%20connect%20with%20me."
  target="_blank"
  rel="noopener noreferrer"
  className="btw-why-book"
>
  <span>Initiate Project</span> 
  <span className="btw-why-arrow">↗</span>
</a>
                </div>
              </div>

              {/* Next/Image Container */}
              <div className="btw-why-image">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority={index === 0}
                />
                <div className="btw-why-image-overlay" />
                <span className="btw-why-number">{item.number}</span>
                <span className="btw-why-category">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="btw-why-bottom">
          <span>EXCELLENCE IN EXECUTION</span>
          <div className="btw-why-bottom-line" />
          <span>EST. 2026</span>
        </div>

      </div>
    </section>
  );
}