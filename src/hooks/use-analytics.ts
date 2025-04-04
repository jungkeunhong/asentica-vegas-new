
import { useCallback } from 'react';
import { trackEvent, trackFormSubmission, trackCTAClick } from '../utils/analytics';

export const useAnalytics = () => {
  const trackEventCallback = useCallback((category: 'contact' | 'navigation' | 'engagement', action: string, label?: string, value?: number) => {
    trackEvent({ category, action, label, value });
  }, []);

  const trackFormSubmissionCallback = useCallback((formName: string) => {
    trackFormSubmission(formName);
  }, []);

  const trackCTAClickCallback = useCallback((ctaText: string, ctaLocation: string) => {
    trackCTAClick(ctaText, ctaLocation);
  }, []);

  return {
    trackEvent: trackEventCallback,
    trackFormSubmission: trackFormSubmissionCallback,
    trackCTAClick: trackCTAClickCallback
  };
};
