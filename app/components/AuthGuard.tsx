"use client";

import { useRouter } from "next/navigation";
import { Authenticator } from "@aws-amplify/ui-react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Authenticator>

    </Authenticator>
  );
}


