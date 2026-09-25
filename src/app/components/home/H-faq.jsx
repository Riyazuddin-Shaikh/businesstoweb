"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./H-faq.css";

const FAQ_ITEMS = [
  {
    number: "01",
    question: "What web development technologies and frameworks do you use?",
    answer: "We engineer high-performance platforms using Next.js, React, and robust headless CMS architectures. Every build is optimized for lightning-fast speeds, absolute security, and seamless scalability.",
    category: "ENGINEERING",
  },
  {
    number: "02",
    question: "How does your UI/UX design process establish brand authority?",
    answer: "Our design philosophy merges behavioral psychology with uncompromising aesthetics. We create bespoke digital interfaces that instantly position your brand as the definitive leader in your market.",
    category: "UI / UX DESIGN",
  },
  {
    number: "03",
    question: "Is technical SEO integrated directly into the development phase?",
    answer: "Yes. From semantic HTML structures and Core Web Vitals optimization to automated sitemaps and schema markup, SEO is baked into our code foundation from day one for immediate indexation.",
    category: "SEARCH OPTIMIZATION",
  },
  {
    number: "04",
    question: "What is the expected timeline for a complete digital overhaul?",
    answer: "A comprehensive design and development engagement typically spans 4 to 8 weeks, depending on the complexity, custom interactive features, and content architecture.",
    category: "TIMELINE",
  },
  {
    number: "05",
    question: "Do you offer long-term partnership and performance retainers?",
    answer: "Yes. We maintain ongoing relationships with our clients, providing continuous performance monitoring, iterative UI enhancements, and strategic SEO growth retainers.",
    category: "GROWTH & RETENTION",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const leftCol = section.querySelector(".btw-faq-left-col");
      const rightCards = section.querySelectorAll(".btw-pro-card");

      if (reduceMotion) {
        gsap.set([leftCol, ...rightCards].filter(Boolean), {
          clearProps: "all",
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      if (leftCol) {
        tl.fromTo(
          leftCol,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      if (rightCards.length > 0) {
        tl.fromTo(
          rightCards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="btw-pro-faq" id="faq">
      {/* Background Ambient Glows */}
      <div className="btw-faq-glow btw-faq-glow-1" />
      <div className="btw-faq-glow btw-faq-glow-2" />

      <div className="btw-faq-container">
        
        {/* Split Layout: Left Sticky Info & Right Interactive FAQ List */}
        <div className="btw-faq-split-grid">
          
          {/* Left Column (Sticky Title & Context) */}
          <div className="btw-faq-left-col">
            <div className="btw-faq-badge">
              <span className="badge-line" />
              EXPERT INSIGHTS
            </div>
            
            <h2 className="btw-faq-title">
              Frequently <br />
              <span>Asked Questions.</span>
            </h2>
            
            <p className="btw-faq-desc">
              Everything you need to know about our web engineering standards, custom UI/UX design workflow, and SEO growth strategies.
            </p>

            <div className="btw-faq-contact-box">
              <span>Have a specific project in mind?</span>
              <a href="#contact" className="btw-faq-action-link">
                <span>Start a Conversation</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="btw-faq-right-col">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={item.number} 
                  className={`btw-pro-card ${isOpen ? "is-open" : ""}`}
                >
                  <button 
                    className="btw-pro-question" 
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="question-left">
                      <span className="q-num">{item.number}</span>
                      <span className="q-text">{item.question}</span>
                    </div>
                    <div className="q-icon-wrap">
                      <span className="q-icon">{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>

                  <div className={`btw-pro-answer-wrap ${isOpen ? "expanded" : ""}`}>
                    <div className="btw-pro-answer-inner">
                      <p>{item.answer}</p>
                      <div className="answer-meta">
                        <span className="meta-tag">{item.category}</span>
                        <span className="meta-brand">BUSINESSTOWEB STANDARD</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}