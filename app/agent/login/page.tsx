import type { Metadata } from "next";
import AgentLoginForm from "./AgentLoginForm";

export const metadata: Metadata = {
  title: "Agent Login | ZanAir",
  description:
    "ZanAir travel agent portal login. Access schedules, rates, and booking tools for registered travel agents.",
  alternates: { canonical: "https://zanair.com/agent/login" },
  robots: { index: false, follow: false },
};

export default function AgentLoginPage() {
  return <AgentLoginForm />;
}
