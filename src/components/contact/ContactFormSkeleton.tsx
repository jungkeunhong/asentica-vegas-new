
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import AnimatedSection from "../AnimatedSection";

export const ContactFormSkeleton: React.FC = () => {
  return (
    <AnimatedSection className="bg-white p-8 rounded-lg shadow-sm">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        <div>
          <Skeleton className="h-4 w-16 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-28 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-12 w-full" />
      </div>
    </AnimatedSection>
  );
};
