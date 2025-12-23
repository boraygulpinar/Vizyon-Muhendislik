import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { getProjectById } from './data/projects';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const EndustriyelDogalgazTesisatiDetail = lazy(() => import('./pages/details/ProjectDetails/endustriyel-dogalgaz-tesisatı'));
const BuharKazanTesisatiDetail = lazy(() => import('./pages/details/ProjectDetails/buhar-kazan-tesisati'));
const DogalgazAltyapiTesisatiDetail = lazy(() => import('./pages/details/ProjectDetails/dogalgaz-altyapi-tesisati'));
const MerkeziSistemDogalgazDetail = lazy(() => import('./pages/details/ProjectDetails/merkezi-sistem-dogalgaz'));
const PaslanmazTankSistemleriDetail = lazy(() => import('./pages/details/ProjectDetails/paslanmaz-tank-sistemleri'));
const KizginYagTesisatiDetail = lazy(() => import('./pages/details/ProjectDetails/kizgin-yag-tesisati'));
const KizginSuTesisatiDetail = lazy(() => import('./pages/details/ProjectDetails/kizgin-su-tesisati'));
const RadyantIsitmaSistemleriDetail = lazy(() => import('./pages/details/ProjectDetails/radyant-isitma-sistemleri'));

export default function App() {
  return (
    <Suspense fallback={<div className="p-6">Yükleniyor…</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/projeler">
            <Route index element={<Projects />} />
            <Route path="endustriyel-dogalgaz-tesisati" element={<EndustriyelDogalgazTesisatiDetail project={getProjectById(1)} />} />
            <Route path="buhar-kazan-tesisati" element={<BuharKazanTesisatiDetail project={getProjectById(2)} />} />
            <Route path="dogalgaz-altyapi-tesisati" element={<DogalgazAltyapiTesisatiDetail project={getProjectById(3)} />} />
            <Route path="paslanmaz-tank-sistemleri" element={<PaslanmazTankSistemleriDetail project={getProjectById(4)} />} />
            <Route path="merkezi-sistem-dogalgaz" element={<MerkeziSistemDogalgazDetail project={getProjectById(5)} />} />
            <Route path="kizgin-yag-tesisati" element={<KizginYagTesisatiDetail project={getProjectById(6)} />} />
            <Route path="kizgin-su-tesisati" element={<KizginSuTesisatiDetail project={getProjectById(7)} />} />
            <Route path="radyant-isitma-sistemleri" element={<RadyantIsitmaSistemleriDetail project={getProjectById(8)} />} />
            <Route path=":id" element={<ProjectDetail />} />
          </Route>
          <Route path="/iletisim" element={<Contact />} />
          <Route path="*" element={<div>Sayfa bulunamadı</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}