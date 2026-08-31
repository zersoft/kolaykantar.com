"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, ArrowRight, Menu, X, Sparkles } from "lucide-react";

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
          ? "bg-[#060b13]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070d17] rounded-[10px] flex items-center justify-center">
              <Scale className="h-5 w-5 text-cyan-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white font-display">
                KOLAY<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">KANTAR</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-1.5 py-0.5 rounded shadow-sm">
                ERP
              </span>
            </div>
            <span className="text-[9px] font-semibold text-slate-400 tracking-wider">
              HİBRİT KANTAR OTOMASYONU
            </span>
          </div>
        </Link>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
          <Link href="#features" className="hover:text-cyan-400 transition-colors">
            Özellikler
          </Link>
          <Link href="#architecture" className="hover:text-cyan-400 transition-colors">
            Hibrit Mimari
          </Link>
          <Link href="#portal" className="hover:text-cyan-400 transition-colors">
            Müşteri Portalı
          </Link>
          <Link href="#efficiency" className="hover:text-cyan-400 transition-colors">
            Hız & Verimlilik
          </Link>
          <Link href="#sectors" className="hover:text-cyan-400 transition-colors">
            Sektörler
          </Link>
          <Link href="#pricing" className="hover:text-cyan-400 transition-colors">
            Fiyatlandırma
          </Link>
        </nav>

        {/* Aksiyon Butonları */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="http://localhost:3100/login"
            target="_blank"
            className="text-xs font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/60 transition-all"
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

        {/* Mobil Menü Butonu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobil Açılır Menü */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a121e] border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">
              Özellikler
            </Link>
            <Link href="#architecture" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">
              Hibrit Mimari
            </Link>
            <Link href="#portal" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">
              Müşteri Portalı
            </Link>
            <Link href="#efficiency" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">
              Hız & Verimlilik
            </Link>
            <Link href="#sectors" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">
              Sektörler
            </Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">
              Fiyatlandırma
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              href="http://localhost:3100/login"
              className="text-center text-xs font-bold text-slate-200 py-2.5 rounded-lg border border-slate-700 bg-slate-800/60"
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
