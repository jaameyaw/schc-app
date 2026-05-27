"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";

export default function AppLoader() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const stopLoading = () => setActive(false);

    if (document.readyState === "complete") {
      stopLoading();
      return undefined;
    }

    window.addEventListener("load", stopLoading, { once: true });
    return () => window.removeEventListener("load", stopLoading);
  }, []);

  return <Loader active={active} />;
}
