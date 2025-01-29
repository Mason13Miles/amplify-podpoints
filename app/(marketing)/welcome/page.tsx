"use client"; // Make sure this is a client component
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Example type definitions
type Podcast = {
  id: number;
  title: string;
};

const DUMMY_PODCASTS: Podcast[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Podcast #${i + 1}`,

}));

export default function OnboardingPage() {
  const router = useRouter();

  // ----- State -----
  const [step, setStep] = useState<number>(1);

  // Step 1: Podcast selection
  const [selectedPodcasts, setSelectedPodcasts] = useState<Podcast[]>([]);

  // Step 3: Selected plan
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // ----- Handlers -----
  const handleSelectPodcast = (podcast: Podcast) => {
    // If the podcast is already selected, deselect it
    if (selectedPodcasts.some((p) => p.id === podcast.id)) {
      setSelectedPodcasts((prev) => prev.filter((p) => p.id !== podcast.id));
    } else {
      // Otherwise, add it
      setSelectedPodcasts((prev) => [...prev, podcast]);
    }
  };

  const handleNextStep = async () => {
    // Optionally, you can persist data to your DB at each step:
    // await fetch("/api/onboarding", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ step, selectedPodcasts, selectedPlan }),
    // });

    setStep((prev) => prev + 1);
  };

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleContinueWithFree = () => {
    // Navigate the user to /following
    router.push("/following");
  };

  const handleGoToPaywall = () => {
    // Navigate the user to the paywall
    router.push("/paywall");
  };

  // ----- Render Steps -----
  return (
    <div className="max-w-2xl mx-auto p-4">
      {step === 1 && (
        <StepOne
          podcasts={DUMMY_PODCASTS}
          selectedPodcasts={selectedPodcasts}
          onSelectPodcast={handleSelectPodcast}
        />
      )}
      {step === 2 && <StepTwo />}
      {step === 3 && (
        <StepThree
          selectedPlan={selectedPlan}
          onSelectPlan={handleSelectPlan}
        />
      )}

      {/* --- Footer Navigation / Buttons --- */}
      <div className="mt-4 flex justify-end items-center space-x-4">
        {/* Show Continue only on Steps 1 & 2, or if step 3 with selected plan */}
        {step < 3 && (
          <button
            className={`
              px-4 py-2 bg-blue-600 text-white rounded 
              ${step === 1 && selectedPodcasts.length < 3 ? "opacity-50 cursor-not-allowed" : ""}
            `}
            onClick={handleNextStep}
            disabled={step === 1 && selectedPodcasts.length < 3}
          >
            Continue
          </button>
        )}

        {step === 3 && (
          <>
            {/* If a plan is selected, the "Continue" button goes to paywall */}
            {selectedPlan ? (
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleGoToPaywall}
              >
                Continue
              </button>
            ) : (
              // If no plan is selected yet, we can disable this or hide it
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded opacity-50 cursor-not-allowed"
                disabled
              >
                Continue
              </button>
            )}

            {/* "Continue with free" link */}
            <button
              className="text-gray-700 underline"
              onClick={handleContinueWithFree}
            >
              Continue with free
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ----- Step 1 Component -----
interface StepOneProps {
  podcasts: Podcast[];
  selectedPodcasts: Podcast[];
  onSelectPodcast: (podcast: Podcast) => void;
}

function StepOne({ podcasts, selectedPodcasts, onSelectPodcast }: StepOneProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select at least 3 podcasts</h2>
      <div className="grid grid-cols-2 gap-2">
        {podcasts.map((podcast) => {
          const isSelected = selectedPodcasts.some((p) => p.id === podcast.id);
          return (
            <button
              key={podcast.id}
              onClick={() => onSelectPodcast(podcast)}
              className={`border p-2 rounded 
                ${isSelected ? "bg-blue-500 text-white" : "bg-white"}
              `}
            >
              {podcast.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ----- Step 2 Component -----
function StepTwo() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">What Are Pod Points?</h2>
      {/* Replace with actual video embed or player */}
      <div className="mb-4 bg-gray-200 w-full h-48 flex items-center justify-center">
        <span>Video Placeholder</span>
      </div>
      <p className="text-gray-700">
        Here is a short explanation of Pod Points and its features...
      </p>
    </div>
  );
}

// ----- Step 3 Component -----
interface StepThreeProps {
  selectedPlan: string | null;
  onSelectPlan: (plan: string) => void;
}

function StepThree({ selectedPlan, onSelectPlan }: StepThreeProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Choose Your Plan</h2>
      <div className="flex space-x-4">
        {/* Plan 1 */}
        <button
          onClick={() => onSelectPlan("plan1")}
          className={`border p-4 rounded 
            ${selectedPlan === "plan1" ? "bg-blue-500 text-white" : "bg-white"}
          `}
        >
          Plan 1
        </button>

        {/* Plan 2 */}
        <button
          onClick={() => onSelectPlan("plan2")}
          className={`border p-4 rounded 
            ${selectedPlan === "plan2" ? "bg-blue-500 text-white" : "bg-white"}
          `}
        >
          Plan 2
        </button>
      </div>
    </div>
  );
}
