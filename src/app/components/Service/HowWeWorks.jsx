"use client";

import React, { useEffect, useRef } from "react";
import "./HowWeWorks.css";

const steps = [
  {
    number: "01",
    title: "Discover & Strategy",
    desc: "We analyze your business objectives, target audience, and competitive landscape to establish a rock-solid foundation.",
  },
  {
    number: "02",
    title: "Design & Experience",
    desc: "We translate strategy into clean visual architecture and high-fidelity, conversion-focused user interfaces.",
  },
  {
    number: "03",
    title: "Develop & Launch",
    desc: "We engineer lightning-fast, fully responsive web applications using cutting-edge frameworks for flawless execution.",
  },
];

export default function HowWeWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".reveal-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="how-section" id="process" ref={sectionRef}>
      <div className="how-container">
        
        {/* Top Header Layout (Distinct from previous sections) */}
        <div className="how-header reveal-item">
          <div className="how-kicker-wrap">
            <span className="how-kicker-line" />
            <span className="how-kicker">OUR PROCESS</span>
          </div>
          <h2>
            Simple process. <span className="dim-text">Serious results.</span>
          </h2>
        </div>

        {/* Horizontal 3-Column Grid Layout */}
        <div className="how-grid">
          {steps.map((step, index) => (
            <div
              className="how-card reveal-item"
              style={{ transitionDelay: `${index * 0.15}s` }}
              key={step.number}
            >
              <div className="how-card-top">
                <span className="how-num">{step.number}</span>
                <span className="how-line-accent" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}