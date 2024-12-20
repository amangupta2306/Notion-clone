"use client";

import { useConvexAuth } from "convex/react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & Plans. Unified. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && (
        <div className="flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/documents"}>
            Enter Notion
            <ArrowRight className="h-4 w-4 ml-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Notion free
            <ArrowRight className="h-4 w-4 ml-4" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
