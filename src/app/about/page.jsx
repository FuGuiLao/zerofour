import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import imageexecutive from '@/images/divisions/executive.jpg'
import imagefield from '@/images/divisions/field.jpg'
import imagetraining from '@/images/divisions/training.jpg'
import imagerisk from '@/images/divisions/risk.jpg'
import imageinvestigation from '@/images/divisions/investigation.jpg'
import imageclient from '@/images/divisions/client.jpg'
import imagetechnology from '@/images/divisions/technology.jpg'
import imageworkforce from '@/images/divisions/workforce.jpg'
import imagegrowth from '@/images/divisions/growth.jpg'
import imageJaydenBrant from '@/images/team/jayden-brant.jpg'
import imageBrettMontgomery from '@/images/team/brett-montgomery.jpg'

import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Culture"
        title="Precision and decisive action, driven by trust and unwavering commitment."
        invert
      >
        <p>We are a group of like-minded people who share the same core values.</p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem
            title="Zerofour only employs the most experienced operators"
            invert
          >
            Our network of special operators from the world&#39;s elite military units,
            combined with seasoned intelligence professionals, allows Zerofour to operate
            at the highest level to serve our clients.
          </GridListItem>

          <GridListItem
            title="We respond to our clients&#39; needs in an ever changing environment"
            invert
          >
            Zerofour prioritizes what you think is urgent regardless of the location or
            timeframe. We inject critical operational expertise and maintain flexibility
            to serve our clients across the globe.
          </GridListItem>

          <GridListItem
            title="Depth of service means that Zerofour is your trusted partner"
            invert
          >
            From protecting personnel and facilities, operational security, risk
            management, training, and internal and criminal investigations, we can
            support our clients&#39; ever evolving needs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Jayden Brant',
        role: 'Founder & Chief Executive Officer',
        image: { src: imageJaydenBrant },
        blurb:
          "Throughout his career, Jayden has worked for the United States federal government in law enforcement and intelligence capacities. Jayden previously served as a Deputy Sheriff with the Los Angeles County Sheriff's Department, where he worked in field operations, custody, training bureau, and special assignments.\n\n" +
          'He has extensive knowledge, training, and experience in criminal investigation, interrogation, undercover surveillance, case management, evidence handling, and California and federal law. Jayden attained California Peace Officer Standards and Training (POST) Certification and completed Advanced Officer Training while with the LASD, which he continues to maintain. He also completed the coursework for POST Specialized Investigator Certification.\n\n' +
          'During his career, Jayden has worked alongside agencies including LASD, LAPD, the U.S. Marshals Service, Diplomatic Security Service, U.S. Secret Service, FBI, Department of Homeland Security, ICE, and the Superior Court of California.\n\n' +
          'In addition to government service, Jayden has held leadership roles in the financial services industry, overseeing regulated operations, corporate due diligence, and fraud investigations. He has also provided regulatory compliance, security, and legal consulting for individuals and companies across multiple industries. Jayden studied computer engineering at Claremont McKenna College.',
      },
      {
        name: 'Brett Montgomery',
        role: 'Chief Operating Officer',
        image: { src: imageBrettMontgomery },
        blurb:
          'Brett earned his undergraduate degree in Electrical Engineering from Boston University and went on to serve as an officer in the United States Air Force. He later received a Master of Business Administration from the University of Southern California and built a career spanning more than 20 years in operations and supply chain leadership, working with organizations ranging from early-stage startups to multi-billion-dollar Fortune 500 companies.\n\n' +
          'Throughout his career, Brett has extensive experience building and leading teams at scale, hiring and developing hundreds of professionals, from factory and warehouse personnel to vice presidents and senior division leaders. His background includes rapidly launching new operations, standing up facilities, and designing site surveillance, layouts, and staffing models for national organizations.\n\n' +
          'Brett has also led security and safety organizations for a wide range of commercial enterprises, overseeing physical facilities as well as domestic and international transportation operations. His combined technical, operational, and leadership experience enables him to deliver scalable, secure, and efficient solutions across complex environments.',
      },
    ],
  },
  {
    title: 'Organizational Structure',
    people: [
    { 
  name: 'Executive Operations', 
  role: 'Provides strategic leadership, operational direction, and deployment oversight across all assignments. Establishes service standards, performance benchmarks, and accountability measures to ensure disciplined and consistent execution.', 
  image: { src: imageexecutive } 
},
{ 
  name: 'Field Supervision & Site Management', 
  role: 'Delivers direct on-site leadership, conducts supervisory audits, enforces post orders, and maintains active coordination with property managers and association boards to ensure daily operational alignment.', 
  image: { src: imagefield } 
},
{ 
  name: 'Training & Professional Standards', 
  role: 'Oversees officer training, continuing education, report writing protocols, and performance expectations to ensure personnel operate within clearly defined procedures that support professionalism and defensible outcomes.', 
  image: { src: imagetraining } 
},
{ 
  name: 'Risk Management & Compliance', 
  role: 'Maintains structured incident review processes, documentation integrity, and internal control measures designed to reduce liability exposure and protect client interests across all engagements.', 
  image: { src: imagerisk } 
},
{ 
  name: 'Investigations & Intelligence', 
  role: 'Conducts internal investigations, incident analysis, and threat assessments when matters require elevated review, structured evaluation, or specialized investigative support.', 
  image: { src: imageinvestigation } 
},
{ 
  name: 'Client Services & Reporting', 
  role: 'Manages structured reporting systems, performance metrics, and ongoing communication with property leadership to provide transparency and measurable service oversight.', 
  image: { src: imageclient } 
},
{ 
  name: 'Strategic Growth & Partnerships', 
  role: 'Manages client acquisition, contract development, and strategic partnerships while identifying growth opportunities aligned with Zerofour’s operational standards.', 
  image: { src: imagegrowth } 
},
{ 
  name: 'Technology & Systems Integration', 
  role: 'Oversees coordination of security technology, access control systems, and digital reporting platforms to enhance operational visibility and support informed decision-making.', 
  image: { src: imagetechnology } 
},
{ 
  name: 'Workforce Administration', 
  role: 'Manages recruitment, vetting, onboarding procedures, scheduling controls, and personnel oversight to maintain qualified staffing and disciplined workforce management.', 
  image: { src: imageworkforce } 
},
    ],
  },
]

