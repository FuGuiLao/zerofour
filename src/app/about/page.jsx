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
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
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
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Zerofour only employs the most experienced operators" invert>
            Our network of special operators from the world&#39;s elite military units, combined with seasoned intelligence professionals, allows Zerofour to operate at the highest level to serve our clients.
          </GridListItem>
          <GridListItem title="We respond to our clients&#39; needs in an ever changing environment" invert>
            Zerofour prioritizes what you think is urgent regardless of the location or timeframe. We inject critical operational expertise and maintain flexibility to serve our clients across the globe.
          </GridListItem>
          <GridListItem title="Depth of service means that Zerofour is your trusted partner" invert>
        From protecting personnel and facilities, operational security, risk management, training, and internal and criminal investigations, we can support our clients&#39; ever evolving needs.
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
        role: 'Director / Operations',
        image: { src: imageJaydenBrant },
        blurb:
          "Throughout his career, Jayden has worked for the United States federal government in law enforcement and intelligence capacities. Jayden previously served as a Deputy Sheriff with the Los Angeles County Sheriff's Department. While there, he worked in field operations, custody, training bureau, and numerous special assignments within the department.\n\nHe has extensive knowledge, training, and experience in criminal investigation, interrogation, undercover surveillance, case management, evidence handling, and California and Federal law. Jayden attained California Peace Officer Standards and Training (POST) Certification and completed POST Advanced Officer Training while with the LASD and continues to maintain certification. He also completed the challenging coursework for the POST Specialized Investigator Certification. During his career, Jayden has worked with the LASD, LAPD, US Marshals Service, Diplomatic Security Service, US Secret Service, Federal Bureau of Investigation, Department of Homeland Security, US Immigration and Customs Enforcement, the Superior Court of California, as well as numerous local law enforcement agencies and independent investigators. In addition to a law enforcement background, Jayden also has significant private sector experience. He has held leadership positions in the heavily regulated financial services industry not only overseeing operations of a Registered Investment Advisory Firm, but also conducting corporate due diligence and fraud investigations. He has also provided regulatory compliance, security, and legal consulting for high-profile individuals and numerous companies across a wide variety of industries. Jayden attended Claremont McKenna College and studied computer engineering.",
      },
      {
        name: 'Brett Montgomery',
        role: 'Director / Administration',
        image: { src: imageBrettMontgomery },
        blurb:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      },
    ],
  }
]
 /* =========================
   TEAM SECTION (COMMENTED OUT)
   ========================= 
 {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]
        =========================
   TEAM SECTION (COMMENTED OUT)
   ========================= */
  
 /* =========================
   TEAM SECTION (COMMENTED OUT)
   ========================= 
function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
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
        ))}
      </div>
    </Container>
  )
}
     =========================
   TEAM SECTION (COMMENTED OUT)
   ========================= */

function Team() {
  const group = team[0]
  if (!group?.people?.length) return null

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />

        <div className="pt-12 sm:pt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              {group.title}
            </h2>
          </FadeIn>

          <div className="mt-10 space-y-8">
            {group.people.map((person) => (
              <FadeIn key={person.name}>
                {/* OUTER BOX: outline always visible + subtle darken on hover */}
                <article className="group relative rounded-3xl border border-neutral-200 bg-neutral-50 p-6 hover:bg-neutral-100 transition sm:p-8">
                  {/* DOUBLE the horizontal space between image and text */}
                  <div className="lg:flex lg:items-start lg:gap-12">
                    {/* IMAGE BOX (keeps zoom on hover) */}
                    <div className="flex justify-center lg:w-[22rem] lg:flex-none">
                      <div className=" relative w-full overflow-hidden rounded-3xl bg-neutral-100">
                        <Image
                          alt=""
                          {...person.image}
                          className="h-80 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/0 to-40%" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                            {person.name}
                          </p>
                          <p className="mt-2 text-sm text-white">{person.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* TEXT BOX: more padding + pushed down to clear image radius */}
                    <div className="">
                      <div className="pt-6 px-6 lg:pt-6 lg:px-0">
                        {/* <p className="font-display text-lg font-semibold text-neutral-950">
                          Zerofour only employs the most experienced operators
                        </p>*/}

                        <p className="text-base leading-7 text-neutral-600">
                          {person.blurb}
                        </p>

                        <p className="mt-0 font-semibold text-neutral-950 underline underline-offset-4">
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}




export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Zerofour is defined by integrity, discretion, and excellence. We are committed to protecting our clients with precision and professionalism, ensuring their safety and security across the globe. Our team operates with a relentless pursuit of knowledge, adapting to evolving threats and leveraging intelligence to provide strategic solutions. We value trust, respect, and collaboration, fostering a work environment where expertise and innovation thrive.
          </p>
          <p>
            Our team is composed of seasoned professionals with backgrounds in law enforcement, military, and intelligence services, bringing a wealth of experience and expertise to our agency. Their diverse skills, honed through years of service, provide us with a comprehensive approach to security and intelligence operations. This elite team applies their rigorous training, strategic thinking, and real-world experience to deliver unmatched protection and insight, ensuring our clients receive the highest level of service.
          </p>
          <p>Zerofour is a registered United States federal government prime contractor (8JMN8) and a licensed private patrol operator (PPO122263) and private investigation agency (PI187883) with the State of California.</p>
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
