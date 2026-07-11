import type { Metadata } from "next";
import { DivisionStub } from "@/components/marketing/DivisionStub";

export const metadata: Metadata = {
  title: "Binary 1702 Studio — Websites, Systems, Support",
  description:
    "Fixed-price websites, back-office systems, and support plans for businesses that need their digital operations to actually work.",
};

export default function StudioPage() {
  return (
    <DivisionStub
      name="Studio"
      accent="#7C3AED"
      tagline="Clean websites. Useful systems. Real support."
      body="Operational systems, websites, automation, and support plans built to help your business run and grow. Projects run from $2,500 starter sites to $15,000+ custom systems — every price will be on this page."
    />
  );
}
