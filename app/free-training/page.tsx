import type { Metadata } from "next";
import FreeTrainingForm from "@/components/FreeTrainingForm";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Is There Never Time for Me?",
  description:
    "A practical class to stop postponing what matters to you.",
  alternates: { canonical: pageUrl("/free-training") },
};

export default function FreeTrainingPage() {
  return <FreeTrainingForm />;
}
