import Hero from "@/app/components/home/Home";
import HAbout from "@/app/components/home/HAbout";
import HService from "@/app/components/home/H-service";
import HProcess from "@/app/components/home/H-Process";
import Hwhychoose from "@/app/components/home/H-whychoose";
import Hfaq from "@/app/components/home/H-faq";
import Hstatic from "@/app/components/home/H-static";
import HContact from "@/app/components/home/H-contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <HAbout />
      <HService />
      <HProcess />
      <Hwhychoose />
      <Hfaq />
      <Hstatic />
      <HContact />
    </main>
  );
}