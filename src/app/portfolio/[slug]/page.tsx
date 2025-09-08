import { PortfolioView } from "@/components";
import { notFound } from "next/navigation";
import { portfolioProjects } from "../_data/projects";

type Params = { params: { slug: string } };

export default function PortfolioProjectPage({ params }: Params) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <PortfolioView initialSlug={params.slug} />;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) return {};

  return {
    title: `${project.title} | TRX Developers`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | TRX Developers`,
      description: project.shortDescription,
      images: [project.image],
    },
  } as const;
}
