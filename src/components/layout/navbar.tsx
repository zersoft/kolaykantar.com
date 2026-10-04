"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#060b13]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Resmi KolayKantar ERP Brand Logo */}
        <BrandLogo href="/" size="md" />

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <Link href="#features" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Özellikler
          </Link>
          <Link href="#architecture" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Hibrit Mimari
          </Link>
          <Link href="#portal" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Müşteri Portalı
          </Link>
          <Link href="#efficiency" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Hız & Verimlilik
          </Link>
          <Link href="#sectors" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Sektörler
          </Link>
          <Link href="#pricing" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Fiyatlandırma
          </Link>
        </nav>

        {/* Aksiyon Butonları & Tema Seçici */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://app.kolaykantar.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/80 dark:bg-slate-800/60 transition-all shadow-sm"
          >
            SaaS Girişi
          </Link>
          <Link
            href="#demo"
            className="flex items-center gap-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-sky-300 px-4 py-2.5 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all group"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ücretsiz Demo İste</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobil Menü Butonu & Mobil Tema Butonu */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white shadow-sm"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0a121e]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 py-1">
              Özellikler
            </Link>
            <Link href="#architecture" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 py-1">
              Hibrit Mimari
            </Link>
            <Link href="#portal" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 py-1">
              Müşteri Portalı
            </Link>
            <Link href="#efficiency" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 py-1">
              Hız & Verimlilik
            </Link>
            <Link href="#sectors" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 py-1">
              Sektörler
            </Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 py-1">
              Fiyatlandırma
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <Link
              href="https://app.kolaykantar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-bold text-slate-700 dark:text-slate-200 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/60"
            >
              SaaS Girişi
            </Link>
            <Link
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 py-2.5 rounded-xl shadow-lg"
            >
              Ücretsiz Demo İste
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
