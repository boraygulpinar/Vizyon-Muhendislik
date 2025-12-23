import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  const items = PROJECTS;
  const slugById = {
    1: 'endustriyel-dogalgaz-tesisati',
    2: 'buhar-kazan-tesisati',
    3: 'dogalgaz-altyapi-tesisati',
    4: 'merkezi-sistem-dogalgaz',
    5: 'kizgin-yag-tesisati',
    6: 'kizgin-su-tesisati',
    7: 'radyant-isitma-sistemleri',
  };

  return (
    <section className="py-12 md:py-16">
      {/* Üst Bilgi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs tracking-wide font-semibold rounded-full bg-blue-100 text-blue-800 ring-1 ring-blue-200">
            Projelerimiz
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight mb-6">
            Isıtma, Soğutma ve Mekanik Projeler
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Doğalgaz iç tesisattan endüstriyel mekanik hatlara kadar tüm projelerimizi mühendislik esaslarına, yürürlükteki mevzuata ve teknik standartlara uygun şekilde tasarlayıp uyguluyoruz. Enerji verimliliği, güvenlik ve sürdürülebilirlik her aşamada önceliğimiz.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {items.length === 0 ? (
          <div className="h-40 grid place-items-center text-gray-500 border border-dashed border-gray-300 rounded-xl bg-white">Bu kategoride proje bulunamadı.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {items.map((p) => (
              <Link 
                to={`/projeler/${slugById[p.id] || p.id}`} 
                key={p.id} 
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl h-full"
              >
                <article className="relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                      loading="lazy" 
                      decoding="async" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                    <p className="text-base text-gray-700 leading-snug line-clamp-4 flex-1">{p.summary || p.info}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}