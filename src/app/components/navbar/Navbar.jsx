"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const actionBtnRef = useRef(null);

  const addToLinksRef = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nav,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          delay: 0.15,
        }
      );

      ScrollTrigger.create({
        start: "top -40",
        end: 99999,

        onEnter: () => {
          gsap.to(nav, {
            height: window.innerWidth <= 768 ? 56 : 64,
            backgroundColor: "rgba(10, 14, 12, 0.88)",
            backdropFilter: "blur(18px)",
            borderBottomColor: "rgba(244, 239, 230, 0.10)",
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(nav.querySelector(".nav-inner"), {
            height: window.innerWidth <= 768 ? 56 : 64,
            duration: 0.45,
            ease: "power3.out",
          });
        },

        onLeaveBack: () => {
          gsap.to(nav, {
            height: window.innerWidth <= 768 ? 60 : 75,
            backgroundColor: "rgba(12, 18, 16, 0.72)",
            backdropFilter: "blur(12px)",
            borderBottomColor: "rgba(255, 255, 255, 0.06)",
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(nav.querySelector(".nav-inner"), {
            height: window.innerWidth <= 768 ? 60 : 75,
            duration: 0.45,
            ease: "power3.out",
          });
        },
      });

      if (linksRef.current.length) {
        gsap.fromTo(
          linksRef.current,
          { y: -12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.06,
            delay: 0.35,
            ease: "power3.out",
          }
        );
      }

      if (actionBtnRef.current) {
        gsap.fromTo(
          actionBtnRef.current,
          { y: -10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.55,
            ease: "power3.out",
          }
        );
      }
    }, nav);

    return () => ctx.revert();
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    {
      name: "home",
      label: "HOME",
      href: "/",
    },
    {
      name: "about",
      label: "ABOUT US",
      href: "/about",
    },
    {
      name: "services",
      label: "SERVICES",
      href: "/services",
    },
    {
      name: "contact",
      label: "CONTACT",
      href: "/contact",
    },
  ];

  const isActive = (item) => {
    if (item.name === "home") {
      return pathname === "/";
    }

    if (item.name === "about") {
      return pathname === "/about" || pathname.startsWith("/about/");
    }

    if (item.name === "services") {
      return pathname === "/services" || pathname.startsWith("/services/");
    }

    if (item.name === "contact") {
      return pathname === "/contact" || pathname.startsWith("/contact/");
    }

    return false;
  };

  return (
    <>
      <header className="brand-nav" ref={navRef}>
        <div className="nav-inner">

          {/* LOGO */}
          <div className="nav-col left" ref={logoRef}>
            <Link
              href="/"
              className="nav-logo-link"
              onClick={closeMobileMenu}
            >
              <Logo />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav-col center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                ref={addToLinksRef}
                className={`menu-link ${
                  isActive(item) ? "active-link" : ""
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="nav-col right">
            <button
              type="button"
              className="action-btn"
              ref={actionBtnRef}
              onClick={() => setIsOpen(true)}
            >
              <span>Get Started</span>
              <i aria-hidden="true">↗</i>
            </button>

            <button
              type="button"
              className={`mobile-toggle-btn ${
                mobileMenuOpen ? "active" : ""
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navLinks.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`mobile-menu-link ${
                isActive(item) ? "active-link" : ""
              }`}
              onClick={closeMobileMenu}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* MODAL */}
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-header">
              <span className="modal-eyebrow">
                START A PROJECT
              </span>

              <h2>
                Let&apos;s build something <em>meaningful.</em>
              </h2>

              <p>
                Tell us a little about your project and we&apos;ll
                get back to you.
              </p>
            </div>

            <form
              className="modal-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Data transmitted successfully!");
                setIsOpen(false);
              }}
            >
              <div className="form-group">
                <label htmlFor="name">YOUR NAME</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@domain.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="project-type">PROJECT TYPE</label>
                <select id="project-type" defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Website Design</option>
                  <option>Web Development</option>
                  <option>Next.js Application</option>
                  <option>SEO &amp; Growth</option>
                </select>
              </div>

              <button type="submit" className="modal-submit-btn">
                Send Inquiry <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}