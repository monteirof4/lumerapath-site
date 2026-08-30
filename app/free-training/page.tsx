import type { Metadata } from "next";
import FreeTrainingForm from "@/components/FreeTrainingForm";

export const metadata: Metadata = {
  title: "The Moment of Choice",
  description:
    "Join this complimentary masterclass and discover what happens in the space between awareness and transformation.",
};

export default function FreeTrainingPage() {
  return <FreeTrainingForm />;
}
