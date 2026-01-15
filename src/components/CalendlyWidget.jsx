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
    <div className="calendly-inline-widget" data-url="https://calendly.com/zerofour-security/client-consultation/?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=18181B&primary_color=7F1D1D" style={{ minWidth: '320px', height: '100%' }} />
  );
}

export default CalendlyWidget;
