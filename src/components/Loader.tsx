"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CIRCLE_D =
  "M283.459 209.358C283.458 184.657 274.961 167.973 263.71 157.332C252.12 146.37 234.849 139.257 213.358 139.257C191.721 139.257 174.469 146.32 162.951 157.173C151.799 167.681 143.257 184.306 143.257 209.358C143.257 234.409 151.799 251.035 162.951 261.543C174.469 272.395 191.721 279.458 213.358 279.459V318.715C152.961 318.715 104 278.898 104 209.358C104 139.817 152.961 100 213.358 100C273.754 100 322.715 140.378 322.715 209.358C322.715 278.337 273.754 318.715 213.358 318.715V279.459C234.849 279.459 252.12 272.345 263.71 261.383C274.961 250.742 283.459 234.058 283.459 209.358Z";

const LINE_D =
  "M118.091 286.304C117.491 285.075 119.19 284.195 120.01 285.288C147.499 321.905 181.896 327.083 226.257 326.567C253.205 326.254 303.702 325.632 316.026 325.48C317.8 325.458 319.506 326.138 320.782 327.372L351.007 356.605C351.731 357.306 351.263 358.533 350.255 358.533C332.346 358.533 231.795 358.533 197.095 358.533C157.858 358.533 129.23 309.14 118.091 286.304Z";

// Starts at the bottom of the ring (6 o'clock) and sweeps counter-clockwise.
const CIRCLE_MASK_D =
  "M213.36 318.36 A109 109 0 1 0 213.36 100.36 A109 109 0 1 0 213.36 318.36";

const CIRCLE_DURATION = 0.55;
const LINE_DELAY = 0.45;
const LINE_DURATION = 0.35;
const POP_DELAY = 0.75;
const POP_DURATION = 0.3;
const DISC_DELAY = 0.75;
const DISC_DURATION = 0.5;
const OVERLAY_FADE_DELAY = 1.2;
const OVERLAY_FADE_DURATION = 0.3;
const REMOVE_AFTER_MS = (OVERLAY_FADE_DELAY + OVERLAY_FADE_DURATION) * 1000 + 100;
const LOGO_BASE_PX = 192;

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [discScale, setDiscScale] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const diagonal = Math.hypot(window.innerWidth, window.innerHeight);
    setDiscScale((diagonal * 2.2) / LOGO_BASE_PX);

    const timer = setTimeout(() => setVisible(false), REMOVE_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#1E2B61]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: OVERLAY_FADE_DURATION,
        delay: OVERLAY_FADE_DELAY,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute h-48 w-48 rounded-full bg-white"
        initial={{ scale: 0 }}
        animate={{ scale: discScale || 1 }}
        transition={{
          duration: DISC_DURATION,
          delay: DISC_DELAY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative h-48 w-48"
        initial={{ scale: 1 }}
        animate={{ scale: 1.25 }}
        transition={{
          duration: POP_DURATION,
          delay: POP_DELAY,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 458 458" className="h-full w-full">
          <defs>
            <mask id="loader-circle-mask" maskUnits="userSpaceOnUse">
              <motion.path
                d={CIRCLE_MASK_D}
                fill="none"
                stroke="#ffffff"
                strokeWidth={95}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: CIRCLE_DURATION, ease: "easeInOut" }}
              />
            </mask>
          </defs>
          <path d={CIRCLE_D} fill="#ffffff" mask="url(#loader-circle-mask)" />
          <motion.path
            d={LINE_D}
            fill="#ffffff"
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{
              duration: LINE_DURATION,
              delay: LINE_DELAY,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
