"use client";

import { useEffect, useRef, useState } from "react";

export function useCountingAnimation(
  targetValue: number,
  duration: number = 2000,
  startValue: number = 0,
  isDecimal: boolean = false,
  elementRef: React.RefObject<HTMLElement | null>
): string {
  const [count, setCount] = useState<number>(startValue);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef]);

  useEffect(() => {
    if (!isVisible) {
      setCount(startValue);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
  }, [isVisible, startValue]);

  useEffect(() => {
    if (!isVisible) return;

    startTimeRef.current = null;

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const animatedValue = startValue + (targetValue - startValue) * progress;

      setCount(animatedValue);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible, targetValue, duration, startValue]);

  /* -------------------- FORMATTING -------------------- */
  if (isDecimal) return count.toFixed(1);

  if (targetValue >= 1000) {
    return `${Math.floor(count).toLocaleString("id-ID")}+`;
  }

  return `${Math.floor(count)}+`;
}
