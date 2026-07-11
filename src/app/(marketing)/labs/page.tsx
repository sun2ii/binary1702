import type { Metadata } from "next";
import { DivisionStub } from "@/components/marketing/DivisionStub";

export const metadata: Metadata = {
  title: "Binary 1702 Labs — Experiments & Prototypes",
  description: "Where we experiment, prototype, and build the tools that power tomorrow.",
};

export default function LabsPage() {
  return (
    <DivisionStub
      name="Labs"
      accent="#2DD4BF"
      tagline="The tools that power tomorrow."
      body="Where we experiment, prototype, and build. Products, automations, and ideas in active development."
    />
  );
}
