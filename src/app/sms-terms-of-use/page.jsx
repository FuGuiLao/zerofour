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
import { loadArticles } from '@/lib/mdx'
import Link from 'next/link'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
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
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
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

export const metadata = {
  title: 'SMS Terms of Use',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="SMS Terms of Use" title="">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>By "Opting In" to or using a “Text Message Service” (as defined below) from Zerofour Inc., you accept
these Terms of Use. Zerofour Inc. or one of its affiliates. All references to " Zerofour Inc.," "we," "our," or "us" refer to Zerofour
Inc., 515 S. Flower Street 18th Floor Los Angeles, CA 90071.</p>
          
<p><strong>Definitions</strong><br />"Opting In," "Opt In," and "Opt-In" refer to requesting, joining, agreeing to, enrolling in, signing up for,
acknowledging, responding to, or otherwise consenting to receive one or more text messages. "Text Message Service" includes any arrangement or situation in which we send one or more messages
addressed to your mobile phone number, including text messages (such as SMS, MMS, or successor
protocols or technologies).</p>
          
<p><strong>Frequency of Text Messages</strong><br />This Text Messaging Service is for conversational person-to-person communication between you and our
employees. We may send you an initial message providing details about the service. After that, the number
of text messages you receive will vary depending on how you use our services and whether you take steps
to generate more text messages from us (such as by sending a HELP request).</p>

  <p><strong>Consenting to Text Messages</strong><br />By consenting to receive text messages from us, you agreed to these SMS Terms of Use and the following,
incorporated herein by reference:<br />
  <Link href="https://www.zerofour.org/sms-privacy-policy" className="underline">SMS Privacy Policy</Link><br />
<Link href="https://www.zerofour.org/terms-of-use" className="underline">Terms of Use</Link><br />
<Link href="https://www.zerofour.org/privacy-policy" className="underline">Privacy Policy</Link>
  </p>

<p><strong>Contact Us</strong><br />
  admin@zerofour.org<br />
  (213) 634-4114
  </p>
  
          
          <p>To give notice, or if you have any questions or comments about our terms and conditions, please contact us in writing.</p>
        <br />
Zerofour Inc.<br />
515 S. Flower Street 18th Floor<br />
Los Angeles, CA 90071
        </div>
      </PageIntro>
    </>
  )
}
