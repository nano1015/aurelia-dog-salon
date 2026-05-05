import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { SalonFeatures } from './components/sections/SalonFeatures';
import { MenuPrice } from './components/sections/MenuPrice';
import { ForFirstTime } from './components/sections/ForFirstTime';
import { ServiceFlow } from './components/sections/ServiceFlow';
import { Gallery } from './components/sections/Gallery';
import { OurGroomers } from './components/sections/OurGroomers';
import { FAQ } from './components/sections/FAQ';
import { Access } from './components/sections/Access';
import { ReservationContact } from './components/sections/ReservationContact';

function App() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      <main>
        <Hero />
        <SalonFeatures />
        <MenuPrice />
        <ForFirstTime />
        <ServiceFlow />
        <Gallery />
        <OurGroomers />
        <FAQ />
        <Access />
        <ReservationContact />
      </main>
      <footer className="border-t border-gold/25 bg-warm-white py-6 text-center">
        <p className="text-xs text-gray-400">&copy; 2026 AURELIA DOG SALON. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
