"use client";

import { useRouter } from "next/navigation";
import { Authenticator } from "@aws-amplify/ui-react";
import { Header } from "./landing/header";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen gap-12"> {/* Correct spacing */}
      <Header />
      
      {/* Adjust margin & padding for spacing */}
      <div className="p-10 mt-40 flex justify-center">
        <Authenticator />
      </div>
    </div>
  );
}
