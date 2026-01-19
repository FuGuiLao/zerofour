'use client'


import React, { useEffect } from 'react';

function CalendlyWidget() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/d/cxng-jxs-xhx/client-consultation?hide_gdpr_banner=1&text_color=000000&primary_color=000000" style={{ minWidth: '320px', height: '100%' }} />
  );
}

export default CalendlyWidget;
