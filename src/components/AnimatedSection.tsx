
import React, { forwardRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in' | 'slide-in-left' | 'slide-in-right';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  animationType?: AnimationType;
  delay?: number;
  threshold?: number;
  children: React.ReactNode;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ animationType = 'fade-in', delay = 0, threshold = 0.1, className, children, ...props }, forwardedRef) => {
    const { ref: internalRef, isIntersecting } = useIntersectionObserver({
      threshold,
      triggerOnce: true,
    });

    // Merge refs
    const setRefs = (node: HTMLDivElement) => {
      // For the internal intersection observer hook
      if (internalRef) {
        (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
      
      // For any ref passed from parent
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }
    };

    let animationClass = '';
    
    switch (animationType) {
      case 'slide-in-left':
        animationClass = 'opacity-0 -translate-x-10';
        break;
      case 'slide-in-right':
        animationClass = 'opacity-0 translate-x-10';
        break;
      case 'fade-in':
      default:
        animationClass = 'opacity-0 translate-y-10';
    }

    const transitionStyle = {
      transition: `opacity 0.8s ease-out, transform 0.8s ease-out`,
      transitionDelay: `${delay}s`,
    };

    return (
      <div
        ref={setRefs}
        className={cn(
          isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : animationClass,
          className
        )}
        style={isIntersecting ? { ...transitionStyle } : {}}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
