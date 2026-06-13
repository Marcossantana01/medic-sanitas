import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Environments from "@/components/Environments";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-offwhite">
      <Navbar />
      <div className="container home-shell py-5">
        <Hero />
        <Services />
        <Technology />
        <Environments />
        <Testimonials />
        <ContactCTA />
      </div>
      <Footer />
    </main>
  );
}
