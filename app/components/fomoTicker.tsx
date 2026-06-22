"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface FomoTickerProps {
  namaWilayah: string;
}

interface NotificationData {
  type: "registration" | "alert";
  title: string;
  message: string;
  time: string;
}

export default function FomoTicker({ namaWilayah }: FomoTickerProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Diinisialisasi dengan null agar type-safe saat data belum digenerate
  const [notification, setNotification] = useState<NotificationData | null>(
    null,
  );
  const [isClosedByUser, setIsClosedByUser] = useState<boolean>(false);

  // Data tiruan dinamis untuk efek FOMO
  const generateRandomNotification = useCallback((): NotificationData => {
    const subjects = [
      "OSN Matematika",
      "OSN Fisika",
      "OSN Biologi",
      "OSN Kimia",
      "Olimpiade IPA",
      "JISMO",
    ];
    const levels = ["SD", "SMP", "SMA"];
    const times = [
      "Baru saja",
      "15 menit lalu",
      "1 jam lalu",
      "2 jam lalu",
      "Hari ini",
    ];

    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    const randomTime = times[Math.floor(Math.random() * times.length)];

    const isRegistration = Math.random() > 0.3; // 70% munculin pendaftaran, 30% kuota

    if (isRegistration) {
      return {
        type: "registration",
        title: "Pendaftaran Baru 🔥",
        message: `Siswa ${randomLevel} dari wilayah ${namaWilayah} baru saja mendaftar Les Privat ${randomSubject}.`,
        time: randomTime,
      };
    } else {
      const sisaKuota = Math.floor(Math.random() * 3) + 1; // Random 1 - 3
      return {
        type: "alert",
        title: "Peringatan Kuota ⚠️",
        message: `Sisa kuota tutor untuk wilayah ${namaWilayah} bulan ini hanya tersisa ${sisaKuota} slot!`,
        time: "Saat ini",
      };
    }
  }, [namaWilayah]);

  useEffect(() => {
    if (isClosedByUser) return;

    let hideTimeoutId: number;

    const runTickerCycle = () => {
      setNotification(generateRandomNotification());
      setIsVisible(true);

      // Sembunyikan setelah 5 detik
      hideTimeoutId = window.setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Jalankan pertama kali setelah 3 detik halaman dimuat
    const initialTimeout = window.setTimeout(runTickerCycle, 3000);

    // Ulangi siklus setiap 15 detik
    const interval = window.setInterval(runTickerCycle, 15000);

    return () => {
      window.clearTimeout(initialTimeout);
      window.clearTimeout(hideTimeoutId);
      window.clearInterval(interval);
    };
  }, [generateRandomNotification, isClosedByUser]);

  if (isClosedByUser) return null;

  return (
    <div className="fixed bottom-28 left-4 md:bottom-6 md:left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isVisible && notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="pointer-events-auto w-80 md:w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 relative overflow-hidden">
            {/* Garis indikator di pinggir kiri */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 ${
                notification.type === "alert" ? "bg-red-500" : "bg-blue-600"
              }`}></div>

            <div className="flex items-start gap-3">
              {/* Ikon */}
              <div className="shrink-0 mt-1">
                {notification.type === "alert" ? (
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"></path>
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
              </div>

              {/* Teks Konten */}
              <div className="flex-1 min-w-0 pr-4">
                <p className="text-sm font-bold text-gray-900 truncate">
                  {notification.title}
                </p>
                <p className="text-[13px] text-gray-600 mt-1 leading-tight">
                  {notification.message}
                </p>
                <p className="text-[11px] text-gray-400 mt-2 font-medium">
                  {notification.time}
                </p>
              </div>

              {/* Tombol Close */}
              <button
                onClick={() => setIsClosedByUser(true)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close notification">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
