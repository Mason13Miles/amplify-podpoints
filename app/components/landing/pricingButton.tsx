"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";

export default function PricingButton() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/"); // Navigate to the home page

    setTimeout(() => {
      // Wait a bit to ensure the page loads, then scroll to the pricing section
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust timeout if needed
  };

  return (
    <Button variant="ghost" onClick={handleRedirect}>
      Pricing
    </Button>
  );
}
