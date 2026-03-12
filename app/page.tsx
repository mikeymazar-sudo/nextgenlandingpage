import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import SignUpCredits from "@/components/SignUpCredits";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <SignUpCredits />
        <Pricing />
        <SocialProof />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
