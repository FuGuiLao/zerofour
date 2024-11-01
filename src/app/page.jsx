import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.png'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.png'
import logoGreenLife from '@/images/clients/green-life/logo-light.png'
import logoHomeWork from '@/images/clients/home-work/logo-light.png'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.png'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.png'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.png'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.png'
import logoUnseal from '@/images/clients/unseal/logo-light.png'
import imageLaptop from '@/images/laptop.jpg'
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
                  <Image src={logo} alt={client} unoptimized />
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
                  <span>Case study</span>
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
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Risk Management & Crisis Response">
              Zerofour provides risk management and advisory services to facilitate our clients&#39; business operations and support their decision-making processes. We assist clients in preparing for and responding to crisis events that could jeopardize the safety of their personnel, assets, and reputation.
            </ListItem>
            <ListItem title="Security">
              Zerofour is a trusted and experienced provider of comprehesive security services in high-risk environments, remote areas, and emerging markets. We deliver quality-driven, professional services to safeguard personnel, infrastructure, and other valuable assets and investments.
            </ListItem>
            <ListItem title="Logistics & Support Services">
             One of the greatest challenges for organizations operating on a global scale is the ability to seamlessly navigate a constantly changing business environment. Zerofour can deliver agile, scalable, and cost-effective logistics and support solutions that easily integrate into our clients&#39; day-to-day operations.
            </ListItem>
            <ListItem title="Training">
              Zerofour offers a broad spectrum of training and capacity development services to government, military, law enforcement, and commercial customers across the globe. Our instructors and consultants are skilled professionals with backgrounds in security management and diplomacy in post-conflict environments.
            </ListItem>
  					<ListItem title="Technology">
              From real-time tracking software and social intelligence investigative techniques to systems integration and unmanned aircraft operations, Zerofour&#39;s technology services are designed to protect critical infrastructure, optimize asset management, and improve performance enterprise-wide.
  					</ListItem>
            <ListItem title="Humanitarian">
              With strong operational experience, robust program management skills, rapid response capabilities, and a global network of local partners and expertise, Zerofour aids humanitarian objectives worldwide. We offer a broad spectrum of services to promote positive sustainable change.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
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
     
      >
         Thanks to Zerofour&#39;s unmatched expertise and discreet professionalism, our organization has successfully navigated complex security challenges worldwide, ensuring our people and assets remain protected.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
