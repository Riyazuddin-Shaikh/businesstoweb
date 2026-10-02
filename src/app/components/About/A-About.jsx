"use client";

import React from "react";
import Image from "next/image";
import "./A-About.css";

export default function AProject() {
  return (
    <div>
      {/* Selected Works Section */}
      <section className="btw-projects-section">
        <div className="btw-container">
          <div className="btw-section-header">
            <span className="spec-label">01 / SELECTED WORKS</span>
            <h2>Built for impact, <br /><span>not for show.</span></h2>
          </div>

          <div className="btw-projects-grid">
            {/* Project 1 */}
            <div className="btw-project-card">
              <div className="btw-project-img-box">
                <Image 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85" 
                  alt="Vortex AI Platform" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="btw-proj-img"
                />
                <div className="btw-proj-tag">WEB APP &bull; 2026</div>
              </div>
              <div className="btw-project-info">
                <h3>Vortex AI Platform</h3>
                <p>High-speed headless architecture with real-time streaming UI and smooth GSAP transitions.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="btw-project-card">
              <div className="btw-project-img-box">
                <Image 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85" 
                  alt="Aether Luxury Goods" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="btw-proj-img"
                />
                <div className="btw-proj-tag">E-COMMERCE &bull; 2025</div>
              </div>
              <div className="btw-project-info">
                <h3>Aether Luxury Goods</h3>
                <p>Immersive typography-driven digital storefront built with custom WebGL and Next.js.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint / Process Section */}
      <section className="btw-process-section">
        <div className="btw-container">
          <div className="btw-section-header">
            <span className="spec-label">02 / BLUEPRINT</span>
            <h2>How we bring <br /><span>visions to code.</span></h2>
          </div>

          <div className="btw-process-grid">
            <div className="btw-process-col">
              <span className="process-num">01</span>
              <h4>Architecture & Discovery</h4>
              <p>We map out clean data flows, component hierarchies, and performance goals before writing a single line of code.</p>
            </div>
            <div className="btw-process-col">
              <span className="process-num">02</span>
              <h4>Custom Code Crafting</h4>
              <p>No bloated page builders or templates. Pure, semantic React and Next.js built precisely for your brand.</p>
            </div>
            <div className="btw-process-col">
              <span className="process-num">03</span>
              <h4>Motion & Polish</h4>
              <p>Integrating physics-based GSAP animations and fine-tuning Core Web Vitals for lightning-fast speeds.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}