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
    </div>
  );
}