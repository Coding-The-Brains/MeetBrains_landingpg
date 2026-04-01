import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Global flowing gradient blobs — behind all sections */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          {/* Top blob — primary, large, drifts left */}
          <div className="absolute -top-[100px] -left-[200px] w-[900px] h-[900px] bg-primary/[0.06] dark:bg-primary/[0.10] rounded-full blur-[160px] animate-aurora" />
          {/* Mid blob — teal, sits center-right */}
          <div className="absolute top-[35%] -right-[150px] w-[700px] h-[700px] bg-teal/[0.05] dark:bg-teal/[0.08] rounded-full blur-[140px] animate-aurora" style={{ animationDelay: "-7s" }} />
          {/* Bottom blob — primary+teal mix, center-left */}
          <div className="absolute bottom-[15%] left-[10%] w-[600px] h-[600px] bg-primary/[0.04] dark:bg-primary/[0.07] rounded-full blur-[130px] animate-aurora" style={{ animationDelay: "-14s" }} />
          {/* Extra accent blob — small teal, top-right */}
          <div className="absolute top-[15%] right-[10%] w-[350px] h-[350px] bg-teal/[0.04] dark:bg-teal/[0.06] rounded-full blur-[100px] animate-aurora" style={{ animationDelay: "-3s" }} />
        </div>

        {/* Vertical beam — subtle center spine */}
        <div className="beam-effect absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

        {/* Sections — z-10 to sit above blobs */}
        <div className="relative z-10">
          <Hero />
          <TrustBar />
          <ProblemSolution />
          <Features />
          <HowItWorks />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </>
  );
}
