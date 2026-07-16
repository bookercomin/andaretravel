import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions for using Andare Travel's services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-32">
      <h1 className="text-display-md">Terms of Service</h1>
      <p className="mt-6 text-ink/70">
        This page is a placeholder. Replace this content with your finalized terms of service before
        launch.
      </p>
    </div>
  );
}
