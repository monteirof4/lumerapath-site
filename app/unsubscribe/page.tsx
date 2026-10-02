import type { Metadata } from "next";
import UnsubscribeForm from "@/components/UnsubscribeForm";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Remove yourself from our email updates.",
  alternates: { canonical: pageUrl("/unsubscribe") },
};

export default function UnsubscribePage() {
  return <UnsubscribeForm />;
}
