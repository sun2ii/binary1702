import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
// import { Process } from '@/components/sections/Process';
// import { Philosophy } from '@/components/sections/Philosophy';
import { Founder } from '@/components/sections/Founder';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <Hero />
      <Services />
      {/* <Process /> */}
      {/* <Philosophy /> */}
      <Founder />
      <Contact />
    </main>
  );
}
