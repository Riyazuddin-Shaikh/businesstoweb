"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Browser ki scroll memory ko manual karte hain taaki refresh ya route change par page upar jaye
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Jaise hi page load ho ya route badle, turant top par le jaye
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 'smooth' bhi kar sakte hain agar animation chahiye
    });
  }, [pathname]);

  return null;
}