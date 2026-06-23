import HeroBanner from "./HeroBanner";
import FeatureNav from "./FeatureNav";
import AttractionSection from "./AttractionSection";
import HeritageHighlight from "./HeritageHighlight";
import EventsPreview from "./EventsPreview";
import LifeGuide from "./LifeGuide";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeatureNav />
      <AttractionSection />
      <HeritageHighlight />
      <EventsPreview />
      <LifeGuide />
    </>
  );
}
