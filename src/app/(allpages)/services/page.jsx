import Mainservicet from "@/app/components/Service/Shome";
import Experties from "@/app/components/Service/Experties";
import Howwe from "@/app/components/Service/HowWeWorks";
import Cta from "@/app/components/Service/ContactCTA";

export default function ServicesPage() {
  return (
    <main>
      <Mainservicet />
      <Experties />
      <Howwe />
      <Cta  />
    </main>
  );
}