import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CleanServicesSection } from "@/components/clean-services-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsPreviewSection } from "@/components/projects-preview-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CleanServicesSection />
      <StatsSection />
      <AboutSection />
      <ProjectsPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
      <Footer />
      <FloatingCTA />
    </div>
  )
}