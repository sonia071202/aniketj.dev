import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sonia Gupta, a software developer and MCA graduate.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" description="Software Developer focused on practical systems, AI applications, and continuous learning." />
      <SectionContainer className="py-14">
        <ScrollReveal>
          <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            <p>I&apos;m Sonia Gupta, a software developer and MCA graduate from Amity University Jharkhand, graduating in 2026.</p>
            <p>I&apos;m passionate about software development, backend engineering, AI-powered applications, and problem-solving. I enjoy turning ideas into useful products and strengthening my engineering fundamentals through hands-on projects.</p>
            <p>My recent work includes an intelligent enterprise knowledge assistant using retrieval-augmented generation and CampScout, a full-stack campground discovery platform.</p>
          </div>
        </ScrollReveal>
      </SectionContainer>
      <SectionContainer className="py-14">
        <SectionHeading title="Skills" description="Technologies and concepts I use to build practical software." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((category, i) => (
            <ScrollReveal key={category.category} delay={i * 0.05}>
              <div className="bento-card rounded-xl p-6 h-full">
                <h3 className="font-semibold text-sm">{category.category}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="py-14">
        <SectionHeading title="Education" />
        <ScrollReveal><div className="bento-card rounded-xl p-6 max-w-xl"><h3 className="font-medium">Master of Computer Applications (MCA)</h3><p className="text-sm text-muted-foreground mt-2">Amity University Jharkhand · Expected 2026</p></div></ScrollReveal>
      </SectionContainer>
    </>
  );
}
