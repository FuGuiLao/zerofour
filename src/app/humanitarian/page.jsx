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
    <Section title="Rapid Response & Field Mobilization" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour supports humanitarian objectives with rapid response capabilities designed for complex, time-sensitive environments. We help organizations mobilize quickly, establish operational footing, and maintain continuity during crises that impact communities, infrastructure, and access. Our approach prioritizes speed, coordination, and disciplined execution in the first critical phases of response.
        </p>
        <p>
          Support may include surge staffing coordination, movement and access planning, field site setup, local partner engagement, and logistical enablement for teams operating in austere conditions. Zerofour leverages a global network of local expertise to improve reach, reduce friction, and strengthen situational awareness. We focus on practical support that helps humanitarian teams operate safely and effectively.
        </p>
        <p>
          Every response environment presents unique challenges related to security, infrastructure, governance, and community dynamics. Zerofour tailors rapid response support to the mission, constraints, and operating context, enabling organizations to stabilize operations and begin delivering assistance with confidence and control.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Rapid Response</TagListItem>
        <TagListItem>Field Mobilization</TagListItem>
        <TagListItem>Site Setup</TagListItem>
        <TagListItem>Local Partners</TagListItem>
        <TagListItem>Access Planning</TagListItem>
        <TagListItem>Operational Support</TagListItem>
      </TagList>
    </Section>
  )
}

function Residential() {
  return (
    <Section title="Program Management & Delivery Support" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides program management support that strengthens humanitarian delivery across planning, execution, and oversight. We help organizations structure programs for clarity and accountability, coordinate stakeholders, and maintain operational control across multi-location activities. Our role is to reduce administrative burden while improving consistency and performance.
        </p>
        <p>
          Support may include implementation planning, coordination with local partners, activity tracking, documentation, reporting, and workflow development aligned to donor or organizational requirements. Zerofour emphasizes practical systems that improve visibility and decision-making without slowing down delivery. We help teams maintain momentum while ensuring programs remain organized and defensible.
        </p>
        <p>
          Humanitarian programs operate under real constraints and heightened scrutiny. Zerofour tailors program support to the mission, environment, and reporting obligations, helping organizations deliver assistance effectively while maintaining accountability and operational discipline.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Program Support</TagListItem>
        <TagListItem>Implementation</TagListItem>
        <TagListItem>Coordination</TagListItem>
        <TagListItem>Reporting</TagListItem>
        <TagListItem>Documentation</TagListItem>
        <TagListItem>Oversight</TagListItem>
      </TagList>
    </Section>
  )
}

function Construction() {
  return (
    <Section title="Logistics & Access Enablement" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour helps humanitarian organizations navigate logistical and access challenges that can limit delivery in fragile environments. We support movement planning, supply chain coordination, and field logistics that enable assistance to reach affected populations efficiently and reliably. Our approach is grounded in local realities and designed to function under disruption.
        </p>
        <p>
          Services may include transportation coordination, local sourcing support, distribution planning, route and access assessments, and contingency planning for delays or changing conditions. Zerofour can also support coordination with local stakeholders to improve access and reduce operational friction. We prioritize reliability, documentation, and disciplined execution.
        </p>
        <p>
          Access constraints can change quickly due to weather, infrastructure, governance, or security dynamics. Zerofour provides adaptable logistics support that helps organizations maintain continuity and respond effectively as conditions evolve. Clients benefit from improved reach, reduced delays, and stronger control over delivery operations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Humanitarian Logistics</TagListItem>
        <TagListItem>Access Enablement</TagListItem>
        <TagListItem>Supply Chains</TagListItem>
        <TagListItem>Distribution</TagListItem>
        <TagListItem>Route Assessment</TagListItem>
        <TagListItem>Contingency</TagListItem>
      </TagList>
    </Section>
  )
}

function Retail() {
  return (
    <Section title="Local Partner Networks & Capacity Support" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour supports humanitarian outcomes by leveraging strong local partner networks and regional expertise. We help organizations identify, engage, and coordinate with local stakeholders to improve reach, strengthen trust, and ensure delivery aligns with community dynamics. Local insight is essential for effective response and sustainable impact.
        </p>
        <p>
          Support may include partner identification, coordination frameworks, operating guidance, and capacity support that strengthens local execution. Zerofour can assist with local context assessments, stakeholder mapping, and practical training or advisory support aligned to mission needs. We focus on collaboration and disciplined coordination.
        </p>
        <p>
          Sustainable change requires more than short-term delivery. Zerofour helps organizations strengthen local capability and continuity while maintaining accountability and program integrity. Clients benefit from improved access, stronger coordination, and support that enhances effectiveness across complex humanitarian environments.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Local Networks</TagListItem>
        <TagListItem>Stakeholders</TagListItem>
        <TagListItem>Partner Support</TagListItem>
        <TagListItem>Capacity Support</TagListItem>
        <TagListItem>Community Dynamics</TagListItem>
        <TagListItem>Sustainable Impact</TagListItem>
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
        title="Humanitarian work depends on readiness and trusted execution"
      >
        <p>
          Zerofour supports humanitarian objectives with operational experience, disciplined program support, and a global network of local partners. Every crisis environment has unique constraints and community dynamics. Our approach focuses on practical enablement that improves access, strengthens delivery, and supports accountable, sustainable outcomes.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Readiness">
            Rapid mobilization capabilities designed for time-sensitive environments.
          </GridListItem>
          <GridListItem title="Execution">
            Practical, field-informed support that keeps delivery moving under disruption.
          </GridListItem>
          <GridListItem title="Coordination">
            Structured program and stakeholder coordination that improves clarity and accountability.
          </GridListItem>
          <GridListItem title="Access">
            Logistics and access enablement that helps reach affected populations reliably.
          </GridListItem>
          <GridListItem title="Local Insight">
            Regional expertise and partner networks that strengthen trust and effectiveness.
          </GridListItem>
          <GridListItem title="Integrity">
            Disciplined documentation and oversight that supports defensible program delivery.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Humanitarian',
  description:
    'Humanitarian - Operational support for sustainable outcomes',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Humanitarian" title="Operational support for sustainable outcomes">
        <p>
          Zerofour supports humanitarian objectives worldwide through operational experience, robust program management, rapid response capabilities, and a global network of local partners. We help organizations deliver assistance effectively in complex environments.
        </p><p><p>&nbsp;</p>
          Our services are designed to strengthen access, improve coordination, and sustain delivery under disruption, while maintaining accountability and program integrity.
</p><p><p>&nbsp;</p>
          From rapid response and logistics enablement to program support and local partner coordination, Zerofour provides practical support that promotes positive, sustainable change.
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
