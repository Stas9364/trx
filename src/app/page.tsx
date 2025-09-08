import {
  ContactsSection,
  ExpertiseSection,
  HeroSection,
  PortfolioSection,
  ReviewsSection,
  TeamSection,
  TechnologiesSection,
  WhyChooseSection,
} from "@/components";

export const metadata = {
  title: "TRX Developers — Custom Software Development, AI/ML, Mobile & Cloud",
  description:
    "We build high‑performance web and mobile apps, AI/ML solutions, and cloud infrastructure. Enterprise‑grade case studies, senior team, fast delivery.",
  openGraph: {
    title:
      "TRX Developers — Custom Software Development, AI/ML, Mobile & Cloud",
    description:
      "We build high‑performance web and mobile apps, AI/ML solutions, and cloud infrastructure. Enterprise‑grade case studies, senior team, fast delivery.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <WhyChooseSection />

      <ExpertiseSection />

      <PortfolioSection />

      <ReviewsSection />

      <TechnologiesSection />

      <TeamSection />

      <ContactsSection />
    </>
  );
}
