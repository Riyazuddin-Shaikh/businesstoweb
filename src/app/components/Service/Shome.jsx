
"use client";

import React from "react";
import Link from "next/link";
import "./Shome.css";

const services = [
  {
    number: "01",
    title: "Web Design",
    text: "Conversion-focused websites with a strong visual identity and seamless user experience.",
    tags: ["UI/UX", "Responsive", "Figma"],
  },
  {
    number: "02",
    title: "Web Development",
    text: "Fast, scalable and maintainable websites built with modern frontend technologies.",
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    number: "03",
    title: "Frontend Engineering",
    text: "Interactive interfaces engineered for speed, accessibility and pixel-perfect execution.",
    tags: ["Frontend", "Performance", "Animation"],
  },
  {
    number: "04",
    title: "Digital Products",
    text: "From early concepts to production-ready digital experiences, we turn ideas into products.",
    tags: ["Strategy", "Prototype", "Build"],
  },
];

export default function ServiceHome() {
  return (
    <main className="service-page">

      {/* ================= HERO ================= */}

      <section className="service-hero">

        <div className="service-container">

          <div className="hero-top">
            <span className="eyebrow">
              <span className="eyebrow-line"></span>
              DIGITAL AGENCY
            </span>

            <span className="hero-index">
              SERVICES / 01
            </span>
          </div>


          <div className="hero-heading-wrap">

            <h1 className="hero-heading">
              Digital

              <span className="heading-outline">
                experiences
              </span>

              <span className="heading-small">
                built to matter.
              </span>
            </h1>


            <div className="hero-side-copy">

              <p>
                We design and develop modern digital experiences for brands
                that want to look different, perform better and grow faster.
              </p>

              <Link
                href="/#contact"
                className="hero-link"
              >
                <span>
                  Start a conversation
                </span>

                <span className="hero-link-arrow">
                  ↗
                </span>
              </Link>

            </div>

          </div>


          {/* ================= HERO BOTTOM ================= */}

          <div className="hero-bottom">

            <div className="hero-statement">

              <span>
                01
              </span>

              <p>
                Strategy <b>+</b> Design <b>+</b> Technology
              </p>

            </div>


            <div className="hero-scroll">

              <span>
                SCROLL TO EXPLORE
              </span>

              <span className="scroll-arrow">
                ↓
              </span>

            </div>

          </div>

        </div>


        {/* Decorative Shapes */}

        <div
          className="hero-shape hero-shape-one"
          aria-hidden="true"
        />

        <div
          className="hero-shape hero-shape-two"
          aria-hidden="true"
        />

      </section>


      {/* ================= INTRO ================= */}

      <section className="service-intro">

        <div className="service-container">

          <div className="intro-label">
            WHAT WE DO
          </div>


          <div className="intro-content">

            <h2>
              Not just websites.
              <br />
              <span>
                We build digital presence.
              </span>
            </h2>


            <p>
              Your website is often the first interaction people have with
              your brand. We combine thoughtful design, clean development
              and business strategy to make that interaction count.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        className="services-section"
        id="services"
      >

        <div className="service-container">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                OUR EXPERTISE
              </span>

              <h2>
                What we
                <br />
                <em>
                  build.
                </em>
              </h2>

            </div>


            <p>
              One team for design, development and everything in between.
            </p>

          </div>


          <div className="services-list">

            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >

                <div className="service-number">
                  {service.number}
                </div>


                <div className="service-main">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>


                  <div className="service-tags">

                    {service.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>


                <div className="service-action">

                  <span>
                    Explore
                  </span>

                  <span className="service-arrow">
                    ↗
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="process-section">

        <div className="service-container">

          <div className="process-grid">

            <div className="process-heading">

              <span className="section-kicker">
                HOW WE WORK
              </span>

              <h2>
                Simple process.
                <br />
                <span>
                  Serious results.
                </span>
              </h2>

            </div>


            <div className="process-list">

              <div className="process-item">

                <span>
                  01
                </span>

                <div>

                  <h3>
                    Discover
                  </h3>

                  <p>
                    We understand your business, audience and goals before
                    writing a single line of code.
                  </p>

                </div>

              </div>


              <div className="process-item">

                <span>
                  02
                </span>

                <div>

                  <h3>
                    Design
                  </h3>

                  <p>
                    We turn strategy into a clear visual direction and
                    intuitive user experience.
                  </p>

                </div>

              </div>


              <div className="process-item">

                <span>
                  03
                </span>

                <div>

                  <h3>
                    Develop
                  </h3>

                  <p>
                    We build a fast, responsive and scalable digital
                    experience using modern technology.
                  </p>

                </div>

              </div>


              <div className="process-item">

                <span>
                  04
                </span>

                <div>

                  <h3>
                    Launch
                  </h3>

                  <p>
                    We test, refine and launch your website with performance
                    and long-term growth in mind.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="service-cta">

        <div className="service-container">

          <div className="cta-inner">

            <span className="section-kicker">
              HAVE A PROJECT IN MIND?
            </span>


            <h2>
              Let&apos;s build
              <br />
              <span>
                something great.
              </span>
            </h2>


            <Link
              href="/#contact"
              className="cta-button"
            >

              <span>
                Start a project
              </span>

              <span>
                ↗
              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

