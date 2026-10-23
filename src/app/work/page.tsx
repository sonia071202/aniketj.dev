import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionContainer } from "@/components/shared/section-container";
import { InternshipList } from "@/components/work/internship-list";

export const metadata: Metadata = {
  title: "Internships",
  description: "Sonia's internship experience across quality engineering, web development, and MERN stack development.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Internships"
        description="Hands-on experience across quality engineering, web development, and full-stack development."
      />
      <SectionContainer className="pt-0">
        <InternshipList />
      </SectionContainer>
    </>
  );
}
