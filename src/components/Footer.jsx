import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { Button } from '@/components/Button'
import ScheduleConsultationCard from '@/components/ScheduleConsultationCard'

const navigation = [
  {
    title: 'Services',
    links: [
      { title: 'Security', href: '/security' },
      { title: 'Risk Management & Crisis Response', href: '/risk-management-and-crisis-response' },
      { title: 'Logistics & Support Services', href: '/logistics-and-support-services' },
      { title: 'Training', href: '/training' },
      { title: 'Technology', href: '/technology' },
      { title: 'Humanitarian', href: '/humanitarian' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Process', href: '/process' },
      { title: 'Our Work', href: '/work' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact Us', href: '/contact' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul
        role="list"
        className="grid grid-cols-2 gap-8 sm:grid-cols-4"
      >
        {navigation.map((section, sectionIndex) => (
          <li
            key={sectionIndex}
            className={section.title === 'Services' ? 'sm:col-span-2' : ''}
          >
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <ScheduleConsultationCard
      titleClassName="text-neutral-950"
      descriptionClassName="text-neutral-600"
      contentClassName="space-y-4"
      buttonColor=""
      buttonClassName="mt-0"
    />
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-start">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-10" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()} Zerofour Inc. All Rights Reserved.<br />
            <a href="/terms-of-use">Terms of Use</a> |{' '}
            <a href="/privacy-policy">Privacy Policy</a> |{' '}
            <a href="/data-security">Data Security</a>
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
