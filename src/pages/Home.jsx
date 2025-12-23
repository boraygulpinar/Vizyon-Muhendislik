import { Link } from 'react-router-dom';

export default function Home() {
  // Öne çıkan projeler (dummy data) – gerçek veri geldiğinde bu yapı kolayca entegre olur
  const featuredProjects = [
    {
      title: 'Endüstriyel Mekanik Tesisat',
      desc: 'Kazan dairesi, pompa grupları ve otomasyon entegrasyonlu proses hatları. Endüstriyel tesislerde yüksek kapasiteli ısıtma sistemleri, hidrofor grupları ve tam otomatik kontrol sistemlerinin kurulumu. Enerji verimliliği odaklı çözümlerle işletme maliyetlerini minimize ediyoruz.',
      img: '/assets/project10.png',
      tag: 'Mekanik',
    },
    {
      title: 'AVM VRF İklimlendirme',
      desc: 'Yüksek verimli VRF, havalandırma ve duman tahliye sistemleri. Alışveriş merkezleri ve büyük ticari alanlar için merkezi klima, hava kalitesi kontrol sistemleri ve yangın güvenliği standartlarına uygun duman tahliye çözümleri. 7/24 kesintisiz konfor ve güvenlik.',
      img: '/assets/project6.jpeg',
      tag: 'Soğutma',
    },
    {
      title: 'Konut Doğalgaz Dönüşümü',
      desc: 'Konut ve site projelerinde doğalgaz iç tesisat ve kombi devreye alma. EPDK onaylı projelendirme, güvenli montaj ve devreye alma süreçleri. Mevzuata tam uyumlu, uzun ömürlü ve ekonomik ısınma çözümleri için A\'dan Z\'ye hizmet.',
      img: '/assets/project3.jpeg',
      tag: 'Doğalgaz',
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative rounded-xl shadow overflow-hidden">
        {/* Background image + overlay */}
        <img
          src="/assets/banner.png"
          alt="Vizyon Mühendislik Isıtma Soğutma Sistemleri Kapak Görseli"
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 bg-black/75" />

        {/* Content */}
        <div className="absolute inset-0 px-6 md:px-10 py-8 md:py-12 text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              Vizyon Mühendislik
            </h1>
            <p className="text-2xl font-bold text-white mt-2 drop-shadow-md"><span className="text-orange-500">Isıtma</span> ve <span className="text-cyan-300">Soğutma</span> Sistemleri</p>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
              Doğalgaz, mekanik tesisat, ısıtma ve soğutma sistemlerinde; mevzuata uygun, güvenilir ve sürdürülebilir çözümler üretiyoruz. Konut, ticari ve endüstriyel projelerde keşif, projelendirme, uygulama ve bakım süreçlerini uçtan uca yönetiyoruz.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 hover:from-orange-600 hover:to-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                Teklif Al
              </Link>
              <Link
                to="/projeler"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 hover:from-cyan-600 hover:to-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Projelerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Doğalgaz Tesisatı ve Uygulamaları', desc: 'Konut, ticari ve endüstriyel yapılarda doğalgaz iç tesisat uygulamaları, proje çizimi, gaz açım süreçleri ve devreye alma hizmetleri.', icon: (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l6 6-6 14-6-14 6-6z"/></svg>
            ) },
            { title: 'Mekanik Tesisat Uygulamaları', desc: 'Temiz su, pis su, yangın tesisatı ve mekanik altyapı sistemlerinin projelendirme ve uygulaması.', icon: (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v3H4zm0 5h16v3H4zm0 5h16v3H4z"/></svg>
            ) },
            { title: 'Isıtma Sistemleri', desc: 'Kombi, kazan, yerden ısıtma, radyatör ve merkezi ısıtma sistemlerinin montaj, bakım ve revizyon hizmetleri.', icon: (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10v2H7zM5 6h14v12H5zM9 10h2v4H9zm4 0h2v4h-2z"/></svg>
            ) },
            { title: 'Soğutma ve İklimlendirme Sistemleri', desc: 'VRF, split klima, chiller ve havalandırma sistemlerinin kurulumu, bakımı ve devreye alınması.', icon: (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6h6l-4.5 4 1.5 7-6-3.5L6 19l1.5-7L3 8h6z"/></svg>
            ) },
            { title: 'Projelendirme ve Mühendislik Hizmetleri', desc: 'Keşif, proje çizimi, metraj, keşif özeti ve teknik danışmanlık hizmetleri.', icon: (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v2H3zm2 4h14v12H5z"/></svg>
            ) },
            { title: 'Bakım, Onarım ve Teknik Servis', desc: 'Isıtma, soğutma ve doğalgaz sistemleri için periyodik bakım, arıza tespiti ve hızlı teknik destek.', icon: (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 015 5 5 5 0 01-1 3l6 6-2 2-6-6a5 5 0 11-2-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
            ) },
          ].map((s, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition duration-300 hover:-translate-y-0.5 overflow-hidden hover:ring-1 hover:ring-yellow-200">
              {/* Background texture/gradients - more pronounced */}
              <div className="pointer-events-none absolute inset-0 opacity-100 mix-blend-normal bg-[radial-gradient(140%_90%_at_0%_0%,rgba(250,204,21,0.18),transparent_60%),radial-gradient(120%_90%_at_100%_100%,rgba(17,24,39,0.14),transparent_55%),radial-gradient(80%_60%_at_95%_10%,rgba(250,204,21,0.12),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]" />
              {/* Gradient top strip */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-400 rounded-t-2xl" />
              {/* Icon badge */}
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-4 ring-1 ring-blue-100">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Neden Biz */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Neden Biz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[ 
            { k: '15+ yıl', v: 'Saha ve Ofis Deneyimi' },
            { k: '450+', v: 'Tamamlanan Proje' },
            { k: '%100', v: 'Uygunluk ve Güvenlik' },
            { k: '7/24', v: 'Teknik Destek' },
          ].map((it, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center border border-gray-100">
              <div className="text-3xl font-extrabold text-blue-700">{it.k}</div>
              <div className="mt-2 text-gray-700 font-medium">{it.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sürecimiz */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sürecimiz</h2>
        <ol className="relative border-s border-gray-200 mx-auto max-w-3xl">
          {[ 
            { t: 'Keşif & Analiz', d: 'Yerinde keşif, mevcut durum analizi ve risklerin tespiti.' },
            { t: 'Projelendirme', d: 'Mevzuata uygun proje çizimi, metraj ve bütçe planı.' },
            { t: 'Uygulama', d: 'Mekanik tesisat montajı, otomasyon ve devreye alma öncesi testler.' },
            { t: 'Test & Devreye Alma', d: 'Basınç ve sızdırmazlık testleri, performans ölçümleri ve onaylar.' },
            { t: 'Bakım & Servis', d: 'Periyodik bakım, arıza giderme ve sistem optimizasyonu.' },
          ].map((s, i) => (
            <li key={i} className="mb-8 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 ring-8 ring-white" />
              <h3 className="font-semibold text-gray-900">{i+1}. {s.t}</h3>
              <p className="text-gray-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Referanslarımız */}
      <section className="relative overflow-hidden rounded-2xl bg-transparent">
        <div className="relative px-6 md:px-10 py-10 md:py-14 text-center space-y-8">
          <div className="space-y-3 max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">Referanslarımız</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[ 
              { name: 'Ülker', logo: '/assets/referanslar/ulkerlogo.png', img: '/assets/referanslar/ulker.jpeg' },
              { name: 'Emlak Konut', logo: '/assets/referanslar/emlakkonutlogo.png', img: '/assets/referanslar/emlakkonut.jpeg' },
              { name: 'Dap Yapı', logo: '/assets/referanslar/dapyapilogo.svg', img: '/assets/referanslar/dapyapi.jpeg' },
              { name: 'Kroman Demir Çelik', logo: '/assets/referanslar/kromanceliklogo.png', img: '/assets/referanslar/kromandemircelik.jpeg' },
              { name: 'Akyat', logo: '/assets/referanslar/akyatlogo.png', img: '/assets/referanslar/akyat.jpeg' },
            ].map((ref, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <img
                    src={ref.img}
                    alt={ref.name}
                    className="h-full w-full object-cover transition duration-500 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/8 to-slate-900/40" />
                </div>
                <div className="relative flex items-start justify-center h-[22rem] pt-6">
                  <div className="h-20 w-32 max-h-24 max-w-36 rounded-xl bg-white/95 shadow-xl ring-2 ring-white/90 border border-gray-200/70 grid place-items-center overflow-hidden px-4 py-3">
                    <img src={ref.logo} alt={`${ref.name} logo`} className="max-h-14 max-w-full object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA - Hızlı Teklif */}
      <section className="relative overflow-hidden rounded-xl shadow">
        {/* Fallback solid background */}
        <div className="absolute inset-0 bg-gray-800" aria-hidden="true" />
        {/* Background image as CSS layer for reliability */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/banner2.png')" }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
        <div className="relative z-10 px-6 md:px-10 py-12 md:py-16 text-center min-h-[320px] md:min-h-[380px] flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Projeniz İçin Hızlı Teklif Alın</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Kısa bir görüşme ile ihtiyaçlarınızı anlayalım, size özel bir yol haritası ve teklif oluşturalım.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/iletisim" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 hover:from-orange-600 hover:to-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300">
              İletişime Geç
            </Link>
            <a href="https://wa.me/905413110031?text=Merhaba" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-[#25d3657e] hover:border-[#25d3657e] hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}