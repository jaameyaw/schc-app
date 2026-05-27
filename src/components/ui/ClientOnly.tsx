"use client";

import { useClientMounted } from "@/hooks/useClientMounted";

type ClientOnlyProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const mounted = useClientMounted();
  return mounted ? children : fallback;
}
