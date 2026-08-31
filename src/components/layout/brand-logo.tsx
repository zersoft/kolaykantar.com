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
}

export function BrandLogo({
  variant = "full",
  size = "md",
  className,
  href = "/",
  showSubtitle = true,
}: BrandLogoProps) {
  const sizeMap = {
    xs: { mark: 22, height: 26, text: "text-xs", sub: "text-[7px]" },
    sm: { mark: 28, height: 32, text: "text-sm", sub: "text-[8px]" },
    md: { mark: 36, height: 40, text: "text-base", sub: "text-[9px]" },
    lg: { mark: 44, height: 50, text: "text-xl", sub: "text-[10px]" },
    xl: { mark: 56, height: 64, text: "text-2xl", sub: "text-xs" },
  };

  const currentSize = sizeMap[size];

  // Sadece Mark / İkon Gösterimi (Option 4: Infinity Scale & Platform)
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
        <linearGradient id="brandLoopG1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="brandPlatG1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>

      <rect
        x="0"
        y="0"
        width="48"
        height="48"
        rx="12"
        className="fill-[#070c15] stroke-sky-500/40"
        strokeWidth="1.5"
      />

      {/* Kesintisiz Otomasyon Döngüsü */}
      <path
        d="M17 18 C12 18 9 21.5 9 25 C9 28.5 12 32 17 32 C21.5 32 24 27.5 24 25 C24 22.5 26.5 18 31 18 C36 18 39 21.5 39 25 C39 28.5 36 32 31 32 C26.5 32 24 27.5 24 25"
        fill="none"
        stroke="url(#brandLoopG1)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Platform Tabanı & Yük Hücresi Noktaları */}
      <path d="M11 38 L37 38" stroke="url(#brandPlatG1)" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="15" cy="40.5" r="1.2" fill="#38bdf8" />
      <circle cx="33" cy="40.5" r="1.2" fill="#38bdf8" />

      {/* Zersoft Merkez Odak Noktası */}
      <circle cx="24" cy="25" r="2.8" fill="#00f2fe" />
      <circle cx="24" cy="25" r="1.2" fill="#ffffff" />
    </svg>
  );

  const content = (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      {renderMark()}

      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center tracking-tight font-black font-display">
            <span className="text-white text-xl">KOLAY</span>
            <span className="text-cyan-400 text-xl">KANTAR</span>
            <span className="ml-1.5 px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 font-extrabold text-[10px] tracking-wider border border-cyan-500/30">
              ERP
            </span>
          </div>

          {showSubtitle && (
            <div className="text-[9px] font-semibold tracking-wider text-slate-400 mt-1 flex items-center gap-1 uppercase">
              <span>HİBRİT OTOMASYON</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-bold">ZERSOFT</span>
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
