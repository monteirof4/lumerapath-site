import type { Metadata } from "next";
import UnsubscribeForm from "@/components/UnsubscribeForm";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Remove yourself from our email updates.",
};

export default function UnsubscribePage() {
  return <UnsubscribeForm />;
}