function Team() {
  const leadership = team.find((g) => g.title === 'Leadership')
  const staff = team.find((g) => g.title === 'Organizational Structure')

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {leadership?.people?.length ? (
          <FadeInStagger>
            <Border as={FadeIn} />

            <div className="pt-12 sm:pt-16">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {leadership.title}
                </h2>
              </FadeIn>

              <div className="mt-10 space-y-8">
                {leadership.people.map((person) => (
                  <FadeIn key={person.name}>
                    <article className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                      <div className="lg:flex lg:gap-12">
                        <div className="lg:w-[22rem] lg:flex-none">
                          <div className="relative overflow-hidden rounded-3xl">
  <Image alt="" {...person.image} className="h-96 w-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black to-black/0 to-40%" />
  <div className="absolute inset-0 flex flex-col justify-end p-6">
    <p className="font-display text-base/6 font-semibold tracking-wide text-white">
      {person.name}
    </p>
    <p className="mt-2 text-sm text-white">{person.role}</p>
  </div>
</div>
                        </div>

                        <div className="flex-1 pt-6 lg:pt-0">
                          {(person.blurb ?? '')
                            .split('\n\n')
                            .filter(Boolean)
                            .map((para, idx) => (
                              <p key={idx} className={idx === 0 ? '' : 'mt-4'}>
                                {para}
                              </p>
                            ))}
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeInStagger>
        ) : null}

        {staff?.people?.length ? (
          <FadeInStagger>
            <Border as={FadeIn} />

            <div className="pt-12 sm:pt-16">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {staff.title}
                </h2>
              </FadeIn>

              <div className="mt-10">
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  {staff.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-100% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">{person.role}</p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ) : null}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which puts
          our clients at the center of everything we do.
        </p>

        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Zerofour is defined by integrity, discretion, and excellence. We are committed
            to protecting our clients with precision and professionalism, ensuring their
            safety and security across the globe. Our team operates with a relentless
            pursuit of knowledge, adapting to evolving threats and leveraging intelligence
            to provide strategic solutions. We value trust, respect, and collaboration,
            fostering a work environment where expertise and innovation thrive.
          </p>

          <p>
            Our team is composed of seasoned professionals with backgrounds in law
            enforcement, military, and intelligence services, bringing a wealth of
            experience and expertise to our agency. Their diverse skills, honed through
            years of service, provide us with a comprehensive approach to security and
            intelligence operations. This elite team applies their rigorous training,
            strategic thinking, and real-world experience to deliver unmatched protection
            and insight, ensuring our clients receive the highest level of service.
          </p>

          <p>
            Zerofour is a registered United States federal government prime contractor (8JMN8)
            and a licensed private patrol operator (PPO122263) and private investigation agency
            (PI187883) with the State of California.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="100+" label="Operators worldwide" />
          <StatListItem value="5" label="Continents served" />
          <StatListItem value="Over $1B" label="Assets protected" />
        </StatList>
      </Container>

      <Culture />
      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the Blog"
        intro="Our team of seasoned professionals, with backgrounds in law enforcement, military, and intelligence, has one mission: to safeguard our clients and ensure their peace of mind across the globe. From conducting risk assessments to implementing tailored security solutions, we are dedicated to delivering exceptional service."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
