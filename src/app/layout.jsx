import Script from 'next/script'

import { RootLayout } from '@/components/RootLayout'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Zerofour',
    default: 'Zerofour - Global private security and intelligence',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>

        {/* START Smith.ai ZEROFOUR Chat */}
        <Script
          id="smithai-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              'window.SMITH = window.SMITH || {}; window.SMITH.smithChatAccount = "efdf8edf-7e95-482d-bf28-3969651603f6"; window.SMITH.baseUrl = "https://app.smith.ai";',
          }}
        />
        <Script
          id="smithai-widget"
          src="https://app.smith.ai/chat/widget-latest.js"
          strategy="afterInteractive"
        />
        {/* END Smith.ai ZEROFOUR Chat */}
      </body>
    </html>
  )
}
