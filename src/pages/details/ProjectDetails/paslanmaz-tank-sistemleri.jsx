import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../../data/projects';

export default function PaslanmazTankSistemleriDetail({ project }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const FALLBACK_IMG = '/assets/projects/pro8.jpeg';

  const currentIndex = PROJECTS.findIndex(p => p.title === project.title);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

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

  const detailSteps = [
    {
      title: 'Sistem Bileşenleri',
      items: [
        'Paslanmaz gövde (dikey / yatay)',
        'Cidarlı (ceketli) yapı – buhar, sıcak su veya kızgın yağ için',
        'Isı izolasyonu (taş yünü / cam yünü)',
        'Seviye göstergesi',
        'Emniyet ventili',
        'Drenaj ve havalandırma hatları',
        'Giriş – çıkış nozulları',
        'İsteğe bağlı karıştırıcı ve otomasyon',
      ],
    },
    {
      title: 'Kullanım Amaçları',
      items: [
        'Akışkanın sıcaklığını sabit tutmak',
        'Hijyenik depolama sağlamak',
        'Kimyasal ve termal dayanım elde etmek',
        'Proses güvenliğini artırmak',
      ],
    },
    {
      title: 'Kullanım Alanları',
      items: [
        'Endüstriyel doğalgaz tesisleri',
        'Buhar kazan sistemleri',
        'Gıda ve kimya sanayi',
        'Enerji ve ısıtma sistemleri',
      ],
    },
    {
      title: '🔧 PASLANMAZ BORU SİSTEMLERİ – AÇIKLAMA',
      items: [
        'Paslanmaz boru sistemleri, tesis içinde akışkanların güvenli, sızdırmaz ve kontrollü şekilde taşınmasını sağlayan borulama altyapılarıdır. Yüksek sıcaklık, basınç ve kimyasal etkilere karşı dayanıklıdır.',
      ],
    },
    {
      title: 'Sistem Türleri',
      items: [
        'Tek cidarlı paslanmaz boru',
        'Cidarlı (ceketli) boru sistemleri',
        'İzoleli boru hatları',
        'Esnek kompansatörlü hatlar',
      ],
    },
    {
      title: 'Cidarlı Boru Sistemleri',
      items: [
        'Cidarlı borularda ana boru içinden proses akışkanı geçerken, dış cidarda: buhar, sıcak su, kızgın yağ dolaştırılarak akışkan sıcaklığı kontrol altında tutulur.',
      ],
    },
    {
      title: 'Avantajları',
      items: [
        'Isı kaybını önler',
        'Akışkanın donmasını engeller',
        'Proses verimini artırır',
        'Enerji tasarrufu sağlar',
        'Uzun ömürlü ve güvenlidir',
      ],
    },
    {
      title: '⚙️ PASLANMAZ TANK & BORU SİSTEMLERİNİN BİRLİKTE ÇALIŞMASI',
      items: [
        'Paslanmaz tank ve boru sistemleri entegre çalışarak: akışkanın depolanmasını, ısıtılmasını / soğutulmasını, güvenli taşınmasını tek bir mühendislik çözümü haline getirir.',
        'Bu sistemler projelendirme, imalat, montaj, izolasyon ve devreye alma aşamalarıyla anahtar teslim olarak uygulanır.',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
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
            src={project?.img || FALLBACK_IMG}
            alt={project?.title || 'Paslanmaz Tank Sistemleri'}
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
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project?.title || 'Paslanmaz Tank Sistemleri'}</h1>
            <p className="text-gray-700 leading-relaxed">{project?.summary}</p>
          </div>

          <div className="space-y-3">
            <div className="space-y-3">
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
          </div>

          <div className="pt-2"></div>
        </div>
      </div>

      <div className="mt-10">
        <Link className="text-yellow-700 font-semibold hover:underline" to="/projeler">← Projeler'e dön</Link>
      </div>

      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setShowLightbox(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={project?.img || FALLBACK_IMG}
              alt={project?.title || 'Paslanmaz Tank Sistemleri'}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onError={onImgError}
            />
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-light"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
