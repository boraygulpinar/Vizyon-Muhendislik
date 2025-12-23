export default function About() {
  const FALLBACK_IMG = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80';
  const onImgError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = FALLBACK_IMG;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col gap-16">
      {/* Hakkımızda - uzun metin + yan görsel */}
      <section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-3 px-3 py-1 text-xs tracking-wide font-semibold rounded-full bg-blue-100 text-blue-800 ring-1 ring-blue-200">
              Hakkımızda
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Vizyon Mühendislik
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 mt-3">
              Isıtma · Soğutma Sistemleri
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Doğalgaz, mekanik tesisat, ısıtma ve soğutma sistemleri alanında faaliyet gösteren firmamız; mühendislik esaslarına dayalı, güvenilir ve sürdürülebilir çözümler sunmayı ilke edinmiştir. Konut, ticari ve endüstriyel projelerde keşif, projelendirme, uygulama ve bakım hizmetlerini yürürlükteki mevzuat ve teknik standartlara uygun şekilde gerçekleştirmekteyiz.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Alanında deneyimli teknik kadromuz ve kaliteli malzeme anlayışımızla, enerji verimliliği yüksek, uzun ömürlü ve güvenli sistemler kurarak müşteri memnuniyetini en üst seviyede tutmayı hedefliyoruz. Zamanında teslim, şeffaf çalışma prensibi ve profesyonel hizmet anlayışıyla sektörde güvenilir bir çözüm ortağı olmayı sürdürüyoruz.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg shadow-black/10 ring-1 ring-gray-200/60 bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1582719478248-58d7dc8c9a3e?auto=format&fit=crop&w=1600&q=80"
                alt="Mekanik tesisatta çalışan teknisyen"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                onError={onImgError}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Vizyon & Misyon - yatay ikiye bölünmüş */}
      <section>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-black/5 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-yellow-50 text-yellow-700 grid place-items-center ring-1 ring-yellow-100">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Vizyonumuz</h3>
                  <p className="mt-2 text-gray-600">Enerji verimliliği yüksek, güvenli ve sürdürülebilir mekanik tesisat çözümleriyle sektörün referans gösterilen markalarından biri olmak; tüm projelerde mühendislik disiplinini, şeffaflığı ve güveni temel almak.</p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-yellow-50 text-yellow-700 grid place-items-center ring-1 ring-yellow-100">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l9-9 9 9-1.5 1.5L12 5.5 4.5 13.5 3 12z"/><path d="M5 21v-6h2v6H5zm6 0v-9h2v9h-2zm6 0v-12h2v12h-2z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Misyonumuz</h3>
                  <p className="mt-2 text-gray-600">Konut, ticari ve endüstriyel yapılarda doğalgaz, ısıtma-soğutma ve mekanik tesisat ihtiyaçlarına mevzuata uygun, güvenli ve uzun ömürlü çözümler sunmak; keşiften devreye almaya kadar tüm süreçlerde zamanında teslim ve şeffaf iletişimi garanti etmek.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ekibimiz */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ekibimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { n: 'Ayşe Demir', u: 'Makine Mühendisi', img: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg' },
            { n: 'Mehmet Yılmaz', u: 'Proje Müdürü', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80' },
            { n: 'Elif Aydın', u: 'Teknik Ofis & Projelendirme', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' },
            { n: 'Can Kaya', u: 'Saha Şefi', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80' },
          ].map((p, i) => (
            <div key={i} className="group relative bg-white rounded-2xl border border-gray-100 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 ring-1 ring-transparent hover:ring-blue-400/40">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <img
                  src={p.img}
                  alt={p.n}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={onImgError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </div>
              <div className="p-4">
                <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{p.n}</div>
                <div className="text-sm text-gray-600">{p.u}</div>
                <div className="mt-3 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="h-9 w-9 grid place-items-center rounded-full border border-gray-200 text-gray-600 bg-white transition-all duration-300 ease-out hover:scale-105 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/60" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.8 2.6 4.8 6V24h-4v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V24h-4V8z"/></svg>
                  </a>
                  <a href="#" className="h-9 w-9 grid place-items-center rounded-full border border-gray-200 text-gray-600 bg-white transition-all duration-300 ease-out hover:scale-105 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-fuchsia-500/30 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-fuchsia-500 hover:to-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}