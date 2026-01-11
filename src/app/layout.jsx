import { RootLayout } from '@/components/RootLayout'
import Script from 'next/script'

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

         {/*-- START Smith.ai ORIGIN / Investigation / Intelligence Chat -*/}
    <script type="text/javascript">
      window.SMITH={},window.SMITH.smithChatAccount="48464277-cea0-4c6d-93f1-6d09d07b1315",window.SMITH.baseUrl="https://app.smith.ai"; var script=document.createElement("script"); script.async=!0, script.type="text/javascript",script.src="https://app.smith.ai/chat/widget-latest.js",document.getElementsByTagName("HEAD").item(0).appendChild(script);
    </script>
    {/*!-- END Smith.ai ORIGIN / Investigation / Intelligence Chat --*/}
      </body>
    </html>
  )
}
