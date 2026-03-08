import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import LocationSection from '@/components/home/LocationSection';
import PopupManager from '@/components/popup/PopupManager';

export default function Home() {
  return (
    <>
      <PopupManager />
      <HeroSection />
      <IntroSection />
      <LocationSection />
    </>
  );
}
