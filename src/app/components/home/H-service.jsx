"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./H-service.css";

const BTW_SERVICES = [
  {
    number: "01",
    category: "STARTER",
    title: "Essential Website",
    price: "For small businesses",
    description:
      "A clean and professional website for businesses that need a strong online presence without unnecessary complexity.",
    tech: "HTML · CSS · JavaScript",
    pages: "1–5 Pages",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    link: "#",
  },
  {
    number: "02",
    category: "BUSINESS",
    title: "Growth Website",
    price: "For growing brands",
    description:
      "A more advanced digital experience built for brands that need better performance, flexibility and room to grow.",
    tech: "React.js · Next.js",
    pages: "5–10 Pages",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
    link: "#",
  },
  {
    number: "03",
    category: "PREMIUM",
    title: "Premium Digital",
    price: "For ambitious brands",
    description:
      "A complete premium website experience with custom interactions, advanced development and a scalable digital foundation.",
    tech: "Next.js · React.js · Custom",
    pages: "10+ Pages",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
    link: "#",
  },
];

export default function HService() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const header = section.querySelector(".btw-service-header");
      const intro = section.querySelector(".btw-service-intro");
      const cards = section.querySelectorAll(".btw-service-card");
      const bottom = section.querySelector(".btw-service-bottom");

      if (reduceMotion) {
        gsap.set([header, intro, bottom, ...cards].filter(Boolean), {
          clearProps: "all",
        });
        return;
      }

      // Professional Timeline Reveal
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
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
        );
      }

      if (intro) {
        tl.fromTo(
          intro,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );
      }

      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.18,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      if (bottom) {
        tl.fromTo(
          bottom,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Card Hover Effects
      cards.forEach((card) => {
        const image = card.querySelector(".btw-service-image img");
        const details = card.querySelector(".btw-service-details");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: 0.45,
            ease: "power3.out",
          });

          if (image) {
            gsap.to(image, {
              scale: 1.07,
              duration: 0.7,
              ease: "power3.out",
            });
          }

          if (details) {
            gsap.to(details, {
              x: 8,
              duration: 0.4,
              ease: "power3.out",
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          if (image) {
            gsap.to(image, {
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
            });
          }

          if (details) {
            gsap.to(details, {
              x: 0,
              duration: 0.4,
              ease: "power3.out",
            });
          }
        });
      });
    }, section);

    // Refresh triggers to ensure correct layout calculation after load
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="btw-services" id="services">
      <div className="btw-service-header">
        <div className="btw-service-label">
          <span className="btw-service-label-line" />
          <span>Our Services</span>
        </div>

        <span className="btw-service-count">03 / 04</span>
      </div>

      <div className="btw-service-intro">
        <div className="btw-service-intro-title">
          <h2>
            Websites built
            <br />
            <em>for your ambition.</em>
          </h2>
        </div>

        <div className="btw-service-intro-copy">
          <p>
            BusinessToWeb creates websites around your business stage, budget and
            ambition — from focused starter sites to high-end digital
            experiences.
          </p>

          <span>DESIGN · DEVELOPMENT · COMMERCE · SEO</span>
        </div>
      </div>

      <div className="btw-service-list">
        {BTW_SERVICES.map((service) => (
          <article className="btw-service-card" key={service.number}>
            <div className="btw-service-image">
              <Image
                src={service.image}
                alt={`${service.title} website service`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
              />

              <div className="btw-service-image-overlay" />

              <span className="btw-service-number">{service.number}</span>

              <span className="btw-service-category">{service.category}</span>
            </div>

            <div className="btw-service-details">
              <div className="btw-service-title-row">
                <div>
                  <span className="btw-service-price">{service.price}</span>

                  <h3>{service.title}</h3>
                </div>
              </div>

              <p className="btw-service-description">{service.description}</p>

              <div className="btw-service-meta">
                <span>{service.tech}</span>
                <span>{service.pages}</span>
              </div>

              <div className="btw-service-actions">
                <a href={service.link} className="btw-service-view">
                  View Site
                  <span>↗</span>
                </a>

                <a
                     href="https://wa.me/919654151216?text=Hello,%20I%20am%20looking%20to%20get%20a%20professional%20website%20developed%20for%20my%20business.%20I%20would%20like%20to%20discuss%20the%20project%20details,%20timeline,%20and%20pricing.%20Please%20connect%20with%20me."
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btw-service-contact"><span>WhatsApp</span></a>

                <a href="contact" className="btw-service-book">
                  Book Your Site
                  <span>→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="btw-service-bottom">
        <span>CHOOSE THE LEVEL</span>
        <span className="btw-service-bottom-line" />
        <span>THAT FITS YOUR BUSINESS</span>
      </div>
    </section>
  );
}