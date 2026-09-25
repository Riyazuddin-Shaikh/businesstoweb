import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. Professional Staggered Navbar Entrance
export const navEntranceAnimation = (navContainer, logoRef, linkElements, actionBtnRef) => {
  if (!navContainer) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Initial setup state
  gsap.set(navContainer, { y: -100, opacity: 0 });
  if (linkElements) gsap.set(linkElements, { y: -20, opacity: 0 });
  if (logoRef) gsap.set(logoRef, { opacity: 0, scale: 0.95 });
  if (actionBtnRef) gsap.set(actionBtnRef, { opacity: 0, scale: 0.95 });

  // Smooth sequence
  tl.to(navContainer, { y: 0, opacity: 1, duration: 1, ease: "power4.out" })
    .to(logoRef, { opacity: 1, scale: 1, duration: 0.6 }, "-=0.6")
    .to(linkElements, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, "-=0.4")
    .to(actionBtnRef, { opacity: 1, scale: 1, duration: 0.6 }, "-=0.4");

  return tl;
};

// 2. Smart Hide/Show Navbar on Scroll
export const initNavbarScrollTrigger = (navContainer) => {
  if (!navContainer) return;

  let lastScroll = 0;
  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      const currentScroll = self.scroll();
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling Down - Hide Navbar smoothly
        gsap.to(navContainer, { y: "-100%", duration: 0.3, ease: "power2.inOut" });
      } else {
        // Scrolling Up - Show Navbar with backdrop blur/shadow feel
        gsap.to(navContainer, { y: "0%", duration: 0.3, ease: "power2.inOut" });
      }
      lastScroll = currentScroll;
    },
  });
};

export const staggerReveal = (elements, delay = 0) => {
  if (!elements || elements.length === 0) return;
  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      delay: delay,
      ease: "power3.out",
    }
  );
};

export const premiumScrollReveal = (element) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 60, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      ease: "power3.out",
    }
  );
};