import type { Metadata } from "next";
import { RegistrationsDashboard } from "./registrations-dashboard";

export const metadata: Metadata = {
  title: "Android Tester Registrations | ACTS",
  robots: { index: false, follow: false },
};

export default function RegistrationsPage() {
  return <main className="registrations-page"><RegistrationsDashboard /></main>;
}
