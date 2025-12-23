import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RadyantIsitmaSistemleriDetail({ project }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const FALLBACK_IMG = '/src/assets/projects/pro7.jpeg';
  const onImgError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = FALLBACK_IMG;
    }
  };

  const detailSteps = [
    {
      title: "Radyant Isıtma Sistemleri Nasıl Çalışır?",
      items: [
        'Doğalgaz, elektrik veya sıcak su ile çalışan radyant ısıtıcılar kullanılır.',
        'Isıtıcı yüzeyler kızılötesi (infrared) ışınım yayar.',
        'Bu ışınım, temas ettiği yüzeyleri ve insanları ısıtır.',
        'Isınan yüzeyler, ortama dengeli bir ısı yayar.',
        'Bu sayede tavan altında ısı birikmesi önlenir.',
      ],
    },
    {
      title: 'Radyant Isıtma Sistemlerinin Türleri',
      items: [
        '🔹 Gazlı Radyant Isıtıcılar',
        'Doğalgaz veya LPG ile çalışır.',
        'Endüstriyel alanlarda yaygındır',
        '🔹 Elektrikli Radyant Isıtıcılar',
        'Lokal ve kısa süreli kullanım için uygundur.',
        '🔹 Sıcak Sulu Radyant Sistemler',
        'Merkezi kazan sistemiyle çalışır.',
        'Büyük alanlarda homojen ısı sağlar.',
      ],
    },
  ];

  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg shadow-black/10 ring-1 ring-gray-200">
            <img
              src={project?.img}
              alt={project?.title || 'Radyant Isıtma Sistemleri'}
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
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project?.title || 'Radyant Isıtma Sistemleri'}</h1>
              {project?.summary && (
                <p className="text-gray-700 leading-relaxed">{project.summary}</p>
              )}
            </div>

            <div className="space-y-3">
              {detailSteps.map((step, idx) => (
                <div key={(step.title || 'bolum') + '-' + idx} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm shadow-black/5">
                  {step.title && (
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">{step.title}</h3>
                  )}
                  {
                    (() => {
                      const items = step.items || [];
                      const hasSubheaders = items.some((it) => it.startsWith('🔹 '));
                      if (!hasSubheaders) {
                        return (
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        );
                      }
                      const groups = [];
                      items.forEach((it) => {
                        if (it.startsWith('🔹 ')) {
                          groups.push({ header: it, items: [] });
                        } else if (groups.length) {
                          groups[groups.length - 1].items.push(it);
                        } else {
                          groups.push({ header: null, items: [it] });
                        }
                      });
                      return (
                        <div className="space-y-2">
                          {groups.map((g, gi) => (
                            <div key={(g.header || 'grup') + '-' + gi}>
                              {g.header && (
                                <div className="text-sm font-semibold text-gray-900">{g.header}</div>
                              )}
                              {g.items.length > 0 && (
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                  {g.items.map((sub, si) => (
                                    <li key={(g.header || 'sub') + '-' + si}>{sub}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    })()
                  }
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
              alt={project?.title || 'Radyant Isıtma Sistemleri'}
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
