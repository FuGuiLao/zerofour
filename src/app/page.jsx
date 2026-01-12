import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageServices from '@/images/services.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We work across a diverse set of industries
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized className="mx-auto lg:w-[280px] xl:w-[320px] h-auto"/>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="At Zerofour, our number one priority is to secure success for our clients"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
         Zerofour goes where government resources simply can&#39;t or won&#39;t. We protect critical facilities, assets, and personnel effectively and efficiently around the globe. Our team brings unparalleled dedication and passion for creating a safer world and upholding the highest standards of compliance, quality, and integrity.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case Study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Zerofour can identify and respond to both known and emerging threats."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our forward-thinking services span a broad range of synergistic solutions, including private security, investigations, social intelligence, advanced training capabilities, logistics and life support, UAV systems, global tracking technology, information security services, and crisis response mitigation.
        </p>
      </SectionIntro>

      <Container className="mt-16">
    <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
  src={imageServices}
  sizes="(min-width: 1024px) 41rem, 31rem"
  className="justify-center lg:justify-end lg:aspect-[4/5] xl:aspect-[3/4]"
/>
              <StylizedImage
  src={imageServices}
  sizes="(min-width: 1024px) 41rem, 31rem"
  className="justify-center lg:justify-end lg:aspect-[4/5] xl:aspect-[3/4]"
/>
              <StylizedImage
  src={imageServices}
  sizes="(min-width: 1024px) 41rem, 31rem"
  className="justify-center lg:justify-end lg:aspect-[4/5] xl:aspect-[3/4]"
/>
            </FadeIn>
          </div>

          {/* Services list styled to match Case Study card hover + text treatment */}
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <div className="space-y-8">
              <Link href="/security" className="block">
                <HoverServiceItem title="Security">
                  <p>
                    Zerofour is a trusted and experienced provider of comprehensive security services in high-risk environments, remote areas, and emerging markets. We deliver quality-driven, professional services to safeguard personnel, infrastructure, and other valuable assets and investments.
                  </p>
                  <p className="mt-4 font-semibold text-neutral-950 underline underline-offset-4">
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </p>
                </HoverServiceItem>
              </Link>

              <Link href="/risk-management-and-crisis-response" className="block">
                <HoverServiceItem title="Risk Management & Crisis Response">
                  <p>
                  Zerofour provides risk management and advisory services to facilitate our clients&#39; business operations and support their decision-making processes. We assist clients in preparing for and responding to crisis events that could jeopardize the safety of their personnel, assets, and reputation.
                  </p>
                  <p className="mt-4 font-semibold text-neutral-950 underline underline-offset-4">
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </p>
                </HoverServiceItem>
              </Link>

              <Link href="/logistics-and-support-services" className="block">
                  <HoverServiceItem title="Logistics & Support Services">
                    <p>
                      One of the greatest challenges for organizations operating on a global scale is the ability to seamlessly navigate a constantly changing business environment. Zerofour can deliver agile, scalable, and cost-effective logistics and support solutions that easily integrate into our clients&#39; day-to-day operations.
                    </p>
                    <p className="mt-4 font-semibold text-neutral-950 underline underline-offset-4">
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </p>
                  </HoverServiceItem>
                </Link>

                <Link href="/training" className="block">
                  <HoverServiceItem title="Training">
                    <p>
                      Zerofour offers a broad spectrum of training and capacity development services to government, military, law enforcement, and commercial customers across the globe. Our instructors and consultants are skilled professionals with backgrounds in security management and diplomacy in post-conflict environments.
                    </p>
                    <p className="mt-4 font-semibold text-neutral-950 underline underline-offset-4">
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </p>
                  </HoverServiceItem>
                </Link>

                <Link href="/technology" className="block">
                  <HoverServiceItem title="Technology">
                    <p>
                      From real-time tracking software and social intelligence investigative techniques to systems integration and unmanned aircraft operations, Zerofour&#39;s technology services are designed to protect critical infrastructure, optimize asset management, and improve performance enterprise-wide.
                    </p>
                    <p className="mt-4 font-semibold text-neutral-950 underline underline-offset-4">
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </p>
                  </HoverServiceItem>
                </Link>

                <Link href="/humanitarian" className="block">
                  <HoverServiceItem title="Humanitarian">
                    <p>
                      With strong operational experience, robust program management skills, rapid response capabilities, and a global network of local partners and expertise, Zerofour aids humanitarian objectives worldwide. We offer a broad spectrum of services to promote positive sustainable change.
                    </p>
                    <p className="mt-4 font-semibold text-neutral-950 underline underline-offset-4">
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </p>
                  </HoverServiceItem>
                </Link>


            </div>
          </div>
        </div>
      </Container>
    </>
  )
}


function HoverServiceItem({ title, children }) {
  return (
    <article className="relative rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8 cursor-pointer">
      <div className="text-base leading-7 text-neutral-600">
        <p>
          <span className="font-semibold text-neutral-950">{title}</span>{' '}
          {/* IMPORTANT: only render text here, not nested <p> */}
        </p>

        {/* children can include <p> safely now */}
        <div className="mt-3">{children}</div>
      </div>
    </article>
  )
}




export const metadata = {
  description:
    'Zerofour is a global private security and intelligence agency.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
           Zerofour is a global private security and intelligence agency
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We assist governments, corporations, and high-profile individuals. Zerofour is a leading global provider of private security, logistics operations, risk management, and humanitarian, training, and operational support services to government and commercial clients worldwide.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

 <Testimonial
  className="mt-24 sm:mt-32 lg:mt-40"
  client={{ name: 'Phobia', logo: logoPhobiaDark }}
>
  {{
    quote: (
      <>
        Thanks to Zerofour&#39;s unmatched expertise and discreet professionalism,
        our organization has successfully navigated complex security challenges
        worldwide, ensuring our people and assets remain protected.
      </>
    ),
    attribution: (
      <>— Confidential, Corporate Security Director</>
    ),
  }}
</Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
