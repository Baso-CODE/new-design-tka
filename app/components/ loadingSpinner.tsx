"use client";

import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function LoadingSpinner() {
  const [spinnerSize, setSpinnerSize] = useState(36);

  useEffect(() => {
    const handleResize = () => {
      setSpinnerSize(window.innerWidth < 768 ? 36 : 70);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <PacmanLoader color="#004EB2" size={spinnerSize} />
    </div>
  );
}
