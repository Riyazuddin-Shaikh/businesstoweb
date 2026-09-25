"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./H-Process.css";

const PROCESS = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience, goals and what your website needs to achieve.",
    tag: "UNDERSTAND",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Strategy",
    text: "We define the structure, content direction and user journey before the visual work begins.",
    tag: "PLAN",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Design",
    text: "We create a visual direction that feels distinctive, clear and aligned with your brand.",
    tag: "CREATE",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "Develop",
    text: "We turn the approved design into a fast, responsive and reliable digital experience.",
    tag: "BUILD",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "05",
    title: "Launch",
    text: "We test, polish and launch your website so everything is ready for real users.",
    tag: "DELIVER",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function OurProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const header = section.querySelector(".btw-process-header");
      const sideLabel = section.querySelector(".btw-process-side-label");
      const cards = section.querySelectorAll(".btw-process-card");
      const bottom = section.querySelector(".btw-process-bottom");

      if (reduceMotion) {
        gsap.set([header, sideLabel, bottom, ...cards].filter(Boolean), {
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

      if (sideLabel) {
        tl.fromTo(
          sideLabel,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5"
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
    <section ref={sectionRef} className="btw-process" id="process">
      <div className="btw-process-glow btw-process-glow-one" />
      <div className="btw-process-glow btw-process-glow-two" />

      <div className="btw-process-container">
        {/* HEADER */}
        <div className="btw-process-header">
          <div className="btw-process-heading">
            <div className="btw-process-eyebrow">
              <span />
              OUR PROCESS
            </div>

            <h2>
              Good websites
              <br />
              <em>start with a process.</em>
            </h2>
          </div>

          <div className="btw-process-intro">
            <div className="btw-process-intro-number">
              05 <small>STEPS</small>
            </div>

            <p>
              From the first idea to the final launch, every stage is planned to
              keep the project focused, clear and moving forward.
            </p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="btw-process-stage">
          <div className="btw-process-side-label">
            <span>HOW WE BUILD</span>
            <i />
            <span>01 — 05</span>
          </div>

          <div className="btw-process-cards">
            {PROCESS.map((item, index) => (
              <article
                className={`btw-process-card btw-process-card-${index + 1}`}
                key={item.number}
              >
                {/* HOVER IMAGE */}
                <div
                  className="btw-process-card-image"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                />

                <div className="btw-process-card-overlay" />

                <div className="btw-process-card-content">
                  <div className="btw-process-card-top">
                    <span className="btw-process-card-number">
                      {item.number}
                    </span>

                    <span className="btw-process-card-tag">{item.tag}</span>
                  </div>

                  <div className="btw-process-card-body">
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>

                  <div className="btw-process-card-bottom">
                    <span>STEP {item.number}</span>

                    <span className="btw-process-card-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="btw-process-bottom">
          <div className="btw-process-bottom-line" />

          <div className="btw-process-bottom-copy">
            <span>THE GOAL</span>

            <strong>
              Less confusion.
              <br />
              Better digital experiences.
            </strong>
          </div>

          <div className="btw-process-bottom-mark">
            <span>BUSINESSTOWEB</span>
            <b>↗</b>
          </div>
        </div>
      </div>
    </section>
  );
}