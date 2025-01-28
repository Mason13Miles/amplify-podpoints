"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Authenticator>
          
      </Authenticator>
    </div>
  );
}
