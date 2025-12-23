import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EndustriyelDogalgazTesisatiDetail({ project }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const FALLBACK_IMG = '/src/assets/projects/pro1.jpeg';
  const onImgError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = FALLBACK_IMG;
    }
  };

  const detailIntro = 'Bu sistem yalnızca boru döşemekten ibaret değildir. Aşağıdaki aşamaları ve bileşenleri kapsar:';
  const detailSteps = [
    {
      title: 'Gazın Tesise Girişi',
      items: [
        'Doğalgaz, şehir şebekesinden tesise belirli bir basınç ve debi ile alınır.',
        'Tesis girişinde: ana kesme vanaları, filtreler, sayaç ve regülatörler bulunur.',
      ],
    },
    {
      title: 'Basınç Düşürme ve Kontrol',
      items: [
        "Endüstriyel sistemlerde gaz, genellikle yüksek basınçla gelir. Bu nedenle:",
        "RMS istasyonları ile basınç düşürülür.",
        "Gaz debisi kontrol altına alınır.",
        "Olası basınç dalgalanmalarına karşı emniyet sağlanır."
      ],
    },
    {
      title: 'İç Tesisat ve Dağıtım Hatları',
      items: [
        "Gaz, çelik borular aracılığıyla;",
        "Buhar kazanlarına",
        "Sıcak su kazanlarına",
        "Fırınlara",
        "Kurutma ve üretim makinelerine taşınır.",
        "Borulama, yüksek sıcaklık ve basınca dayanıklı şekilde projelendirilir."
      ],
    },
    {
      title: 'Yakıcı Sistemler ve Proses',
      items: [
        
      ],
    },
  ];

  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg shadow-black/10 ring-1 ring-gray-200">
            <img
              src={project.img}
              alt={project.title}
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
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project.title}</h1>
              <p className="text-gray-700 leading-relaxed">{project.summary || project.info}</p>
            </div>

            <div className="space-y-3">
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
              src={project.img}
              alt={project.title}
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
