"use client";

import React, { useEffect, useRef } from "react";
import "./Experties.css";

const detailedServices = [
  {
    number: "01",
    title: "Web Design",
    subtitle: "UI/UX & Visual Identity",
    text: "We craft conversion-focused, bespoke websites with striking visual identities and seamless user journeys designed to captivate your audience from the very first second.",
    deliverables: ["User Research", "Wireframing", "Figma Prototypes", "Design Systems"],
    timeline: "2 - 4 Weeks",
  },
  {
    number: "02",
    title: "Web Development",
    subtitle: "Robust Engineering",
    text: "Fast, highly scalable, and secure web applications built using industry-leading modern frontend frameworks to ensure flawless performance across all devices.",
    deliverables: ["Next.js / React", "API Integration", "Performance Tuning", "SEO Optimization"],
    timeline: "3 - 6 Weeks",
  },
  {
    number: "03",
    title: "Frontend Engineering",
    subtitle: "Motion & Interaction",
    text: "Interactive interfaces engineered for high speed, absolute accessibility, and pixel-perfect execution with fluid animations that bring your brand to life.",
    deliverables: ["GSAP Animations", "Micro-interactions", "Responsive Layouts", "Cross-browser Testing"],
    timeline: "2 - 3 Weeks",
  },
  {
    number: "04",
    title: "Digital Products",
    subtitle: "Strategy to Launch",
    text: "From early concept validation to production-ready digital architecture, we transform complex business ideas into high-performing, scalable digital products.",
    deliverables: ["Product Strategy", "MVP Development", "Scalable Architecture", "Launch Support"],
    timeline: "4 - 8 Weeks",
  },
];

export default function ServicesDetails() {
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
    <section className="service-details-section" id="service-details" ref={sectionRef}>
      <div className="service-container">

        {/* Section Header */}
        <div className="section-heading reveal-item">
          <div>
            <span className="section-kicker">
              COMPREHENSIVE CAPABILITIES & SCOPE
            </span>
            <h2>
              What we build,
              <br />
              <em>
                detailed & engineered.
              </em>
            </h2>
          </div>

          <p>
            A dedicated team merging strategic thinking, high-end design, and cutting-edge code to elevate your digital presence.
          </p>
        </div>

        {/* Full-width Detailed Stack Layout (Zero Buttons, Sharp Edges) */}
        <div className="service-details-list">
          {detailedServices.map((service, index) => (
            <div
              className="service-detail-card reveal-item"
              style={{ transitionDelay: `${index * 0.12}s` }}
              key={service.number}
            >
              <div className="card-top-bar">
                <span className="service-number">{service.number}</span>
                <span className="card-subtitle-tag">{service.subtitle}</span>
                <span className="service-timeline">Est. {service.timeline}</span>
              </div>

              <div className="card-content-grid">
                <div className="service-main-info">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <div className="service-deliverables-box">
                  <span className="deliverables-title">Key Deliverables & Stack:</span>
                  <div className="tags-wrap">
                    {service.deliverables.map((item) => (
                      <span key={item} className="tag-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}