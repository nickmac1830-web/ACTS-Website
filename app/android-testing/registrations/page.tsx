import type { Metadata } from "next";
import { ThemeToggle } from "../../components/theme-toggle";
import { RegistrationsDashboard } from "./registrations-dashboard";

export const metadata: Metadata = {
  title: "Android Tester Registrations | ACTS",
  robots: { index: false, follow: false },
};

export default function RegistrationsPage() {
  return (
    <main className="registrations-page">
      <div className="admin-theme"><ThemeToggle /></div>
      <RegistrationsDashboard />
    </main>
  );
}
