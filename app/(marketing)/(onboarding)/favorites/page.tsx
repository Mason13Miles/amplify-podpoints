// "use client"; // Make sure this is a client component
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// // Example type definitions
// type Podcast = {
//   id: number;
//   title: string;
// };

// const DUMMY_PODCASTS: Podcast[] = Array.from({ length: 50 }, (_, i) => ({
//   id: i + 1,
//   title: `Podcast #${i + 1}`,

// }));

// export default function OnboardingPage() {
//   const router = useRouter();

//   // ----- State -----
//   const [step, setStep] = useState<number>(1);

//   // Step 1: Podcast selection
//   const [selectedPodcasts, setSelectedPodcasts] = useState<Podcast[]>([]);

//   // Step 3: Selected plan
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

//   // ----- Handlers -----
//   const handleSelectPodcast = (podcast: Podcast) => {
//     // If the podcast is already selected, deselect it
//     if (selectedPodcasts.some((p) => p.id === podcast.id)) {
//       setSelectedPodcasts((prev) => prev.filter((p) => p.id !== podcast.id));
//     } else {
//       // Otherwise, add it
//       setSelectedPodcasts((prev) => [...prev, podcast]);
//     }
//   };

//   const handleNextStep = async () => {
//     // Optionally, you can persist data to your DB at each step:
//     // await fetch("/api/onboarding", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ step, selectedPodcasts, selectedPlan }),
//     // });

//     setStep((prev) => prev + 1);
//   };

//   const handleSelectPlan = (plan: string) => {
//     setSelectedPlan(plan);
//   };

//   const handleContinueWithFree = () => {
//     // Navigate the user to /following
//     router.push("/following");
//   };

//   const handleGoToPaywall = () => {
//     // Navigate the user to the paywall
//     router.push("/paywall");
//   };

//   // ----- Render Steps -----
//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {step === 1 && (
//         <StepOne
//           podcasts={DUMMY_PODCASTS}
//           selectedPodcasts={selectedPodcasts}
//           onSelectPodcast={handleSelectPodcast}
//         />
//       )}
//       {step === 2 && <StepTwo />}
//       {step === 3 && (
//         <StepThree
//           selectedPlan={selectedPlan}
//           onSelectPlan={handleSelectPlan}
//         />
//       )}

//       {/* --- Footer Navigation / Buttons --- */}
//       <div className="mt-4 flex justify-end items-center space-x-4">
//         {/* Show Continue only on Steps 1 & 2, or if step 3 with selected plan */}
//         {step < 3 && (
//           <button
//             className={`
//               px-4 py-2 bg-blue-600 text-white rounded 
//               ${step === 1 && selectedPodcasts.length < 3 ? "opacity-50 cursor-not-allowed" : ""}
//             `}
//             onClick={handleNextStep}
//             disabled={step === 1 && selectedPodcasts.length < 3}
//           >
//             Continue
//           </button>
//         )}

//         {step === 3 && (
//           <>
//             {/* If a plan is selected, the "Continue" button goes to paywall */}
//             {selectedPlan ? (
//               <button
//                 className="px-4 py-2 bg-blue-600 text-white rounded"
//                 onClick={handleGoToPaywall}
//               >
//                 Continue
//               </button>
//             ) : (
//               // If no plan is selected yet, we can disable this or hide it
//               <button
//                 className="px-4 py-2 bg-blue-600 text-white rounded opacity-50 cursor-not-allowed"
//                 disabled
//               >
//                 Continue
//               </button>
//             )}

//             {/* "Continue with free" link */}
//             <button
//               className="text-gray-700 underline"
//               onClick={handleContinueWithFree}
//             >
//               Continue with free
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// // ----- Step 1 Component -----
// interface StepOneProps {
//   podcasts: Podcast[];
//   selectedPodcasts: Podcast[];
//   onSelectPodcast: (podcast: Podcast) => void;
// }

// function StepOne({ podcasts, selectedPodcasts, onSelectPodcast }: StepOneProps) {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Select at least 3 podcasts</h2>
//       <div className="grid grid-cols-2 gap-2">
//         {podcasts.map((podcast) => {
//           const isSelected = selectedPodcasts.some((p) => p.id === podcast.id);
//           return (
//             <button
//               key={podcast.id}
//               onClick={() => onSelectPodcast(podcast)}
//               className={`border p-2 rounded 
//                 ${isSelected ? "bg-blue-500 text-white" : "bg-white"}
//               `}
//             >
//               {podcast.title}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // ----- Step 2 Component -----
// function StepTwo() {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">What Are Pod Points?</h2>
//       {/* Replace with actual video embed or player */}
//       <div className="mb-4 bg-gray-200 w-full h-48 flex items-center justify-center">
//         <span>Video Placeholder</span>
//       </div>
//       <p className="text-gray-700">
//         Here is a short explanation of Pod Points and its features...
//       </p>
//     </div>
//   );
// }

// // ----- Step 3 Component -----
// interface StepThreeProps {
//   selectedPlan: string | null;
//   onSelectPlan: (plan: string) => void;
// }

