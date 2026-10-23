import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionContainer } from "@/components/shared/section-container";
import { ExperienceList } from "@/components/work/internship-list";

export const metadata: Metadata = {
  title: "Experience",
  description: "Sonia's internship experience across quality engineering, web development, and MERN stack development.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Experience"
        description="Professional experience across quality engineering, web development, and full-stack development."
      />
      <SectionContainer className="pt-0">
        <ExperienceList />
      </SectionContainer>
    </>
  );
}
