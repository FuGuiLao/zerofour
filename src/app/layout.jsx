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

        <elevenlabs-convai agent-id="agent_2901kq2wmkgtfb0tyef4z38bpc50"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </body>
    </html>
  )
}
