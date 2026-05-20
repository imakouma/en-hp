"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-slate-800/80 bg-gray-950/95 shadow-lg shadow-black/20 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:h-20 lg:px-8">
          <a
            href="#hero"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-2"
            aria-label="株式会社En（仮）トップへ"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105 sm:h-9 sm:w-9 sm:text-sm">
              En
            </span>
            <span className="hidden truncate text-sm font-medium text-slate-300 min-[400px]:block">
              株式会社En
              <span className="text-slate-500">（仮）</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="メインナビゲーション"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-white xl:px-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <motion.div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40 hover:brightness-110 sm:inline-flex md:px-5"
            >
              お問い合わせ
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden
            />

            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-0 top-14 z-50 border-b border-slate-800 bg-gray-950/98 px-4 py-4 shadow-2xl sm:top-16 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800/80 active:bg-slate-800"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-500/25"
              >
                お問い合わせ
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
