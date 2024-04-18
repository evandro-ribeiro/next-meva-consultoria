import ContactBanner from "@/components/contactBanner";
import Banner from "@/components/banner";
import HomeBanner from "@/components/homeBanner";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Banner />
      <ContactBanner />
    </main>
  );
}
