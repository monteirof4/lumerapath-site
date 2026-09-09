import type { Metadata } from "next";
import FreeTrainingForm from "@/components/FreeTrainingForm";

export const metadata: Metadata = {
  title: "Why Is There Never Time for Me?",
  description:
    "A practical class to stop postponing what matters to you.",
};

export default function FreeTrainingPage() {
  return <FreeTrainingForm />;
}
