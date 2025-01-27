"use client"; // Ensures this runs on the client side

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Header } from "./landing/header";
import { Footer } from "./landing/footer";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-10">
    <div className="flex-grow pt-16 min-h-screen">
      <Header /> 
      <div className="mt-20">
      <Authenticator>
          {({ signOut, user }) =>
            user ? (
              <>
                <button onClick={signOut} className="mb-4 px-4 py-2 bg-red-500 text-white rounded">
                  Sign Out
                </button>
                {children}
              </>
            ) : (
              <p>Loading...</p>
            )
          }
        </Authenticator>
      </div>

      </div>

      <Footer />
    </div>
  );
}

