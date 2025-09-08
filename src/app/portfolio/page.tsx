import { redirect } from "next/navigation";
import { portfolioProjects } from "./_data/projects";

export default function PortfolioPage() {
  const first = portfolioProjects[0];
  if (first?.slug) {
    redirect(`/portfolio/${first.slug}`);
  }
  return null;
}
