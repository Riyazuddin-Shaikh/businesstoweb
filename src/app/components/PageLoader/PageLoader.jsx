
"use client";

import { useEffect, useState } from "react";
import "./PageLoader.css";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 7) + 2;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setProgress(100);

        setTimeout(() => {
          setIsLeaving(true);

          setTimeout(() => {
            setIsHidden(true);
          }, 900);
        }, 350);
      }

      setProgress(current);
    }, 75);

    return () => clearInterval(interval);
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`btw-loader ${
        isLeaving ? "btw-loader-leaving" : ""
      }`}
      aria-label="Loading website"
      role="status"
    >
      {/* Background */}
      <div className="btw-loader-glow btw-loader-glow-one" />
      <div className="btw-loader-glow btw-loader-glow-two" />

      <div className="btw-loader-grid" />

      <div className="btw-loader-inner">

        {/* Top */}
        <div className="btw-loader-top">
          <span className="btw-loader-top-line" />

          <span className="btw-loader-top-text">
            DIGITAL EXPERIENCES
          </span>

          <span className="btw-loader-top-index">
            01 / 01
          </span>
        </div>

        {/* Center */}
        <div className="btw-loader-center">

          <div className="btw-loader-brand-wrap">

            <span className="btw-loader-small">
              BUSINESS
            </span>

            <div className="btw-loader-brand">
              <span>TO</span>
              <strong>WEB</strong>
            </div>

            <span className="btw-loader-tagline">
              WE BUILD FOR GROWTH
            </span>

          </div>

          {/* Counter */}
          <div className="btw-loader-counter">
            <span className="btw-loader-percent">
              {String(progress).padStart(3, "0")}
            </span>

            <span className="btw-loader-symbol">
              %
            </span>
          </div>

        </div>

        {/* Progress */}
        <div className="btw-loader-progress-area">

          <div className="btw-loader-progress-top">
            <span>
              INITIALIZING EXPERIENCE
            </span>

            <span>
              {progress === 100 ? "READY" : "LOADING"}
            </span>
          </div>

          <div className="btw-loader-progress">
            <div
              className="btw-loader-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="btw-loader-progress-bottom">
            <span>DESIGN</span>
            <span>DEVELOPMENT</span>
            <span>GROWTH</span>
          </div>

        </div>

        {/* Bottom */}
        <div className="btw-loader-bottom">

          <span>
            © 2026 BUSINESS TOWEB
          </span>

          <span className="btw-loader-loading-dot">
            <i />
            EXPERIENCE LOADING
          </span>

          <span>
            DELIVERING DIGITAL
          </span>

        </div>

      </div>

      {/* Exit Panels */}
      <div className="btw-loader-exit btw-loader-exit-one" />
      <div className="btw-loader-exit btw-loader-exit-two" />

    </div>
  );
}

