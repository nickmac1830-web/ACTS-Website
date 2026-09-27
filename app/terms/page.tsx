import type { Metadata } from "next";
import { PolicyDocument } from "../components/policy-document";

export const metadata: Metadata = {
  title: "Terms and Conditions | ACTS Auctioneer Training",
  description: "Terms and Conditions for the ACTS iOS and Android app and website.",
};

export default function Page() {
  return <PolicyDocument kind="terms" />;
}
