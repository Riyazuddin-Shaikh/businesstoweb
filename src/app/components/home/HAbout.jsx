"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HAbout.css";

const SERVICES = [
  {
    number: "01",
    title: "Web Design",
    label: "Design systems & digital experiences",
    text: "Clear visual systems and thoughtful interfaces built around your brand, audience and business goals.",
  },
  {
    number: "02",
    title: "Web Development",
    label: "React, Next.js & modern web",
    text: "High-performance websites developed with clean architecture, responsive behaviour and long-term scalability.",
  },
  {
    number: "03",
    title: "Shopify",
    label: "E-commerce & online stores",
    text: "Custom Shopify experiences designed to make your products easier to discover and your store easier to use.",
  },
  {
    number: "04",
    title: "SEO",
    label: "Visibility & organic growth",
    text: "Technical foundations and on-page strategy that help your website become more visible in search.",
  },
];

export default function HAbout() {
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const elements = section.querySelectorAll("[data-reveal]");

      if (reducedMotion) {
        gsap.set(elements, { clearProps: "all" });
        return;
      }

      // Smooth scroll reveal configuration
      gsap.from(elements, {
        y: 40, // Halka sa zyada distance taaki smooth float-up feel aaye
        opacity: 0,
        duration: 1.1, // Duration badhayi hai taaki animation dheere aur smooth chale
        stagger: 0.12, // Stagger badhaya hai taaki elements ek ke baad ek aaram se khulein
        ease: "power3.out", // Power3 ya power2 smooth deceleration deta hai
        scrollTrigger: {
          trigger: section,
          start: "top 82%", // Thoda aur pehle trigger hoga taaki scroll karte waqt abrupt na lage
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const active = SERVICES[activeService];

  return (
    <section
      ref={sectionRef}
      className="h-about"
      id="services"
    >
      <div className="h-about-inner">
        {/* TOP */}
        <div
          className="h-about-top"
          data-reveal
        >
          <div className="h-about-label">
            <span className="label-mark" />
            <span>Capabilities</span>
          </div>

          <span className="h-about-page">
            02 / 04
          </span>
        </div>

        {/* INTRO */}
        <div
          className="h-about-intro"
          data-reveal
        >
          <div className="intro-statement">
            <span>BUILT FOR BUSINESS</span>

            <p>
              We design and build digital experiences
              that make businesses easier to understand,
              discover and choose.
            </p>
          </div>

          <div className="intro-detail">
            <p>
              From a focused landing page to a complete
              e-commerce platform, we bring design,
              development and SEO together under one roof.
            </p>

            <a
             href="https://wa.me/919654151216?text=Hello,%20I%20am%20looking%20to%20get%20a%20professional%20website%20developed%20for%20my%20business.%20I%20would%20like%20to%20discuss%20the%20project%20details,%20timeline,%20and%20pricing.%20Please%20connect%20with%20me."
             target="_blank"
             rel="noopener noreferrer"
              className="about-contact-link">
               <span>Discuss a project</span><span>↗</span></a>
          </div>
        </div>

        {/* MAIN SERVICE AREA */}
        <div
          className="capabilities"
          data-reveal
        >
          {/* LEFT SERVICE NAV */}
          <div className="service-navigation">
            {SERVICES.map((service, index) => (
              <button
                type="button"
                key={service.number}
                className={`service-nav-item ${
                  activeService === index
                    ? "is-active"
                    : ""
                }`}
                onMouseEnter={() =>
                  setActiveService(index)
                }
                onFocus={() =>
                  setActiveService(index)
                }
                onClick={() =>
                  setActiveService(index)
                }
              >
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-name">
                  {service.title}
                </span>

                <span className="service-nav-arrow">
                  ↗
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT DETAIL */}
          <div className="service-detail">
            <div className="detail-top">
              <span>
                SERVICE / {active.number}
              </span>

              <span>
                2026
              </span>
            </div>

            <div className="detail-content">
              <span className="detail-label">
                {active.label}
              </span>

              <h3 key={active.number}>
                {active.title}
              </h3>

              <p key={`text-${active.number}`}>
                {active.text}
              </p>

             <Link
               href="/services" 
              className="detail-link">
              <span>
                Explore this service
                  </span>

                 <span className="detail-link-icon">
                  ↗
                 </span>
                </Link>
            </div>

            <div className="detail-footer">
              <span>
                STRATEGY
              </span>

              <i />

              <span>
                DESIGN
              </span>

              <i />

              <span>
                DEVELOPMENT
              </span>

              <i />

              <span>
                GROWTH
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="h-about-bottom"
          data-reveal
        >
          <span>
            ONE STUDIO
          </span>

          <div className="bottom-rule" />

          <span>
            FROM IDEA TO LAUNCH
          </span>
        </div>
      </div>
    </section>
  );
}