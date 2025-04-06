import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JustFix Pro | Regina Handyman Services",
  description: "Professional handyman services in Regina. From plumbing to electrical work, JustFix Pro delivers quality repairs with guaranteed satisfaction.",
};

export default function ReginaHandymanPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">JustFix Pro | Regina Handyman Services</h1>
    </div>
  );
} 