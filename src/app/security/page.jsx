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
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
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
    <Section title="Executive & High-Net-Worth Protection" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides discreet, intelligence-driven protective services for executives, principals, public figures, and high-net-worth individuals operating in complex or elevated-risk environments. Our approach emphasizes advance planning, threat awareness, and professional execution rather than overt presence. Each engagement begins with a comprehensive risk assessment that evaluates travel patterns, public exposure, operating locations, and personal routines, allowing our teams to develop protection strategies that are effective without being intrusive.
        </p>
        <p>
          Our protection personnel are drawn from current and former law enforcement and military backgrounds, bringing real-world experience in close protection, dignitary security, and high-risk operations. Teams are trained to maintain constant situational awareness while blending seamlessly into the client’s environment. Services may include advance work and site surveys, secure transportation coordination, route planning, liaison with local authorities when appropriate, and residential protection support. Zerofour emphasizes adaptability, ensuring our teams can respond quickly to evolving threat conditions or client requirements.
      </p><p>
          Every executive protection assignment is tailored to the client’s lifestyle, risk tolerance, and operational priorities. Whether supporting short-term travel, ongoing personal security, or family protection requirements, our focus remains on minimizing disruption while maximizing safety. Clients benefit from experienced leadership, clear communication, and protection strategies designed to preserve privacy, reputation, and continuity of daily operations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Assessment</TagListItem>
        <TagListItem>Analysis</TagListItem>
        <TagListItem>Insight</TagListItem>
        <TagListItem>Consultation</TagListItem>
        <TagListItem>Intelligence</TagListItem>
        <TagListItem>Understanding</TagListItem>
      </TagList>
    </Section>
  )
}

function Residential() {
  return (
    <Section title="Residential & Community Security" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
         <p>
       Zerofour delivers professional residential and community security services designed to safeguard people, property, and shared spaces while maintaining a secure and welcoming environment. We support condominiums, apartment complexes, gated communities, and private estates with security solutions that balance visibility, deterrence, and discretion. Each engagement is informed by site-specific assessments that evaluate access points, traffic patterns, resident needs, and potential vulnerabilities.
        </p>
        <p>
Our residential security personnel are carefully selected and trained to serve as both a protective presence and a trusted point of contact for residents and property management. Services include access control and visitor management, patrol operations, incident response, and coordination with emergency services when required. Zerofour places strong emphasis on professionalism, consistency, and accountability, ensuring personnel represent the property appropriately and interact with residents respectfully.
</p>
        <p>
By integrating security operations into the daily rhythm of a residential environment, Zerofour enhances safety without compromising quality of life. Our teams work closely with property managers and homeowner associations to align security coverage with community expectations and operational requirements. The result is a dependable security presence that deters threats, responds effectively to incidents, and reinforces confidence among residents and stakeholders.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Confidential', role: 'Corporate Security Director' }}
        className="mt-12"
      >
        The planning phase was incredibly thorough and collaborative. They presented a well-structured, detailed approach that felt fully aligned with our needs. Their expertise and adaptability left us feeling secure and well-prepared for any eventuality.
      </Blockquote>
    </Section>
  )
}

function Construction() {
  return (
    <Section title="Construction Site Security" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
       Construction projects present unique security challenges, including valuable materials, heavy equipment, open perimeters, and constantly changing site conditions. Zerofour provides construction site security services designed to reduce theft, vandalism, and unauthorized access throughout all phases of development. Our teams understand the operational realities of active construction environments and tailor coverage accordingly, from early ground-break through project completion.
        </p><p>
Security services may include perimeter control, controlled entry and exit points, mobile patrols, after-hours coverage, and incident reporting. Zerofour personnel are trained to identify suspicious activity, enforce site access policies, and respond quickly to security incidents without interfering with construction workflows. We coordinate closely with project managers and contractors to ensure security measures align with site safety protocols and schedules.
</p><p>
By proactively addressing security risks, Zerofour helps clients protect assets, minimize losses, and maintain project timelines. Our construction site security services provide both deterrence and accountability, supported by clear documentation and consistent supervision. Clients benefit from reliable coverage and security solutions that scale as project needs evolve.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Deployment of Resources">
          Trained teams and state-of-the-art technology are deployed strategically for maximum security impact.
        </ListItem>
        <ListItem title="Real-Time Monitoring">
        Continuous surveillance and data analysis enable proactive responses to evolving threats.
        </ListItem>
        <ListItem title="Client Communication">
          Regular updates keep you informed and assured that your security remains fully optimized.
        </ListItem>
      </List>
    </Section>
  )
}

