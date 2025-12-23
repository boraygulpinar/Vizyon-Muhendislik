export const PROJECTS = [
  {
    id: 1,
    title: 'Endüstriyel Doğalgaz Tesisatı',
    img: '/assets/projects/pro1.jpeg',
    summary:
      'Endüstriyel Doğalgaz Tesisatı, sanayi tesislerinde ve büyük işletmelerde kullanılan makinelerin, kazanların ve proses sistemlerinin ihtiyaç duyduğu doğalgazın; şebekeden alınarak güvenli bir şekilde yakıcı ekipmanlara ulaştırılmasını sağlayan komple bir altyapı sistemidir.',
  },
  {
    id: 2,
    title: 'Buhar Kazan Tesisatı',
    img: '/assets/projects/pro2.jpeg',
    summary:
      'Buhar Kazan Tesisatı, sanayi tesislerinde buhar ihtiyacını karşılamak amacıyla; suyun kontrollü olarak ısıtılıp buhara dönüştürülmesini, bu buharın güvenli şekilde dağıtılmasını ve kullanılan buharın tekrar sisteme kazandırılmasını sağlayan entegre bir mühendislik sistemidir. Bu tesisat yalnızca bir kazan değil, kazanla birlikte çalışan tüm yardımcı sistemleri kapsar ve üretimin sürekliliği açısından kritik öneme sahiptir.',
  },
  {
    id: 3,
    title: 'Doğalgaz Altyapı Tesisatı',
    img: '/assets/projects/pro3.jpeg',
    summary:
      'Doğalgaz altyapı tesisatı, şehir şebekesinden alınan gazın yer altı hatları, giriş donanımı ve kontrol sistemleriyle tesise güvenli ve mevzuata uygun taşınmasını kapsar.',
  },
  {
    id: 4,
    title: 'Merkezi Sistem Doğalgaz',
    img: '/assets/projects/pro4.jpeg',
    summary:
      'Merkezi sistem doğalgaz, birden fazla bağımsız bölümün bulunduğu yapılarda (apartmanlar, siteler, rezidanslar, oteller, hastaneler, iş merkezleri vb.) ısıtma ve sıcak su ihtiyacının, tek bir merkezde kurulan doğalgazlı kazan sistemi üzerinden karşılandığı ısıtma sistemidir. Bu sistemde doğalgaz, her dairede ayrı ayrı yakılmak yerine; merkezi kazan dairesinde yakılır ve üretilen ısı, tesisat aracılığıyla tüm binaya eşit ve kontrollü şekilde dağıtılır.',
  },
  {
    id: 5,
    title: 'Kızgın Yağ Tesisatı',
    img: '/assets/projects/pro5.jpeg',
    summary:
      'Kızgın yağ tesisatı, sanayi tesislerinde yüksek sıcaklık ihtiyacının karşılanması amacıyla; su veya buhar yerine ısı transfer yağı kullanılarak ısı enerjisinin yüksek sıcaklıklarda, düşük basınç altında güvenli ve verimli şekilde üretilmesini ve dağıtılmasını sağlayan sistemdir. Bu sistem, özellikle sabit ve kontrollü yüksek sıcaklık gerektiren proseslerde tercih edilir.',
  },
  {
    id: 6,
    title: 'Kızgın Su Tesisatı',
    img: '/assets/projects/pro6.jpeg',
    summary:
      'Kızgın su tesisatı, sanayi tesisleri ve büyük yapılarda; yüksek sıcaklıkta su kullanılarak ısıtma ve proses ısı ihtiyacının güvenli, verimli ve sürekli şekilde karşılanmasını sağlayan kapalı devre ısıtma sistemidir. Bu sistemde su, 100 °C’nin üzerinde sıcaklıklara çıkarılır ancak sistem basınç altında çalıştığı için su buharlaşmadan sıvı halde tutulur.',
  },
  {
    id: 7,
    title: 'Radyant Isıtma Sistemleri',
    img: '/assets/projects/pro7.jpeg',
    summary:
      'Radyant ısıtma sistemleri, ısıyı hava aracılığıyla değil; ışınım (radyasyon) yoluyla doğrudan insanlara, zemine ve cisimlere aktaran, özellikle yüksek tavanlı ve geniş hacimli alanlarda etkili olan modern ısıtma sistemleridir. Bu sistemlerde ısı, ortam havasını ısıtmadan doğrudan yüzeylere iletildiği için daha hızlı, konforlu ve enerji verimli bir ısınma sağlanır.',
  },
];

export function getProjectById(id) {
  const num = Number(id);
  return PROJECTS.find((p) => p.id === num);
}
