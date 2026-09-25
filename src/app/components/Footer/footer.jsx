
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Website Design",
  "Business Websites",
  "Landing Pages",
  "UI / UX Design",
  "Website Development",
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: "◎",
  },
  {
    label: "Facebook",
    href: "#",
    icon: "f",
  },
  {
    label: "YouTube",
    href: "#",
    icon: "▶",
  },
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const items = footer.querySelectorAll(".btw-footer-reveal");

      if (reducedMotion) {
        gsap.set(items, { clearProps: "all" });
        return;
      }

      gsap.set(items, {
        opacity: 0,
        y: 25,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          once: true,
        },
      });
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="btw-footer">
      <div className="btw-footer-container">

        {/* TOP BRAND AREA */}
        <div className="btw-footer-top btw-footer-reveal">

          <div className="btw-footer-brand">
            <Link href="/" className="btw-footer-logo">
              Business<span>ToWeb</span>
            </Link>

            <p>
              Websites designed to make your business
              <br className="btw-footer-desktop" />
              look better, work better and grow online.
            </p>
          </div>

          <div className="btw-footer-status">
            <span className="btw-footer-status-dot" />
            <span>Available for new projects</span>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="btw-footer-divider btw-footer-reveal" />

        {/* MAIN FOOTER GRID */}
        <div className="btw-footer-grid">

          {/* NAVIGATION */}
          <div className="btw-footer-column btw-footer-reveal">
            <span className="btw-footer-heading">
              Navigation
            </span>

            <nav className="btw-footer-links">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href}>
                  <span>{link.label}</span>
                  <b>↗</b>
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div className="btw-footer-column btw-footer-reveal">
            <span className="btw-footer-heading">
              Services
            </span>

            <div className="btw-footer-service-list">
              {SERVICES.map((service, index) => (
                <span key={service}>
                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="btw-footer-column btw-footer-reveal">
            <span className="btw-footer-heading">
              Contact
            </span>

            <div className="btw-footer-contact-list">

              <a href="mailto:hello@businesstoweb.com">
                <span className="btw-footer-contact-icon">
                  @
                </span>

                <span>
                  <small>Email</small>
                  hello@businesstoweb.com
                </span>

                <b>↗</b>
              </a>

              <a href="tel:+919999999999">
                <span className="btw-footer-contact-icon">
                  ☎
                </span>

                <span>
                  <small>Phone</small>
                  +91 99999 99999
                </span>

                <b>↗</b>
              </a>

            </div>
          </div>

          {/* SOCIAL */}
          <div className="btw-footer-column btw-footer-reveal">
            <span className="btw-footer-heading">
              Follow Us
            </span>

            <div className="btw-footer-socials">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btw-footer-social-icon">
                    {social.icon}
                  </span>

                  <span>{social.label}</span>

                  <b>↗</b>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* CTA STRIP */}
        <div className="btw-footer-cta btw-footer-reveal">

          <div>
            <span>HAVE A PROJECT IN MIND?</span>
            <h3>
              Let&apos;s build something
              <em> meaningful.</em>
            </h3>
          </div>

          <Link href="#contact" className="btw-footer-cta-button">
            <span>Start a project</span>
            <b>↗</b>
          </Link>

        </div>

        {/* BOTTOM */}
        <div className="btw-footer-bottom btw-footer-reveal">

          <div className="btw-footer-bottom-left">
            <span>
              © 2026 BusinessToWeb
            </span>

            <span className="btw-footer-made">
              Design by <strong>BusinessToWeb</strong>
            </span>
          </div>

          <div className="btw-footer-bottom-right">
            <Link href="#">
              Privacy
            </Link>

            <Link href="#">
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

