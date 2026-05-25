"use client";

import { useCallback, useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import {
  paymentCopyAction,
  paymentFieldLabel,
  paymentFieldValue,
  paymentFieldValueMono,
} from "../donateTypography";

interface DonationCopyFieldProps {
  label: string;
  value: string;
  mono?: boolean;
}

export default function DonationCopyField({
  label,
  value,
  mono = false,
}: DonationCopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, [value]);

  return (
    <div className="rounded-xl border border-gray-100/90 bg-light-bg/80 px-4 py-3.5 transition-colors duration-200 hover:border-primary/15 sm:py-4">
      <div className="flex items-start justify-between gap-3">
        <span className={paymentFieldLabel}>{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
          className={`inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all duration-200 hover:bg-primary/18 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${paymentCopyAction}`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" weight="bold" aria-hidden />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" weight="bold" aria-hidden />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <p
        className={`mt-2.5 max-w-[65ch] break-words ${mono ? paymentFieldValueMono : paymentFieldValue}`}
      >
        {value}
      </p>
    </div>
  );
}