// function StepThree({ selectedPlan, onSelectPlan }: StepThreeProps) {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Choose Your Plan</h2>
//       <div className="flex space-x-4">
//         {/* Plan 1 */}
//         <button
//           onClick={() => onSelectPlan("plan1")}
//           className={`border p-4 rounded 
//             ${selectedPlan === "plan1" ? "bg-blue-500 text-white" : "bg-white"}
//           `}
//         >
//           Plan 1
//         </button>

//         {/* Plan 2 */}
//         <button
//           onClick={() => onSelectPlan("plan2")}
//           className={`border p-4 rounded 
//             ${selectedPlan === "plan2" ? "bg-blue-500 text-white" : "bg-white"}
//           `}
//         >
//           Plan 2
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import { db } from "../../../firebase/config"; 
import { getAuth } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";


// Dummy data for 60 podcasts
const PODCASTS = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  title: `Podcast #${i + 1}`,
  image: `https://upload.wikimedia.org/wikipedia/commons/2/27/Square%2C_Inc_-_Square_Logo.jpg`,
}));

export default function PodcastSelection() {
  const [followedPodcasts, setFollowedPodcasts] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Next.js navigation

  // Mock API call to "save data" (simulated delay)
  const saveSelectionToDatabase = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1500)); // Simulates saving time
  };

  // Handles podcast selection toggle
  const handleFollowPodcast = (id: number) => {
    setFollowedPodcasts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // Handles button click - Save & Redirect
  const handleProceed = async () => {
    if (followedPodcasts.length < 3) return;
  
    setLoading(true);
    
    try {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (!user) {
        console.error("No authenticated user found");
        setLoading(false);
        return;
      }
  
      const userDocRef = doc(db, "users", user.uid);
  
      // Convert selected podcasts into a Firestore map
      const podcastMap = followedPodcasts.reduce((acc, id) => {
        const podcast = PODCASTS.find((p) => p.id === id);
        if (podcast) {
          acc[id] = { title: podcast.title, image: podcast.image };
        }
        return acc;
      }, {} as Record<number, { title: string; image: string }>);
  
      // Update Firestore (if document exists, update; otherwise, create it)
      await updateDoc(userDocRef, { followedPodcasts: podcastMap }).catch(() => {
        return setDoc(userDocRef, { followedPodcasts: podcastMap });
      });
  
      router.push("/subscribe"); // Redirect after saving
    } catch (error) {
      console.error("Error saving podcasts:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center">

      {/* Selected Podcasts Section */}
      <div className="p-4 mb-2 h-[30vh] flex items-end overflow-hidden">
          <div className="flex flex-wrap-reverse justify-center gap-2">
            {followedPodcasts.map((id) => {
              const podcast = PODCASTS.find((p) => p.id === id);
              return (
                <motion.div
                  key={id}
                  layout
                  className="flex items-center bg-slate-300 h-16 px-3 py-2 rounded-lg shadow-sm"
                >
                  <img
                    src={podcast?.image}
                    alt={podcast?.title}
                    className="w-12 h-12 rounded-md"
                  />
                  <span className="ml-3 text-blue-700 font-medium">
                    {podcast?.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
     
      </div>

      <h2 className="text-xl font-semibold mt-2">Your Selections</h2>
      <div className="bg-cool-gray w-full h-1 rounded-xl m-4"></div>
      <h2 className="text-xl font-semibold mb-2">Follow Your Favorites</h2>

      {/* Podcast Grid */}
      <div className="flex flex-col justify-center items-center p-4">
        <div className="grid grid-cols-12 gap-2">
          {PODCASTS.map((podcast) => (
            <motion.div
              key={podcast.id}
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHovered(podcast.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                layout
                className={`relative w-12 h-12 rounded-lg shadow-md cursor-pointer overflow-hidden justify-center transition-all ${
                  hovered === podcast.id ? "bg-blue-200 scale-110" : "bg-white"
                }`}
                onClick={() => handleFollowPodcast(podcast.id)}
              >
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                />
                {hovered === podcast.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute top-1/2 left-full transform -translate-y-1/2 bg-white px-2 py-1 rounded-md shadow text-gray-800"
                  >
                    {podcast.title}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proceed Button */}
      <button
        onClick={handleProceed}
        disabled={followedPodcasts.length < 3 || loading}
        className={`mt-6 px-6 py-3 text-white rounded-lg transition-all ${
          followedPodcasts.length < 3
            ? "bg-red-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } ${loading ? "opacity-50 cursor-wait" : ""}`}
      >
        {loading ? "Saving..." : "Continue"}
      </button>
      {followedPodcasts.length < 3 && (
    <div className="flex items-center gap-2 text-red-600 p-2 m-4">
      <p>
        Select at least <strong>{3 - followedPodcasts.length}</strong> more podcast{followedPodcasts.length === 2 ? "" : "s"}.
      </p>
    </div>
)}
    </div>
  );
}

