import ContactBanner from "@/components/contactBanner";
import Banner from "@/components/banner";
import HomeBanner from "@/components/homeBanner";
import Servicos from "@/components/servicos";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Banner />
      <Servicos />
      <ContactBanner />
    </main>
  );
}
