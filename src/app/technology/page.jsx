import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageDrone from '@/images/drone.jpg'
import imageSocial from '@/images/social.jpg'
import imageAsset from '@/images/asset.jpg'
import imageSystem from '@/images/system.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Executive() {
  return (
    <Section title="Real-Time Tracking & Asset Visibility" image={{ src: imageAsset }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour delivers technology services that improve real-time visibility over personnel, vehicles, and critical assets. Our solutions help clients maintain awareness across dispersed operations, reduce uncertainty during movement, and strengthen decision-making with reliable data. We focus on practical systems that integrate into day-to-day operations without unnecessary complexity.
        </p>
        <p>
          Support may include GPS-based tracking, geofencing, alerting workflows, and monitoring dashboards tailored to operational needs. Zerofour helps clients define what must be tracked, how alerts should be escalated, and how reporting should be structured for accountability and oversight. We prioritize secure configuration and reliable performance across challenging environments.
        </p>
        <p>
          Every client has different visibility requirements and operating constraints. Zerofour tailors tracking and monitoring solutions to your footprint, risk profile, and operational tempo, whether supporting high-risk travel, fleet oversight, or distributed field teams. Clients benefit from improved control, faster response, and clearer operational awareness.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Real-Time Tracking</TagListItem>
        <TagListItem>Geofencing</TagListItem>
        <TagListItem>Alerting</TagListItem>
        <TagListItem>Fleet Visibility</TagListItem>
        <TagListItem>Movement Oversight</TagListItem>
        <TagListItem>Operational Dashboards</TagListItem>
      </TagList>
    </Section>
  )
}

function Residential() {
  return (
    <Section title="Systems Integration & Infrastructure Security" image={{ src: imageSystem, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour supports clients with systems integration that strengthens security, reliability, and operational performance. We help organizations connect tools and platforms across physical security, operations, and communications to reduce gaps, improve workflows, and increase visibility across critical functions.
        </p>
        <p>
          Services may include requirements scoping, vendor coordination, integration planning, and implementation support for systems such as access control, surveillance, sensors, monitoring platforms, and communications tools. Zerofour emphasizes practical configuration, documentation, and operational usability so integrated systems remain reliable after deployment.
        </p>
        <p>
          Critical infrastructure and operational systems require consistent performance and disciplined oversight. Zerofour helps clients design integration approaches that align with risk tolerance, compliance requirements, and operational priorities. Clients benefit from stronger resilience, clearer control, and systems that support security and performance enterprise-wide.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Systems Integration</TagListItem>
        <TagListItem>Access Control</TagListItem>
        <TagListItem>Video Systems</TagListItem>
        <TagListItem>Sensors</TagListItem>
        <TagListItem>Comms Tools</TagListItem>
        <TagListItem>Infrastructure Security</TagListItem>
      </TagList>
    </Section>
  )
}

function Construction() {
  return (
    <Section title="Social Intelligence & Investigative Support" image={{ src: imageSocial, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides social intelligence and investigative technology support to help clients identify risks, monitor emerging issues, and protect personnel and reputation. We apply structured methods to collect, analyze, and contextualize open-source and social signals relevant to safety, security, and operational continuity.
        </p>
        <p>
          Support may include monitoring frameworks, collection and analysis workflows, threat indicator tracking, and reporting designed for decision-makers. Zerofour emphasizes disciplined tradecraft, clear documentation, and responsible use of data. Deliverables are tailored to the client’s operating environment, risk drivers, and information needs.
        </p>
        <p>
          Intelligence is most valuable when it is actionable. Zerofour helps clients translate complex information into timely, relevant insight that supports planning and response. Clients benefit from improved awareness, early warning capability, and investigative support that strengthens overall security posture.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Social Intelligence</TagListItem>
        <TagListItem>Open-Source</TagListItem>
        <TagListItem>Threat Indicators</TagListItem>
        <TagListItem>Monitoring</TagListItem>
        <TagListItem>Early Warning</TagListItem>
        <TagListItem>Analyst Support</TagListItem>
      </TagList>
    </Section>
  )
}

function Retail() {
  return (
    <Section title="Unmanned Systems & Remote Operations" image={{ src: imageDrone }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour supports clients with unmanned systems and remote operations capabilities designed to improve coverage, reduce exposure, and strengthen situational awareness. These solutions are particularly valuable for monitoring critical infrastructure, supporting assessments, and providing visibility in environments where access is limited or risk is elevated.
        </p>
        <p>
          Services may include unmanned aircraft operations support, mission planning, data capture workflows, and coordination with on-the-ground teams. Zerofour emphasizes safe, compliant operation and practical integration so unmanned capabilities enhance—rather than complicate—field operations.
        </p>
        <p>
          Remote sensing and unmanned systems are most effective when aligned to operational objectives. Zerofour helps clients select the right approach for their environment, constraints, and information needs. Clients benefit from improved visibility, reduced risk, and technology-enabled performance across operations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>UAS Operations</TagListItem>
        <TagListItem>Remote Sensing</TagListItem>
        <TagListItem>Mission Planning</TagListItem>
        <TagListItem>Data Capture</TagListItem>
        <TagListItem>Situational Awareness</TagListItem>
        <TagListItem>Remote Monitoring</TagListItem>
      </TagList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Why Zerofour?"
        title="Technology matters when it performs in real conditions"
      >
        <p>
          Zerofour technology services are built for operational environments where reliability, security, and usability matter. Every client has unique requirements, constraints, and risk drivers. Our approach focuses on practical solutions, disciplined implementation, and integration that improves performance across critical functions.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Practicality">
            Solutions designed to support operations without unnecessary complexity.
          </GridListItem>
          <GridListItem title="Integration">
            Systems that connect tools, data, and workflows across teams and environments.
          </GridListItem>
          <GridListItem title="Security">
            Disciplined configuration and implementation aligned with risk and compliance needs.
          </GridListItem>
          <GridListItem title="Reliability">
            Technology selected and supported for consistent performance in real conditions.
          </GridListItem>
          <GridListItem title="Insight">
            Actionable visibility and analysis that strengthens decision-making.
          </GridListItem>
          <GridListItem title="Trust">
            Professional delivery grounded in operational experience and accountability.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Technology',
  description:
    'Technology - Tools that improve visibility, security, and performance',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Technology" title="Tools that improve visibility, security, and performance">
        <p>
          Zerofour’s technology services are designed to protect critical infrastructure, optimize asset management, and improve performance enterprise-wide. We deliver practical solutions that strengthen awareness, control, and operational efficiency.
        </p><p><p>&nbsp;</p>
          From real-time tracking and monitoring platforms to systems integration and social intelligence techniques, Zerofour helps clients reduce uncertainty and make better decisions with reliable, actionable data.
</p><p><p>&nbsp;</p>
          Whether supporting infrastructure security, investigative intelligence, or unmanned operations, Zerofour provides technology capabilities built for high-consequence environments where performance matters.
        </p>
        </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Executive />
        <Residential />
        <Construction />
        <Retail />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
