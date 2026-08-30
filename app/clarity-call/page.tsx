import type { Metadata } from "next";
import ClarityCallForm from "@/components/ClarityCallForm";

export const metadata: Metadata = {
  title: "Book a Clarity Call",
  description:
    "Tell us where the pressure is sitting right now and book a private fit check conversation.",
};

export default function ClarityCallPage() {
  return <ClarityCallForm />;
}
