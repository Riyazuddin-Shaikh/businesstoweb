"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

const SERVICES = [
  "Digital Design",
  "Web Development",
  "Search & Growth",
];

function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 16L16 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M7 4H16V13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ctx;

    const runHeroAnimations = () => {
      if (ctx) return; // Dubara run na ho

      ctx = gsap.context(() => {
        const reveal = hero.querySelector(".hero-reveal");
        const eyebrow = hero.querySelector(".hero-eyebrow");
        const title = hero.querySelector(".hero-title");
        const description = hero.querySelector(".hero-description");
        const links = hero.querySelectorAll(".hero-link");
        const image = hero.querySelector(".hero-image");
        const services = hero.querySelectorAll(".service-item");
        const meta = hero.querySelectorAll(".hero-meta");
        const number = hero.querySelector(".hero-number");

        if (reducedMotion) {
          gsap.set(
            [
              reveal,
              eyebrow,
              title,
              description,
              ...links,
              image,
              ...services,
              ...meta,
              number,
            ].filter(Boolean),
            { clearProps: "all" }
          );
          return;
        }

        const timeline = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        timeline
          .set(reveal, {
            scaleY: 1,
            transformOrigin: "top",
          })
          .set(image, {
            scale: 1.08,
          })
          .to(image, {
            scale: 1,
            duration: 1.8,
            ease: "power3.inOut",
          })
          .to(
            reveal,
            {
              scaleY: 0,
              duration: 1.05,
              ease: "power4.inOut",
            },
            "-=1.45"
          )
          .from(
            eyebrow,
            {
              y: 12,
              opacity: 0,
              duration: 0.55,
            },
            "-=0.45"
          )
          .from(
            title,
            {
              y: 35,
              opacity: 0,
              duration: 0.9,
            },
            "-=0.25"
          )
          .from(
            description,
            {
              y: 18,
              opacity: 0,
              duration: 0.65,
            },
            "-=0.45"
          )
          .from(
            links,
            {
              y: 12,
              opacity: 0,
              duration: 0.5,
              stagger: 0.08,
            },
            "-=0.35"
          )
          .from(
            services,
            {
              y: 15,
              opacity: 0,
              duration: 0.5,
              stagger: 0.08,
            },
            "-=0.25"
          )
          .from(
            [...meta, number].filter(Boolean),
            {
              opacity: 0,
              duration: 0.5,
            },
            "-=0.3"
          );

        if (image) {
          gsap.to(image, {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1.1,
            },
          });
        }
      }, hero);
    };

    // 1. Agar preloader pehle hi khatam ho chuka hai, toh turant chala do
    if (window.__preloaderCompleted || document.body.classList.contains("site-loaded")) {
      runHeroAnimations();
    } else {
      // 2. Nahi toh event ka wait karo
      const handlePreloaderComplete = () => {
        runHeroAnimations();
      };

      window.addEventListener("preloaderComplete", handlePreloaderComplete);

      // 3. Safety Fallback: Agar event kisi wajah se miss ho jaye toh max 1.5 second mein chal hi jaye
      const safetyTimer = setTimeout(() => {
        runHeroAnimations();
      }, 1500);

      return () => {
        window.removeEventListener("preloaderComplete", handlePreloaderComplete);
        clearTimeout(safetyTimer);
        if (ctx) ctx.revert();
      };
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <main
      className="home-page"
      ref={heroRef}
    >
      <section
        className="editorial-hero"
        aria-labelledby="hero-title"
      >
        {/* BACKGROUND IMAGE */}
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/img/home/home-bannar.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />

          <div className="hero-overlay" />
          <div className="hero-vignette" />
          <div className="hero-reveal" />
        </div>

        {/* SINGLE TOP IDENTITY */}
        <div className="hero-header">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            <span>Independent digital studio · India</span>
          </div>

          <span className="hero-meta">
            2026 / 001
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">
              WE DESIGN FOR AMBITION
            </p>

            <h1
              id="hero-title"
              className="hero-title"
            >
              Digital work
              <br />
              with <em>purpose.</em>
            </h1>

            <p className="hero-description">
              We create thoughtful websites for
              businesses that want to be taken
              seriously — from first impression
              to final interaction.
            </p>

            <div className="hero-links">
              <Link
                href="#contact"
                className="hero-link"
              >
                <span>Start a conversation</span>
                <Arrow />
              </Link>

              <Link
                href="#projects"
                className="hero-link"
              >
                <span>Selected work</span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE INDEX */}
        <div
          className="hero-index"
          aria-hidden="true"
        >
          <span className="hero-number">
            01
          </span>

          <span className="index-line" />

          <span>
            WEB / DIGITAL
          </span>
        </div>

        {/* SERVICES */}
        <div className="hero-services">
          <div className="services-label">
            CAPABILITIES
          </div>

          <div className="services-list">
            {SERVICES.map((service, index) => (
              <div
                className="service-item"
                key={service}
              >
                <span>
                  0{index + 1}
                </span>

                <strong>
                  {service}
                </strong>

                <span className="service-arrow">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM INFORMATION */}
        <div className="hero-footer">
          <span className="hero-meta">
            Available for selected projects
          </span>

          <span className="hero-meta">
            Scroll ↓
          </span>

          <span className="hero-meta">
            Working worldwide
          </span>
        </div>
      </section>
    </main>
  );
}