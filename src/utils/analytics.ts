
type EventCategory = 'contact' | 'navigation' | 'engagement';

interface TrackEventParams {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
}

// Send event to Google Analytics
export const trackEvent = ({ category, action, label, value }: TrackEventParams): void => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.log('GTM not loaded, event would be tracked:', { category, action, label, value });
  }
};

// Track page views
export const trackPageView = (url: string): void => {
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  } else {
    console.log('GTM not loaded, page view would be tracked for:', url);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string): void => {
  trackEvent({
    category: 'contact',
    action: 'submit',
    label: formName,
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaText: string, ctaLocation: string): void => {
  trackEvent({
    category: 'engagement',
    action: 'click',
    label: `${ctaText} - ${ctaLocation}`,
  });
};
