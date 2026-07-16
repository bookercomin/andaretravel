import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Andare Travel collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-32">
      <h1 className="text-display-md">Privacy Policy</h1>
      <p className="mt-6 text-ink/70">
        This page is a placeholder. Replace this content with your finalized privacy policy before
        launch.
      </p>
    </div>
  );
}
