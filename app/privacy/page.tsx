import type { Metadata } from "next";
import { PolicyDocument } from "../components/policy-document";

export const metadata: Metadata = {
  title: "Privacy Policy | ACTS Auctioneer Training",
  description: "Privacy Policy for the ACTS iOS and Android app and website.",
};

export default function Page() {
  return <PolicyDocument kind="privacy" />;
}