function Retail() {
  return (
    <Section title="Retail & Commercial Security" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides professional security services for retail and commercial properties, supporting safe environments for customers, employees, and tenants. Our approach focuses on loss prevention, incident management, and visible deterrence while maintaining a professional presence aligned with brand standards and business operations. Each assignment begins with an assessment of site layout, operating hours, foot traffic patterns, and identified risks.
        </p><p>
Our security personnel are trained to manage a wide range of situations, from access control and patrol operations to customer assistance and incident response. Zerofour emphasizes communication, situational awareness, and measured response, ensuring personnel can de-escalate issues when possible and act decisively when necessary. Services are delivered in a manner that supports daily operations rather than disrupting them.
</p><p>
Zerofour’s retail and commercial security solutions are scalable and adaptable, supporting single locations or multi-site portfolios. We work closely with property owners, managers, and corporate stakeholders to ensure consistent standards and reporting across all locations. The result is a dependable security presence that protects assets, supports business continuity, and reinforces a safe, professional environment.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Assessment</TagListItem>
        <TagListItem>Analysis</TagListItem>
        <TagListItem>Insight</TagListItem>
        <TagListItem>Consultation</TagListItem>
        <TagListItem>Intelligence</TagListItem>
        <TagListItem>Understanding</TagListItem>
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
        title="Security is only as strong as the people behind it"
      >
        <p>
         At Zerofour, we believe effective security starts with people, preparation, and accountability. Every client and every location has unique requirements, risks, and operational realities. Our approach is built on understanding those differences and delivering security solutions shaped by experience, discipline, and sound judgment, not templates or shortcuts.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Experience">
            Access to current and former law enforcement and military professionals with real-world backgrounds in protective operations, threat assessment, and incident response.
          </GridListItem>
          <GridListItem title="Professionalism">
           Thoroughly vetted, trained, and disciplined security personnel who operate with discretion, consistency, and accountability.
          </GridListItem>
          <GridListItem title="Customization">
          Proactive risk assessment and tailored security planning designed around each client’s environment, objectives, and risk profile.
          </GridListItem>
          <GridListItem title="Standards">
          Clearly defined operational protocols supported by experienced supervision and transparent reporting.
          </GridListItem>
          <GridListItem title="Responsiveness">
         Adaptive service delivery that allows our teams to adjust quickly to changing conditions, emerging threats, or evolving client needs.
          </GridListItem>
          <GridListItem title="Trust">
          A reputation built on reliability, discretion, and long-term partnerships across diverse operating environments.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Security',
  description:
    'Professional Security. Absolute Discretion.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Security" title="Professional Security. Absolute Discretion.">
        <p>
          Zerofour delivers intelligence-led security services for organizations and individuals operating in complex, high-risk, and sensitive environments. Our approach is grounded in operational discipline, discretion, and real-world experience.

          Our teams include current and former law enforcement professionals and former military personnel with extensive backgrounds in protective operations, access control, and threat mitigation. Every engagement is designed to anticipate risk, deter threats, and safeguard people, property, and critical assets—without unnecessary visibility or disruption.

          From executive protection to residential, commercial, and site security, Zerofour provides reliable, professional coverage tailored to each client’s operating environment and risk profile.
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
