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
import imageTransport from '@/images/transport.jpg'
import imageLogistics from '@/images/logistics.jpg'
import imageAdmin from '@/images/admin.jpg'
import imageOps from '@/images/ops.jpg'

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
    <Section title="Operational Logistics Planning" image={{ src: imageLogistics }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides logistics planning services that support complex operations in dynamic and resource-constrained environments. We help clients design, coordinate, and manage logistical frameworks that enable personnel, equipment, and services to move efficiently and reliably across regions. Our planning is grounded in operational realities and aligned with mission objectives, timelines, and risk considerations.
        </p>
        <p>
          Our teams assess transportation requirements, access routes, local infrastructure, vendor capabilities, and regulatory constraints to develop logistics plans that are both practical and resilient. Support may include movement coordination, supply chain planning, staging and distribution strategies, and contingency planning for disruption. Zerofour emphasizes clarity and coordination to reduce friction and improve execution.
        </p>
        <p>
          Every operation presents unique logistical challenges. Zerofour tailors planning support to each client’s operating environment, scale, and priorities, whether supporting short-term deployments or sustained operations. Clients benefit from structured planning, reduced uncertainty, and logistics solutions that keep operations moving forward.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Logistics Planning</TagListItem>
        <TagListItem>Movement Coordination</TagListItem>
        <TagListItem>Supply Chains</TagListItem>
        <TagListItem>Route Planning</TagListItem>
        <TagListItem>Contingency Planning</TagListItem>
        <TagListItem>Operational Support</TagListItem>
      </TagList>
    </Section>
  )
}

function Residential() {
  return (
    <Section title="Transportation & Mobility Support" image={{ src: imageTransport, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour supports secure and reliable transportation for personnel, equipment, and sensitive assets operating in challenging environments. We help clients plan and manage mobility requirements that account for security conditions, infrastructure limitations, and operational tempo.
        </p>
        <p>
          Services may include ground and air movement coordination, secure transport planning, convoy procedures, and travel risk mitigation. Zerofour evaluates routes, timing, local conditions, and support requirements to ensure movements are efficient, controlled, and aligned with broader operational objectives.
        </p>
        <p>
          By integrating transportation planning into overall operations, Zerofour helps clients reduce delays, manage exposure, and maintain continuity. Our mobility support is adaptable, scalable, and designed to function reliably even as conditions change.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Secure Transport</TagListItem>
        <TagListItem>Mobility Planning</TagListItem>
        <TagListItem>Route Analysis</TagListItem>
        <TagListItem>Convoy Support</TagListItem>
        <TagListItem>Travel Risk</TagListItem>
        <TagListItem>Movement Control</TagListItem>
      </TagList>
    </Section>
  )
}

function Construction() {
  return (
    <Section title="Field Operations Support" image={{ src: imageOps, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides on-the-ground operational support to sustain field activities in remote, austere, or high-risk environments. We help clients establish and maintain the logistical backbone required to support personnel, equipment, and mission-critical functions.
        </p>
        <p>
          Support services may include site setup, vendor coordination, local sourcing, supply distribution, and operational troubleshooting. Zerofour personnel work closely with client teams to ensure resources are available when and where they are needed, without unnecessary complexity or delay.
        </p>
        <p>
          Our field support model emphasizes flexibility, reliability, and accountability. Clients benefit from experienced coordination, reduced operational burden, and support services that enable teams to remain focused on core mission objectives.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Field Support</TagListItem>
        <TagListItem>Site Setup</TagListItem>
        <TagListItem>Vendor Coordination</TagListItem>
        <TagListItem>Supply Distribution</TagListItem>
        <TagListItem>Local Sourcing</TagListItem>
        <TagListItem>Operational Sustainment</TagListItem>
      </TagList>
    </Section>
  )
}

function Retail() {
  return (
    <Section title="Program & Administrative Support" image={{ src: imageAdmin }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides administrative and program support services that strengthen operational control and visibility. We assist clients with coordination, documentation, reporting, and process management required to support complex, multi-location operations.
        </p>
        <p>
          Services may include logistics coordination support, vendor oversight, documentation management, reporting structures, and compliance alignment. Zerofour helps reduce administrative friction while improving clarity, accountability, and consistency across operations.
        </p>
        <p>
          By integrating administrative support into operational planning, Zerofour enables clients to maintain momentum and oversight without diverting internal resources. Clients benefit from improved organization, clearer reporting, and dependable support that scales with operational demands.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Program Support</TagListItem>
        <TagListItem>Admin Coordination</TagListItem>
        <TagListItem>Reporting</TagListItem>
        <TagListItem>Vendor Oversight</TagListItem>
        <TagListItem>Compliance Support</TagListItem>
        <TagListItem>Operational Visibility</TagListItem>
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
        title="Operations depend on what happens behind the scenes"
      >
        <p>
          Zerofour understands that logistics and support services are foundational to operational success. Every client, location, and mission presents different constraints and requirements. Our approach focuses on reliability, coordination, and execution that enables operations to function smoothly—even in challenging environments.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Reliability">
            Logistics and support services designed to perform consistently under changing conditions.
          </GridListItem>
          <GridListItem title="Coordination">
            Integrated planning and execution across personnel, vendors, and locations.
          </GridListItem>
          <GridListItem title="Adaptability">
            Flexible support models that adjust as operational needs evolve.
          </GridListItem>
          <GridListItem title="Execution">
            Practical, field-informed solutions focused on results, not theory.
          </GridListItem>
          <GridListItem title="Visibility">
            Clear reporting and coordination that improve control and accountability.
          </GridListItem>
          <GridListItem title="Trust">
            Dependable support built on professionalism and long-term partnership.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Logistics & Support Services',
  description:
    'Logistics & Support Services - Agile, scalable operational support',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Logistics & Support Services" title="Agile, scalable operational support">
        <p>
          Zerofour delivers logistics and support services that enable organizations to operate efficiently in complex and changing environments. We help clients navigate operational challenges by providing structured planning, coordination, and on-the-ground support.
        </p><p><p>&nbsp;</p>
          Our services are designed to integrate seamlessly into day-to-day operations, supporting personnel movement, supply chains, and field activities without unnecessary friction.
</p><p><p>&nbsp;</p>
          From logistics planning and transportation support to field operations and administrative coordination, Zerofour provides reliable support that strengthens operational continuity and performance.
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
