"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "full" | "mark" | "monochrome";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  showSubtitle?: boolean;
  onDark?: boolean;
}

export function BrandLogo({
  variant = "full",
  size = "md",
  className,
  href = "/",
  showSubtitle = true,
  onDark = false,
}: BrandLogoProps) {
  const sizeMap = {
    xs: { mark: 22, height: 26, text: "text-xs", sub: "text-[7px]" },
    sm: { mark: 28, height: 32, text: "text-sm", sub: "text-[8px]" },
    md: { mark: 36, height: 40, text: "text-base", sub: "text-[9px]" },
    lg: { mark: 44, height: 50, text: "text-xl", sub: "text-[10px]" },
    xl: { mark: 56, height: 64, text: "text-2xl", sub: "text-xs" },
  };

  const currentSize = sizeMap[size];

  // Geometrik "K" & Akıllı Kantar Monogramı (Zersoft Precision Scale)
  const renderMark = () => (
    <svg
      viewBox="0 0 48 48"
      width={currentSize.mark}
      height={currentSize.mark}
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      role="img"
      aria-label="KolayKantar Mark"
    >
      <defs>
        <linearGradient id="brandKGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="brandKGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="brandKBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      <rect
        x="0"
        y="0"
        width="48"
        height="48"
        rx="12"
        className="fill-slate-900 dark:fill-[#070c15] stroke-sky-500/35"
        strokeWidth="1.3"
      />

      {/* K Sol Taşıyıcı Sütun (Load-cell Kule) */}
      <rect x="11.5" y="10" width="4.5" height="26" rx="2.25" fill="url(#brandKGrad1)" />

      {/* K Üst Kanat (Bulut & Yükselen Veri) */}
      <path d="M19 23 L32.5 10 L37 10 L23.5 23 Z" fill="url(#brandKGrad1)" />

      {/* K Alt Kanat (Ağır Hizmet Platform Kolu) */}
      <path d="M19 23 L33.5 35.5 L37 35.5 L22.5 23 Z" fill="url(#brandKGrad2)" />

      {/* Zersoft Merkez Hassas Odak Noktası */}
      <circle cx="20.5" cy="23" r="2.8" fill="#00f2fe" />
      <circle cx="20.5" cy="23" r="1.1" fill="#ffffff" />

      {/* Kantar Taban Platformu & Yük Sensörleri */}
      <path d="M9.5 40 L38.5 40" stroke="url(#brandKBase)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="13.5" cy="40" r="1.1" fill="#00f2fe" />
      <circle cx="34.5" cy="40" r="1.1" fill="#00f2fe" />
    </svg>
  );

  const content = (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      {renderMark()}

      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center tracking-tight font-black font-display">
            <span
              className={cn(
                "text-xl transition-colors",
                onDark ? "text-white" : "text-slate-900 dark:text-white"
              )}
            >
              KOLAY
            </span>
            <span
              className={cn(
                "text-xl transition-colors",
                onDark ? "text-cyan-400" : "text-cyan-600 dark:text-cyan-400"
              )}
            >
              KANTAR
            </span>
            <span
              className={cn(
                "ml-1.5 px-1.5 py-0.5 rounded font-extrabold text-[10px] tracking-wider border",
                onDark
                  ? "bg-cyan-950/80 text-cyan-300 border-cyan-500/40"
                  : "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-300 border-cyan-300 dark:border-cyan-500/30"
              )}
            >
              ERP
            </span>
          </div>

          {showSubtitle && (
            <div
              className={cn(
                "text-[9px] font-semibold tracking-wider mt-1 flex items-center gap-1 uppercase",
                onDark ? "text-slate-400" : "text-slate-500 dark:text-slate-400"
              )}
            >
              <span>HİBRİT OTOMASYON</span>
              <span className={onDark ? "text-slate-600" : "text-slate-400 dark:text-slate-600"}>•</span>
              <span className={onDark ? "text-cyan-400 font-bold" : "text-cyan-600 dark:text-cyan-400 font-bold"}>
                ZERSOFT
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
