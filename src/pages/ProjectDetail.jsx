import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import EndustriyelDogalgazTesisatiDetail from './details/ProjectDetails/endustriyel-dogalgaz-tesisatı';
import { getProjectById } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = useMemo(() => getProjectById(id), [id]);

  const FALLBACK_IMG = '/src/assets/projects/pro1.jpeg';
  const onImgError = (e) => {
    if (e?.currentTarget) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = FALLBACK_IMG;
    }
  };

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <p className="text-gray-700">Proje bulunamadı.</p>
          <Link className="inline-block mt-4 text-yellow-700 font-semibold hover:underline" to="/projeler">Projeler'e dön</Link>
        </div>
      </div>
    );
  }

  // Proje 1 için özel detay bileşenine yönlendir
  if (project.id === 1) {
    return <EndustriyelDogalgazTesisatiDetail project={project} />;
  }

  // Proje bazlı detay adımları
  const detailStepsById = {
    1: {
      intro: 'Bu sistem yalnızca boru döşemekten ibaret değildir. Aşağıdaki aşamaları ve bileşenleri kapsar:',
      steps: [
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
            'RMS istasyonları ile basınç düşürülür.',
            'Gaz debisi kontrol altına alınır, basınç dalgalanmalarına karşı emniyet sağlanır.',
          ],
        },
        {
          title: 'İç Tesisat ve Dağıtım Hatları',
          items: [
            'Gaz, çelik borularla buhar kazanlarına, sıcak su kazanlarına, fırınlara, kurutma ve üretim makinelerine taşınır.',
            'Borulama, yüksek sıcaklık ve basınca dayanıklı şekilde projelendirilir.',
          ],
        },
        {
          title: 'Yakıcı Sistemler ve Proses',
          items: [
            'Yakıcı sistemlere güvenli dağıtım yapılır.',
            'Proses ihtiyaçlarına uygun kontrol ekipmanları ile tamamlanır.',
          ],
        },
      ],
    },
    2: {
      intro:
        'Buhar Kazan Tesisatı Nasıl Çalışır? Bu tesisat yalnızca bir kazan değil; kazanla birlikte çalışan tüm yardımcı sistemleri kapsar ve üretimin sürekliliği açısından kritik öneme sahiptir.',
      steps: [
      {
        title: 'Su Hazırlama ve Besleme',
        items: [
          'Şebeke suyunun arıtma ve yumuşatma sonrası şartlandırılması',
          'Besi suyu tankında toplanıp pompalarla kazana gönderilmesi',
        ],
      },
      {
        title: 'Isıtma ve Buhar Üretimi',
        items: [
          'Brülör ile suyun ısıtılarak basınçta buhara dönüştürülmesi',
          'Üretilen buharın kazanın üst bölümünde toplanması',
        ],
      },
      {
        title: 'Buharın Dağıtılması',
        items: [
          'Yalıtımlı çelik borularla kullanım noktalarına iletim',
          'Hatlarda vana, separatör ve buhar kapanları ile kuru ve sabit basınçta taşıma',
        ],
      },
      {
        title: 'Buharın Kullanılması',
        items: [
          'Üretim makineleri, endüstriyel fırınlar, kurutma ve ısıtma prosesleri',
          'Otoklav ve sterilizasyon sistemleri',
        ],
      },
      {
        title: 'Kondens Geri Dönüşü',
        items: [
          'Kondensin hatlarla toplanıp besi suyu tankına geri gönderilmesi',
          'Enerji kaybını azaltmak için geri kazanım',
        ],
      },
      {
        title: 'Emniyet, Kontrol ve Otomasyon',
        items: [
          'Emniyet ventilleri, seviye kontrol, basınç-sıcaklık sensörleri',
          'Otomatik durdurma/alarm, gaz kaçak ve alev kontrol sistemleri',
        ],
      },
      {
        title: 'Projelendirme ve Yasal Uyum',
        items: [
          'TS EN standartlarına uygunluk',
          'İş Sağlığı ve Güvenliği Yönetmeliklerine uygunluk',
          'Doğalgaz ve basınçlı kap mevzuatına uygunluk, test ve periyodik kontroller',
        ],
      },
      {
        title: 'Buhar Kazan Tesisatının Amacı',
        items: [
          'Güvenli buhar üretimi',
          'Enerji tasarrufu ve düşük işletme maliyeti',
          'Kesintisiz ve stabil üretim',
          'Ekipman ömrünü uzatma',
          'İş güvenliği sağlama',
        ],
      },
      ],
    },
    3: {
      steps: [
      {
        title: 'Şehir Şebekesi Bağlantısı',
        items: [
          'Ana bağlantı hattı, servis kutusu ve ana kesme vanası',
        ],
      },
      {
        title: 'Yer Altı Doğalgaz Hatları',
        items: [
          'Çelik veya PE boruların korumalı ve yalıtımlı döşenmesi',
          'Gazın bina/tesis sınırına taşınması',
        ],
      },
      {
        title: 'Bina / Tesis Giriş Donanımları',
        items: [
          'Giriş vanası, regülatör, gaz sayacı, filtre ve emniyet ekipmanları',
        ],
      },
      {
        title: 'Basınç Kontrol ve Emniyet',
        items: [
          'Aşırı basınç kesici, gaz tahliye hatları, acil kapatma sistemleri',
        ],
      },
      {
        title: 'Proje, Test ve Onay',
        items: [
          'Yetkili mühendislik, dağıtım şirketi onayı, kaynak ve basınç testleri, devreye alma',
        ],
      },
      ],
    },
    4: {
      steps: [
      {
        title: 'Doğalgazın Merkeze Alınması',
        items: [
          'Şehir şebekesinden bina girişine alınması',
          'Kazan dairesine güvenli iletim',
        ],
      },
      {
        title: 'Merkezi Kazan Sistemi',
        items: [
          'Çelik veya yoğuşmalı kazanlarla tek noktada ısı üretimi',
          'Yüksek verimle çalışma',
        ],
      },
      {
        title: 'Isı Dağıtımı',
        items: [
          'Ana kolonlar ve dağıtım kolektörleri ile sıcak su/buhar dağıtımı',
          'Radyatör, yerden ısıtma veya fan-coil ile alanlara iletim',
        ],
      },
      {
        title: 'Kontrol ve Ölçüm',
        items: [
          'Isı pay ölçer veya kalorimetre ile kullanıcı bazlı tüketim',
          'Merkezi otomasyonla dengeli çalışma',
        ],
      },
      ],
    },
    5: {
      steps: [
      {
        title: 'Isı Üretimi',
        items: [
          'Doğalgaz/LPG/sıvı yakıtlı kızgın yağ kazanında ısı transfer yağının ısıtılması',
          '250-350 °C seviyelerine düşük basınçta ulaşabilme',
        ],
      },
      {
        title: 'Isının Taşınması',
        items: [
          'Sirkülasyon pompalarıyla kapalı devre çelik hatlarda dolaşım',
          'Yüksek sıcaklığa dayanıklı yalıtım',
        ],
      },
      {
        title: 'Isının Kullanımı',
        items: [
          'Reaktörler, kurutma fırınları, presler, kalıplar, ısı eşanjörlerinde ısı aktarımı',
          'Yağın ısıyı bırakıp kazana dönmesi',
        ],
      },
      {
        title: 'Emniyet ve Kontrol',
        items: [
          'Emniyet genleşme tankları, aşırı sıcaklık ve debi kontrolü',
          'Otomasyon, alarm, yağ seviye ve basınç izleme',
        ],
      },
      ],
    },
    6: {
      steps: [
      {
        title: 'Isı Üretimi',
        items: [
          'Doğalgaz/LPG/sıvı yakıtlı kızgın su kazanında suyun 120-180 °C aralığında ısıtılması',
          'Basınçlı çalışma ile suyun kaynamadan sıvı tutulması',
        ],
      },
      {
        title: 'Isının Taşınması',
        items: [
          'Sirkülasyon pompalarıyla kapalı devre çelik borularda dolaşım',
          'Hatların yalıtımı ile ısı kaybının azaltılması',
        ],
      },
      {
        title: 'Isının Kullanımı',
        items: [
          'Isı eşanjörleri, fan-coil, radyatör ve proses ısıtıcılarında ısı aktarımı',
          'Suyun tekrar kazana dönerek çevrimin tamamlanması',
        ],
      },
      {
        title: 'Emniyet ve Kontrol',
        items: [
          'Genleşme tankları, emniyet ventilleri, basınç ve sıcaklık sensörleri',
          'Otomasyon ve alarm sistemleri ile güvenli çalışma',
        ],
      },
      ],
    },
    7: {
      steps: [
      {
        title: 'Çalışma Prensibi',
        items: [
          'Doğalgaz, elektrik veya sıcak su ile çalışan radyant ısıtıcılar',
          'Kızılötesi ışınım ile yüzeylerin doğrudan ısıtılması',
        ],
      },
      {
        title: 'Isı Dağılımı',
        items: [
          'Isınan yüzeylerin ortama dengeli ısı yayması',
          'Tavan altında ısı birikmesinin önlenmesi',
        ],
      },
      {
        title: 'Sistem Türleri',
        items: [
          'Gazlı radyant ısıtıcılar (endüstriyel alanlar)',
          'Elektrikli radyant ısıtıcılar (lokal ve kısa süreli)',
          'Sıcak sulu radyant sistemler (merkezi kazanlı, geniş alanlar)',
        ],
      },
      ],
    },
  };

  const detail = detailStepsById[project.id] || {};
  const detailIntro = detail.intro;
  const detailSteps = detail.steps || [];

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
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project.title}</h1>
                <p className="text-gray-700 leading-relaxed">{project.summary || project.info}</p>
            </div>

              <div className="space-y-3">
                {detailSteps.length > 0 ? (
                  <div className="space-y-3">
                    {detailIntro && (
                      <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm shadow-black/5 text-gray-700 leading-relaxed text-sm">
                        {detailIntro}
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
                ) : (
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm shadow-black/5 text-gray-700 leading-relaxed text-sm">
                    {project.info}
                  </div>
                )}
              </div>

            <div className="pt-2">
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link className="text-yellow-700 font-semibold hover:underline" to="/projeler">← Projeler'e dön</Link>
        </div>
      </div>
    </section>
  );
}
