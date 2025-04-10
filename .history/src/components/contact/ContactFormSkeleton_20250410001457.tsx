import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ContactFormSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 p-8 rounded-lg bg-white/70 border border-asentica-beige shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-10 w-full" />
      </div>
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-32 w-full" />
      </div>
      
      <div className="pt-2">
        <Skeleton className="h-12 w-full" />
      </div>
      
      <Skeleton className="h-3 w-4/5 mx-auto" />
    </div>
  );
};
