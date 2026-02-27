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

import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import imageJaydenBrant from '@/images/team/jayden-brant.jpg'
import imageBrettMontgomery from '@/images/team/brett-montgomery.jpg'

import { loadArticles } from '@/lib/mdx'


/* -------------------------------------------------------
   CULTURE SECTION
------------------------------------------------------- */

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Culture"
        title="Precision and decisive action, driven by trust and unwavering commitment."
        invert
      >
        <p>
          We are a group of like-minded professionals who share the same core values.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem
            title="Zerofour only employs the most experienced operators"
            invert
          >
            Our network of elite military operators and seasoned intelligence
            professionals allows Zerofour to operate at the highest level in
            service of our clients.
          </GridListItem>

          <GridListItem
            title="We respond to client needs in an ever-changing environment"
            invert
          >
            Zerofour prioritizes what you consider urgent regardless of location
            or timeframe. We inject operational expertise and maintain flexibility
            to support clients globally.
          </GridListItem>

          <GridListItem
            title="Depth of service makes Zerofour a trusted partner"
            invert
          >
            From protecting personnel and facilities to operational security,
            risk management, training, and investigations, we support evolving
            client needs with discipline and precision.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


/* -------------------------------------------------------
   TEAM DATA
------------------------------------------------------- */

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Jayden Brant',
        role: 'Director / Operations',
        image: { src: imageJaydenBrant },
        blurb:
          "Throughout his career, Jayden has worked for the United States federal government in law enforcement and intelligence capacities.\n\n" +
          "He previously served as a Deputy Sheriff with the Los Angeles County Sheriff's Department, working in field operations, custody, training bureau, and special assignments.\n\n" +
          "He has extensive experience in criminal investigation, interrogation, undercover surveillance, case management, evidence handling, and federal and California law.\n\n" +
          "Jayden studied computer engineering at Claremont McKenna College.",
      },
      {
        name: 'Brett Montgomery',
        role: 'Director / Administration',
        image: { src: imageBrettMontgomery },
        blurb:
          "Brett earned his undergraduate degree in Electrical Engineering from Boston University and served as an officer in the United States Air Force.\n\n" +
          "He later received an MBA from the University of Southern California and built a 20+ year career in operations and supply chain leadership.\n\n" +
          "His background includes standing up facilities, building large-scale teams, and designing secure operational infrastructure for national organizations.",
      },
    ],
  },
  {
    title: 'Team',
    people: [
      { name: 'Chelsea Hagon', role: 'Senior Developer', image: { src: imageChelseaHagon } },
      { name: 'Emma Dorsey', role: 'Senior Designer', image: { src: imageEmmaDorsey } },
      { name: 'Leonard Krasner', role: 'VP, User Experience', image: { src: imageLeonardKrasner } },
      { name: 'Blake Reid', role: 'Junior Copywriter', image: { src: imageBlakeReid } },
      { name: 'Kathryn Murphy', role: 'VP, Human Resources', image: { src: imageKathrynMurphy } },
      { name: 'Whitney Francis', role: 'Content Specialist', image: { src: imageWhitneyFrancis } },
      { name: 'Jeffrey Webb', role: 'Account Coordinator', image: { src: imageJeffreyWebb } },
      { name: 'Benjamin Russel', role: 'Senior Developer', image: { src: imageBenjaminRussel } },
      { name: 'Angela Fisher', role: 'Front-end Developer', image: { src: imageAngelaFisher } },
    ],
  },
]


/* -------------------------------------------------------
   TEAM SECTION
------------------------------------------------------- */

function Team() {
  const leadership = team.find((g) => g.title === 'Leadership')
  const staff = team.find((g) => g.title === 'Team')

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">

        {/* Leadership Bios */}
        {leadership && (
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
                            <Image
                              alt=""
                              {...person.image}
                              className="h-96 w-full object-cover"
                            />
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
        )}

        {/* Grid Team */}
        {staff && (
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
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base font-semibold text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        )}

      </div>
    </Container>
  )
}


/* -------------------------------------------------------
   PAGE
------------------------------------------------------- */

export const metadata = {
  title: 'About Us',
  description:
    'We believe our strength lies in collaboration and operational excellence.',
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Us" title="Our strength is collaboration">
        <p>
          Zerofour is defined by integrity, discretion, and excellence.
        </p>
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
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
