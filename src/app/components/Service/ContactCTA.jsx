"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import "./ContactCTA.css";

export default function ContactCTA() {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current.querySelectorAll(".reveal-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="cta-container reveal-item">
        <span className="cta-kicker">HAVE A PROJECT IN MIND?</span>
        
        <h2 className="cta-title">
          Let&apos;s build <br />
          <span className="outline-text">something great</span>
        </h2>

        <div className="cta-action">
          <Link href="/contact" className="cta-btn">
            <span>Start a project</span>
            <span className="cta-arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}