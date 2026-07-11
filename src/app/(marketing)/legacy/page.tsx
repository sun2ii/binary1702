import type { Metadata } from "next";
import { DivisionStub } from "@/components/marketing/DivisionStub";

export const metadata: Metadata = {
  title: "Binary 1702 Legacy — Built to Last",
  description: "The systems, stories, and impact we carry forward.",
};

export default function LegacyPage() {
  return (
    <DivisionStub
      name="Legacy"
      accent="#C8A24D"
      tagline="The systems, stories, and impact we carry forward."
      body="Projects and resources that create lasting impact and leave a mark for future generations."
    />
  );
}
