import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JustFix Pro | Saskatoon Handyman Services",
  description: "Professional handyman services in Saskatoon. From plumbing to electrical work, JustFix Pro delivers quality repairs with guaranteed satisfaction.",
};

export default function SaskatoonHandymanPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">JustFix Pro | Saskatoon Handyman Services</h1>
    </div>
  );
} 