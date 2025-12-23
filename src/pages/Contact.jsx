export default function Contact() {

  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Sol: İletişim Bilgileri (kartlar halinde) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">İletişim Bilgileri</h2>
            <p className="mt-2 text-gray-600 max-w-prose">Doğalgaz, ısıtma-soğutma ve mekanik tesisat ihtiyaçlarınız için keşif, proje ve teknik servis taleplerinizi bize iletebilirsiniz.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Adres */}
              <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="shrink-0 h-12 w-12 rounded bg-black grid place-items-center text-white">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 11a2 2 0 110-4 2 2 0 010 4z"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Adres</div>
                  <div className="text-gray-600">Çamçeşme Mah. Çanakkale Şehitleri Sok. No:25 D:11, Pendik / İstanbul</div>
                </div>
              </div>
              {/* Telefon */}
              <div className="flex items-start gap-2 rounded-2xl border border-gray-200 bg-white p-3 md:p-4 shadow-sm hover:shadow-md transition">
                <div className="shrink-0 h-10 w-10 rounded bg-black grid place-items-center text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefon</div>
                  <div className="text-gray-600 text-sm md:text-base">+90 (541) 311 00 31</div>
                </div>
              </div>
              {/* E‑Mail */}
              <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition sm:col-span-2">
                <div className="shrink-0 h-12 w-12 rounded bg-black grid place-items-center text-white">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 3L12 12 5.4 7h13.2z"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">E‑Mail</div>
                  <div className="text-gray-600">info@vizyonmuhendislik.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ: Hızlı Ulaşım ve Ek Bilgiler */}
          <div className="space-y-5">
            {/* Hızlı Ulaşım CTA */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Bize Ulaşın</h3>
              <p className="text-gray-600 mt-1">Keşif randevusu, proje soruları veya acil servis için bizi arayın ya da yazın.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/905413110031?text=Merhaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                >
                  <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.644.867 5.085 2.336 7.062L4 29l7.129-2.297A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.9 9.9 0 0 1-5.078-1.383l-.363-.215-4.059 1.307 1.324-3.895-.236-.372A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10zm-4.02 5.98c-.235 0-.54.154-.82.475-.281.32-.963.94-.963 2.297s.987 2.664 1.125 2.848c.139.185 1.95 3.11 4.706 4.237 2.256.934 2.715.748 3.203.701.487-.046 1.576-.645 1.799-1.27.223-.626.223-1.16.156-1.27-.067-.113-.258-.185-.54-.32-.281-.137-1.576-.777-1.821-.865-.246-.092-.425-.139-.604.138-.179.279-.693.865-.85 1.043-.154.179-.308.2-.568.067-.258-.138-1.09-.4-2.078-1.274-.768-.684-1.285-1.529-1.436-1.785-.154-.26-.016-.4.118-.537.121-.12.281-.313.418-.469.139-.155.185-.258.278-.436.093-.179.047-.34-.024-.476-.068-.139-.607-1.5-.83-2.061-.218-.562-.451-.484-.563-.492z"/>
                  </svg>
                  Whatsapp
                </a>
                <a href="mailto:info@sirketadi.com" className="inline-flex items-center justify-center gap-2 h-11 rounded-lg border border-gray-300 hover:bg-gray-50 transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 3L12 12 5.4 7h13.2z"/></svg>
                  E‑posta Gönder
                </a>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Çalışma Saatleri</h3>
              <ul className="mt-3 text-gray-700 space-y-1 text-sm">
                <li className="flex items-center justify-between"><span>Pazartesi — Cuma</span><span>09:00 — 18:00</span></li>
                <li className="flex items-center justify-between"><span>Cumartesi</span><span>10:00 — 16:00</span></li>
                <li className="flex items-center justify-between"><span>Pazar</span><span>Kapalı</span></li>
              </ul>
            </div>

            {/* Sosyal Medya */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Sosyal Medya</h3>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" className="h-10 w-10 grid place-items-center rounded-full border border-current text-[#E4405F] hover:bg-[#E4405F]/10 transition" aria-label="Instagram">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
                </a>
                <a href="#" className="h-10 w-10 grid place-items-center rounded-full border border-current text-[#1877F2] hover:bg-[#1877F2]/10 transition" aria-label="Facebook">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3h4a1 1 0 011 1v4h-3a1 1 0 00-1 1v3h4l-1 4h-3v6h-4v-6H7v-4h3V9a6 6 0 016-6z"/></svg>
                </a>
                <a href="#" className="h-10 w-10 grid place-items-center rounded-full border border-current text-[#0A66C2] hover:bg-[#0A66C2]/10 transition" aria-label="LinkedIn">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.8 2.6 4.8 6V24h-4v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V24h-4V8z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Harita */}
      <div className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Harita"
              src="https://www.google.com/maps?q=40.8883459,29.2551001&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}