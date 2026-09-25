"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./H-contact.css";

export default function HContact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const elements = section.querySelectorAll(".btw-contact-reveal");

      if (reducedMotion) {
        gsap.set(elements, {
          clearProps: "all",
        });
        return;
      }

      gsap.set(elements, {
        opacity: 0,
        y: 45,
      });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="btw-contact"
      id="contact"
      aria-labelledby="btw-contact-title"
    >
      {/* BACKGROUND */}
      <div className="btw-contact-orb btw-contact-orb-one" />
      <div className="btw-contact-orb btw-contact-orb-two" />

      <div className="btw-contact-grid-lines" />

      <div className="btw-contact-container">
        {/* TOP */}
        <div className="btw-contact-top btw-contact-reveal">
          <div className="btw-contact-label">
            <span className="btw-contact-line" />
            <span>Contact Us</span>
          </div>

          <span className="btw-contact-index">06 / 06</span>
        </div>

        {/* MAIN */}
        <div className="btw-contact-main">
          <div className="btw-contact-heading btw-contact-reveal">
            <span className="btw-contact-kicker">
              BUSINESS TOWEB <i /> LET&apos;S BUILD
            </span>

            <h2 id="btw-contact-title">
              Have an idea?
              <br />
              <em>Let&apos;s talk.</em>
            </h2>
          </div>

          <div className="btw-contact-side btw-contact-reveal">
            <span className="btw-contact-side-label">
              START A CONVERSATION
            </span>

            <p>
              Tell us a little about your business, your idea or what you need.
              We&apos;ll figure out the right digital solution together.
            </p>

            <span className="btw-contact-status">
              <i />
              Currently accepting new projects
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="btw-contact-cta-wrap btw-contact-reveal">
          <Link
            href="mailto:hello@businesstoweb.com"
            className="btw-contact-cta"
          >
            <span className="btw-contact-cta-small">EMAIL US</span>

            <span className="btw-contact-cta-email">
              hello@businesstoweb.com
            </span>

            <span className="btw-contact-cta-arrow">↗</span>
          </Link>
        </div>

        {/* QUICK CONTACT */}
        <div className="btw-contact-options btw-contact-reveal">
          <Link
            href="mailto:hello@businesstoweb.com"
            className="btw-contact-option"
          >
            <span className="btw-contact-option-number">01</span>

            <span className="btw-contact-option-content">
              <small>Email</small>
              <strong>Start a conversation</strong>
            </span>

            <span className="btw-contact-option-arrow">↗</span>
          </Link>

          <Link href="#" className="btw-contact-option">
            <span className="btw-contact-option-number">02</span>

            <span className="btw-contact-option-content">
              <small>WhatsApp</small>
              <strong>Chat with us</strong>
            </span>

            <span className="btw-contact-option-arrow">↗</span>
          </Link>

          <Link href="#" className="btw-contact-option">
            <span className="btw-contact-option-number">03</span>

            <span className="btw-contact-option-content">
              <small>Project</small>
              <strong>Discuss your idea</strong>
            </span>

            <span className="btw-contact-option-arrow">↗</span>
          </Link>
        </div>

        {/* BOTTOM */}
        <div className="btw-contact-bottom btw-contact-reveal">
          <div className="btw-contact-bottom-left">
            <span className="btw-contact-bottom-number">/ 06</span>

            <span>
              GOOD WEBSITES START
              <br />
              WITH GOOD CONVERSATIONS.
            </span>
          </div>

          <div className="btw-contact-bottom-line" />

          <span className="btw-contact-bottom-right">
            BUSINESS TOWEB © 2026
          </span>
        </div>
      </div>
    </section>
  );
}