
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navLink = (to, label, matchMode = 'equals', accent = 'cyan') => {
    // '/' için tam eşleşme; diğerlerinde startsWith ile alt sayfalarda da aktif vurgusu
    const isActive = matchMode === 'startsWith'
      ? location.pathname.startsWith(to)
      : location.pathname === to;
    const underlineClass = accent === 'orange' ? 'bg-orange-500' : 'bg-cyan-400';
    return (
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`relative group px-2 py-1 transition ${isActive ? 'text-cyan-400 font-semibold' : 'text-white/90 hover:text-cyan-300'}`}
      >
        <span>{label}</span>
        <span className={`absolute left-0 -bottom-0.5 h-0.5 ${underlineClass} transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </Link>
    );
  };

  return (
    <>
      {/* Header */}
  <header className={`sticky top-0 z-20 backdrop-blur border-b border-gray-800 text-white transition-all duration-300 bg-gray-900/95 shadow-black/30 ${scrolled ? 'shadow-md' : 'shadow-lg'}`}>
  <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}>
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2">
                <div className={`rounded bg-gradient-to-br from-orange-500 to-cyan-500 text-gray-900 grid place-items-center font-extrabold transition-all duration-300 ${scrolled ? 'h-8 w-8' : 'h-9 w-9'}`}>VM</div>
              <div className="leading-tight">
                <div className="font-bold tracking-wide bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Vizyon Mühendislik</div>
                <div className="hidden sm:block text-[10px] text-orange-400 -mt-0.5">Isıtma · Soğutma · Mekanik</div>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Menüyü Aç/Kapat"
              aria-expanded={open ? 'true' : 'false'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                // Close icon
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                </svg>
              )}
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5">
              {navLink('/', 'Anasayfa', 'equals', 'orange')}
              {navLink('/hakkimizda', 'Hakkımızda', 'equals', 'orange')}
              {navLink('/projeler', 'Projeler', 'equals', 'orange')}
              {navLink('/iletisim', 'İletişim', 'equals', 'orange')}
              <a
                href="https://wa.me/905413110031?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all hover:scale-105"
              >
                <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 3C9.383 3 4 8.383 4 15c0 2.644.867 5.085 2.336 7.062L4 29l7.129-2.297A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.9 9.9 0 0 1-5.078-1.383l-.363-.215-4.059 1.307 1.324-3.895-.236-.372A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10zm-4.02 5.98c-.235 0-.54.154-.82.475-.281.32-.963.94-.963 2.297s.987 2.664 1.125 2.848c.139.185 1.95 3.11 4.706 4.237 2.256.934 2.715.748 3.203.701.487-.046 1.576-.645 1.799-1.27.223-.626.223-1.16.156-1.27-.067-.113-.258-.185-.54-.32-.281-.137-1.576-.777-1.821-.865-.246-.092-.425-.139-.604.138-.179.279-.693.865-.85 1.043-.154.179-.308.2-.568.067-.258-.138-1.09-.4-2.078-1.274-.768-.684-1.285-1.529-1.436-1.785-.154-.26-.016-.4.118-.537.121-.12.281-.313.418-.469.139-.155.185-.258.278-.436.093-.179.047-.34-.024-.476-.068-.139-.607-1.5-.83-2.061-.218-.562-.451-.484-.563-.492z"/>
                </svg>
                WhatsApp
              </a>
            </nav>
          </div>
          {/* Mobile nav */}
          {open && (
            <div className="md:hidden pb-3">
              <nav className="flex flex-col gap-2 pt-2 border-t border-white/10">
                {navLink('/', 'Anasayfa', 'equals', 'orange')}
                {navLink('/hakkimizda', 'Hakkımızda', 'equals', 'orange')}
                {navLink('/projeler', 'Projeler', 'equals', 'orange')}
                {navLink('/iletisim', 'İletişim', 'equals', 'orange')}
                <a
                  href="https://wa.me/905413110031?text=Merhaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold w-max transition"
                >
                  <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.644.867 5.085 2.336 7.062L4 29l7.129-2.297A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.9 9.9 0 0 1-5.078-1.383l-.363-.215-4.059 1.307 1.324-3.895-.236-.372A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10zm-4.02 5.98c-.235 0-.54.154-.82.475-.281.32-.963.94-.963 2.297s.987 2.664 1.125 2.848c.139.185 1.95 3.11 4.706 4.237 2.256.934 2.715.748 3.203.701.487-.046 1.576-.645 1.799-1.27.223-.626.223-1.16.156-1.27-.067-.113-.258-.185-.54-.32-.281-.137-1.576-.777-1.821-.865-.246-.092-.425-.139-.604.138-.179.279-.693.865-.85 1.043-.154.179-.308.2-.568.067-.258-.138-1.09-.4-2.078-1.274-.768-.684-1.285-1.529-1.436-1.785-.154-.26-.016-.4.118-.537.121-.12.281-.313.418-.469.139-.155.185-.258.278-.436.093-.179.047-.34-.024-.476-.068-.139-.607-1.5-.83-2.061-.218-.562-.451-.484-.563-.492z"/>
                  </svg>
                  WhatsApp
                </a>
              </nav>
            </div>
          )}
        </div>
        {/* Removed progress line */}
      </header>

  <main className="bg-gradient-to-b from-gray-100 to-gray-50 min-h-screen py-8">
  <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 text-white">
        {/* Removed accent/progress line under navbar as requested */}
  <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-orange-500 to-cyan-500 text-gray-900 grid place-items-center font-extrabold">VM</div>
              <div className="font-bold tracking-wide">Vizyon Mühendislik</div>
            </div>
            <p className="text-sm text-white/70">Doğalgaz, mekanik tesisat, ısıtma ve soğutma sistemlerinde güvenilir ve sürdürülebilir çözümler sunuyoruz.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Hızlı Linkler</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-cyan-400">Anasayfa</Link></li>
              <li><Link to="/hakkimizda" className="hover:text-cyan-400">Hakkımızda</Link></li>
              <li><Link to="/projeler" className="hover:text-cyan-400">Projeler</Link></li>
              <li><Link to="/iletisim" className="hover:text-cyan-400">İletişim</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">İletişim</div>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h1.372c.516 0 .97.332 1.12.826l.822 2.74a1.125 1.125 0 0 1-.52 1.298l-1.293.776a.75.75 0 0 0-.27 1.04 11.285 11.285 0 0 0 5.146 5.146.75.75 0 0 0 1.04-.27l.776-1.293a1.125 1.125 0 0 1 1.298-.52l2.74.822c.494.149.826.604.826 1.12V18.75A2.25 2.25 0 0 1 18.75 21h-1.5C9.708 21 3 14.292 3 6.75v-1.5Z"/></svg>
                <a href="tel:+905304582651" className="hover:text-cyan-400">+90 (541) 311 00 31</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v6.58A3.75 3.75 0 0 0 5.25 19h13.5A3.75 3.75 0 0 0 22.5 15.25V8.67l-9.553 5.731a2.25 2.25 0 0 1-2.394 0L1.5 8.67Z"/><path d="M22.5 6.75v-.003A3.75 3.75 0 0 0 18.75 3h-13.5A3.75 3.75 0 0 0 1.5 6.747V6.75l9.553 5.73a2.25 2.25 0 0 0 2.394 0L22.5 6.75Z"/></svg>
                <a href="mailto:vizyon.muhendislik0@gmail.com" className="hover:text-cyan-400">vizyon.muhendislik0@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M11.47 3.84a.75.75 0 0 1 1.06 0 12.7 12.7 0 0 1 3.95 6.32c.23.89.3 1.83.2 2.76-.23 2.08-1.33 4.06-3.42 5.95a12.28 12.28 0 0 1-1.76 1.32.75.75 0 0 1-.79 0 12.28 12.28 0 0 1-1.76-1.32c-2.09-1.9-3.2-3.87-3.43-5.95-.1-.93-.03-1.87.2-2.76a12.7 12.7 0 0 1 3.95-6.32Z" clipRule="evenodd"/><path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"/></svg>
                <span>
                  <span className="block">Pendik, İstanbul</span>
                  <span className="block">Türkiye</span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Bizi Takip Edin</div>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/gokha_nolur" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full border border-white/20 hover:bg-white/10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/70 flex items-center justify-between">
            <span>© {new Date().getFullYear()} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Vizyon Mühendislik</span> — Isıtma · Soğutma · Mekanik Tesisat</span>
          </div>
        </div>
      </footer>
    </>
  );
}