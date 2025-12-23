import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BuharKazanTesisatiDetail({ project }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const FALLBACK_IMG = '/assets/projects/pro2.jpeg';
  const onImgError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = FALLBACK_IMG;
    }
  };

  const detailIntro = 'Buhar Kazan Tesisatı Nasıl Çalışır? ';
  const detailSteps = [
    {
      title: 'Su Hazırlama ve Besleme',
      items: [
        'Kazan verimli ve uzun ömürlü çalışabilmesi için sisteme verilen su mutlaka hazırlanır.',
        'Şebeke suyu → arıtma ve yumuşatma sistemlerinden geçer.',
        "Kimyasal şartlandırma ile kireç ve korozyon önlenir Besi suyu tankında toplanır ve pompalarla kazana gönderilir."
      ],
    },
    {
      title: 'Isıtma ve Buhar Üretimi',
      items: [
        'Kazana giren su, brülör tarafından yakılan doğalgaz veya diğer yakıtlar sayesinde ısıtılır.',
        'Su, belirli basınç ve sıcaklık değerlerine ulaştığında buhara dönüşür.',
        'Üretilen buhar kazanın üst bölümünde toplanır.'
      ],
    },
    {
      title: 'Buharın Dağıtılması',
      items: [
        'Buhar, yalıtımlı çelik borular aracılığıyla kullanım noktalarına iletilir.',
        'Buhar hatlarında; vana, separatör ve buhar kapanları bulunur.',
        'Amaç buharı kuru, sabit basınçta ve kayıpsız taşımaktır.'
      ],
    },
    {
      title: 'Buharın Kullanılması',
      items: [
        'Üretilen buhar;',
        'Üretim makinelerinde',
        'Endüstriyel fırınlarda',
        'Kurutma ve ısıtma proseslerinde',
        'Otoklav ve sterilizasyon sistemlerinde kullanılır.'
      ],
    },
    {
      title: 'Kondens (Yoğuşma) Geri Dönüşü',
      items: [
        'Buhar görevini tamamladığında tekrar suya (kondens) dönüşür.',
        'Bu sıcak kondens, kondens hatlarıyla geri toplanır.',
        'Enerji kaybını azaltmak için tekrar besi suyu tankına gönderilir.'
      ],
    },
    {
      title: 'Emniyet, Kontrol ve Otomasyon',
      items: [
        'Buhar kazan tesisatlarında güvenlik hayati önemdedir:',
        'Emniyet ventilleri (aşırı basınca karşı)',
        'Su seviye kontrol sistemleri',
        'Basınç ve sıcaklık sensörleri',
        'Otomatik durdurma ve alarm sistemleri',
        'Gaz kaçak ve alev kontrol sistemleri',
        'Projelendirme ve Yasal Uyum',
        'Tüm sistem;',
        'TS EN standartlarına,',
        'İş Sağlığı ve Güvenliği Yönetmeliklerine,',
        'Doğalgaz ve basınçlı kap mevzuatına uygun şekilde projelendirilir, test edilir ve periyodik kontrolleri yapılır.',


      ],
    },
    {
      title: 'Buhar Kazan Tesisatının Amacı',
      items: [
        '✔ Güvenli buhar üretimi',
        '✔ Enerji tasarrufu ve düşük işletme maliyeti',
        '✔ Kesintisiz ve stabil üretim',
        '✔ Ekipman ömrünü uzatma',
        '✔ İş güvenliği sağlama'
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
              alt={project?.title || 'Buhar Kazan Tesisatı'}
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
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project?.title || 'Buhar Kazan Tesisatı'}</h1>
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
              alt={project?.title || 'Buhar Kazan Tesisatı'}
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
