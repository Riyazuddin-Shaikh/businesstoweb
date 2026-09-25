
"use client";

import React from "react";
import Image from "next/image";
import "./C-home.css";

export default function CHome() {
  return (
    <main className="contact-page">

      {/* ================= CONTACT HERO ================= */}

      <section className="contact-hero">

        <div className="contact-container">

          {/* ================= TOP BAR ================= */}

          <div className="contact-topbar">

            <span className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
              GET IN TOUCH
            </span>

            <span className="contact-index">
              CONTACT / 01
            </span>

          </div>


          {/* ================= MAIN HEADING ================= */}

          <div className="contact-heading-wrap">

            <div className="contact-heading">

              <span className="contact-heading-small">
                HAVE A PROJECT IN MIND?
              </span>

              <h1>
                Let&apos;s make
                <br />
                <span>something happen.</span>
              </h1>

            </div>


            <div className="contact-intro">

              <p>
                Have a project, an idea, or simply a question?
                Tell us what you&apos;re working on and let&apos;s
                create something meaningful together.
              </p>

              <div className="contact-scroll-note">
                <span>01</span>
                <span>SCROLL TO CONNECT</span>
              </div>

            </div>

          </div>


          {/* ================= IMAGE SECTION ================= */}

          <div className="contact-image-area">

            <div className="contact-image-wrapper">

<Image
  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
  alt="Creative digital agency team working together"
  fill
  priority
  quality={85}
  sizes="(max-width: 700px) 100vw, (max-width: 1200px) 90vw, 1240px"
  className="contact-image"
/>




              {/* Dark image overlay */}

              <div
                className="contact-image-overlay"
                aria-hidden="true"
              />


              {/* Image bottom label */}

              <div className="contact-image-label">

                <span>
                  BUSINESSTOWEB
                </span>

                <span>
                  DIGITAL DESIGN × DEVELOPMENT
                </span>

              </div>


              {/* Image year */}

              <div className="contact-image-number">
                EST. 2026
              </div>


              {/* Image corner decoration */}

              <div
                className="contact-image-corner contact-corner-top"
                aria-hidden="true"
              />

              <div
                className="contact-image-corner contact-corner-bottom"
                aria-hidden="true"
              />

            </div>


            {/* ================= FLOATING STATUS ================= */}

            <div className="contact-floating-card">

              <span
                className="floating-dot"
                aria-hidden="true"
              />

              <div>

                <small>
                  CURRENTLY
                </small>

                <strong>
                  Taking new projects
                </strong>

              </div>

            </div>

          </div>


          {/* ================= COMPANY INTRO ================= */}

          <div className="contact-company-intro">

            <div className="company-intro-label">

              <span>
                02
              </span>

              <span>
                WHO WE ARE
              </span>

            </div>


            <div className="company-intro-content">

              <h2>
                We turn ideas into
                <span> digital experiences.</span>
              </h2>


              <p>
                We are a digital design and development agency focused on
                creating modern websites and digital products that look
                distinctive, feel intuitive and perform exceptionally.
              </p>


              <p>
                From the first idea to the final line of code, we bring
                strategy, design and technology together to help businesses
                build a stronger digital presence.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

