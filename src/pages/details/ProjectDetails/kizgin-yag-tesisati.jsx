import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../../data/projects';

export default function KizginYagTesisatiDetail({ project }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const FALLBACK_IMG = '/assets/projects/pro5.jpeg';
  
  // Mevcut projenin index'ini bul
  const currentIndex = PROJECTS.findIndex(p => p.title === project.title);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];
  
  // Proje linkini oluştur
  const getProjectLink = (title) => {
    const slugMap = {
      'Endüstriyel Doğalgaz Tesisatı': 'endustriyel-dogalgaz-tesisati',
      'Buhar Kazan Tesisatı': 'buhar-kazan-tesisati',
      'Doğalgaz Altyapı Tesisatı': 'dogalgaz-altyapi-tesisati',
      'Paslanmaz Tank Sistemleri': 'paslanmaz-tank-sistemleri',
      'Merkezi Sistem Doğalgaz': 'merkezi-sistem-dogalgaz',
      'Kızgın Yağ Tesisatı': 'kizgin-yag-tesisati',
      'Kızgın Su Tesisatı': 'kizgin-su-tesisati',
      'Radyant Isıtma Sistemleri': 'radyant-isitma-sistemleri',
    };
    const fallback = title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[ç]/g, 'c')
      .replace(/[ğ]/g, 'g')
      .replace(/[ı]/g, 'i')
      .replace(/[ö]/g, 'o')
      .replace(/[ş]/g, 's')
      .replace(/[ü]/g, 'u');
    return `/projeler/${slugMap[title] || fallback}`;
  };
  const onImgError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = FALLBACK_IMG;
    }
  };

  const detailIntro = 'Kızgın Yağ Tesisatı Nasıl Çalışır?';
  const detailSteps = [
    {
      title: 'Isı Üretimi',
      items: [
        'Doğalgaz, LPG veya sıvı yakıt ile çalışan kızgın yağ kazanı (ısıtıcı) bulunur.',
        'Isı transfer yağı, kazan içerisinde ısıtılır.',
        'Yağ, 250–350 °C gibi yüksek sıcaklıklara çıkabilir.',
        'Bu sıcaklıklar, buhar sistemlerinde gereken yüksek basınçlara ihtiyaç duyulmadan elde edilir.',
      ],
    },
    {
      title: 'Isının Taşınması',
      items: [
        'Isıtılan yağ, sirkülasyon pompaları ile kapalı devre hatlarda dolaştırılır.',
        'Çelik boru tesisatı ve özel contalar kullanılır.',
        'Hatlar yüksek sıcaklığa dayanıklı şekilde yalıtılır.',
      ],
    },
    {
      title: 'Isının Kullanımı',
      items: [
        'Kızgın yağ, proses ekipmanlarında ısıyı aktarır:',
        'Reaktörler',
        'Kurutma fırınları',
        'Presler',
        'Kalıplar',
        'Isı eşanjörleri',
        'Isısını bırakan yağ tekrar kazana dönerek yeniden ısıtılır.',
      ],
    },
    {
      title: 'Emniyet ve Kontrol Sistemleri',
      items: [
        'Emniyet genleşme tankları',
        'Aşırı sıcaklık ve debi kontrolü',
        'Otomasyon ve alarm sistemleri',
        'Yağ seviye ve basınç izleme ekipmanları',
      ],
    },
    {
      title: 'Kızgın Yağ Tesisatının Temel Bileşenleri',
      items: [
        'Kızgın yağ kazanı',
        'Sirkülasyon pompaları',
        'Genleşme ve dengeleme tankları',
        'Yalıtımlı çelik boru hatları',
        'Otomasyon ve kontrol panelleri',
        'Emniyet ekipmanları',
      ],
    },
    {
      title: 'Kızgın Yağ Tesisatının Avantajları',
      items: [
        '✔ Yüksek sıcaklık – düşük basınç',
        '✔ Daha güvenli işletme',
        '✔ Sabit ve homojen ısı dağılımı',
        '✔ Enerji verimliliği',
        '✔ Uzun ekipman ömrü',
      ],
    },
  ];

  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projeler Arası Geçiş */}
        <div className="mb-10 pb-8 border-b border-gray-200">
          <div className="grid grid-cols-2 gap-6">
            {/* Önceki Proje */}
            <Link
              to={getProjectLink(prevProject.title)}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                  src={prevProject.img}
                  alt={prevProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  onError={(e) => e.currentTarget.src = FALLBACK_IMG}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-white">
                <p className="text-xs font-semibold text-white/70">← Önceki Proje</p>
                <h3 className="font-semibold line-clamp-2">{prevProject.title}</h3>
              </div>
            </Link>

            {/* Sonraki Proje */}
            <Link
              to={getProjectLink(nextProject.title)}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                  src={nextProject.img}
                  alt={nextProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  onError={(e) => e.currentTarget.src = FALLBACK_IMG}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col items-end justify-end p-4 text-white text-right">
                <p className="text-xs font-semibold text-white/70">Sonraki Proje →</p>
                <h3 className="font-semibold line-clamp-2">{nextProject.title}</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg shadow-black/10 ring-1 ring-gray-200">
            <img
              src={project?.img}
              alt={project?.title || 'Kızgın Yağ Tesisatı'}
              className="w-full h-full object-cover max-h-[520px]"
              loading="lazy"
              decoding="async"
              onError={onImgError}
              onClick={() => setShowLightbox(true)}
              style={{ cursor: 'zoom-in' }}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project?.title || 'Kızgın Yağ Tesisatı'}</h1>
              {project?.summary && (
                <p className="text-gray-700 leading-relaxed">{project.summary}</p>
              )}
            </div>

            <div className="space-y-3">
              {detailIntro && (
                <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm shadow-black/5">
                  <p className="text-sm font-semibold text-gray-900 leading-relaxed">{detailIntro}</p>
                </div>
              )}
              {detailSteps.map((step) => (
                <div key={step.title} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm shadow-black/5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-2"></div>
          </div>
        </div>

        <div className="mt-10">
          <Link className="text-yellow-700 font-semibold hover:underline" to="/projeler">← Projeler'e dön</Link>
        </div>
      </div>

      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setShowLightbox(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={project?.img}
              alt={project?.title || 'Kızgın Yağ Tesisatı'}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onError={onImgError}
            />
            <button
              type="button"
              className="absolute -top-3 -right-3 bg-white/90 text-gray-900 rounded-full px-3 py-1 text-xs font-semibold shadow"
              onClick={() => setShowLightbox(false)}
            >Kapat</button>
          </div>
        </div>
      )}
    </section>
  );
}
