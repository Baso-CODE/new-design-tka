import { ContactCs } from "@/app/types/contact.type";
import { useEffect, useRef, useState } from "react";

export const useCsRotation = (
  contacts: ContactCs[],
  mode: "single" | "double" = "single",
  storageKey: string = "cs_rotation_index", // Tambahan key unik per komponen
) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    if (contacts.length === 0 || hasInitialized.current) return;
    hasInitialized.current = true;

    const increment = mode === "double" ? 2 : 1;
    const savedIndex = localStorage.getItem(storageKey);
    let activeIndex = 0;

    if (savedIndex !== null) {
      const parsed = parseInt(savedIndex, 10);
      if (!isNaN(parsed) && parsed < contacts.length) {
        activeIndex = parsed;
      }
    }

    setCurrentIndex(activeIndex);

    // Set index berikutnya untuk refresh berikutnya
    const nextForRefresh = (activeIndex + increment) % contacts.length;
    localStorage.setItem(storageKey, nextForRefresh.toString());
  }, [contacts, mode, storageKey]);

  const rotateCs = () => {
    if (contacts.length === 0) return;
    const increment = mode === "double" ? 2 : 1;

    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + increment) % contacts.length;
      const futureIndex = (nextIndex + increment) % contacts.length;
      localStorage.setItem(storageKey, futureIndex.toString());
      return nextIndex;
    });
  };

  const getActiveCs = (): ContactCs[] => {
    if (!contacts || contacts.length === 0) return [];

    if (mode === "single") {
      const safeIndex = currentIndex % contacts.length;
      return [contacts[safeIndex]];
    } else {
      const firstIndex = currentIndex % contacts.length;
      const secondIndex = (currentIndex + 1) % contacts.length;

      return contacts.length > 1
        ? [contacts[firstIndex], contacts[secondIndex]]
        : [contacts[0]];
    }
  };

  return {
    activeCs: isMounted
      ? getActiveCs()
      : contacts.slice(0, mode === "double" ? 2 : 1),
    rotateCs,
  };
};
