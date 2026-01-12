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
import imageReputation from '@/images/reputation.jpg'

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
    <Section title="Risk Assessments & Advisory" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides risk assessment and advisory services that help clients make informed decisions in complex operating environments. We evaluate threats, vulnerabilities, and operational constraints across people, facilities, travel, and supply chains, translating risk into clear, actionable guidance. Each engagement is scoped to the client’s objectives and footprint, allowing leadership teams to understand exposure, prioritize mitigation, and move forward with confidence.
        </p>
        <p>
          Our approach blends field experience with structured methodology. We gather relevant intelligence, assess local conditions, and develop practical recommendations that reflect real-world constraints, not theoretical models. Deliverables may include written risk profiles, country or city assessments, stakeholder and adversary considerations, and decision-support briefings for leadership. Zerofour can also advise on protective posture, movement planning, vendor risk, and operating protocols aligned to your business requirements.
      </p><p>
          Every organization has different tolerances, priorities, and reputational considerations. Zerofour tailors each assessment to the decisions you need to make, whether launching operations, expanding into new regions, resuming activity after disruption, or preparing for a critical event. Clients benefit from clear communication, defensible recommendations, and support that improves readiness while enabling business continuity.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
    <TagListItem>Risk Assessment</TagListItem>
<TagListItem>Threat Analysis</TagListItem>
<TagListItem>Decision Support</TagListItem>
<TagListItem>Protective Posture</TagListItem>
<TagListItem>Operating Guidance</TagListItem>
<TagListItem>Executive Briefings</TagListItem>
      </TagList>
    </Section>
  )
}

function Residential() {
  return (
    <Section title="Crisis Preparedness & Planning" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
         <p>
       Zerofour helps organizations prepare for crisis events that can jeopardize personnel safety, operations, and reputation. We work with leadership teams to identify likely scenarios, define response priorities, and establish clear roles, escalation paths, and communications protocols. The goal is simple: improve readiness before an incident occurs, reduce uncertainty during response, and support faster stabilization afterward.
        </p>
        <p>
Planning support may include crisis management frameworks, incident response playbooks, emergency communications planning, and continuity-focused procedures tailored to your operating environment. Zerofour can assist with readiness assessments, tabletop exercises, and leadership briefings designed to pressure-test plans and strengthen coordination across internal teams and external stakeholders. We emphasize practicality, ensuring plans are usable under stress and aligned with how your organization actually operates.
</p>
        <p>
Every client and operating context has unique requirements, constraints, and risk drivers. Zerofour builds crisis preparedness programs that fit your footprint, culture, and decision-making structure, whether you operate domestically, internationally, or in emerging markets. Clients benefit from clearer alignment, stronger response capability, and a structured foundation that supports decisive action when it matters most.
        </p>
      </div>

    <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
   <TagListItem>Crisis Planning</TagListItem>
<TagListItem>Response Playbooks</TagListItem>
<TagListItem>Tabletop Exercises</TagListItem>
<TagListItem>Comms Protocols</TagListItem>
<TagListItem>Continuity Support</TagListItem>
<TagListItem>Readiness Reviews</TagListItem>
      </TagList>
    </Section>
  )
}

function Construction() {
  return (
    <Section title="Incident Response & Stabilization" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
       When an incident occurs, Zerofour supports clients with rapid, coordinated crisis response focused on protecting personnel, stabilizing operations, and reducing downstream impact. We assist decision-makers in assessing developing conditions, establishing response priorities, and coordinating actions across teams and stakeholders. Our approach emphasizes clarity, speed, and disciplined execution during high-pressure events.
        </p><p>
Response support may include incident coordination, safety and movement guidance, situational reporting, stakeholder communications alignment, and liaison with local partners or authorities when appropriate. Zerofour can help implement escalation protocols, support leadership decision-making, and provide actionable updates as conditions change. We focus on maintaining operational continuity where possible while prioritizing safety, compliance, and reputational considerations.
</p><p>
Every crisis unfolds differently and requires adaptable response. Zerofour operates as a force multiplier for internal teams, providing experienced support that helps organizations move from immediate response to sustained stabilization. Clients benefit from structured coordination, reliable reporting, and guidance that supports a controlled, credible response under uncertainty.
        </p>
      </div>

     <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
   <TagListItem>Rapid Response</TagListItem>
<TagListItem>Incident Coordination</TagListItem>
<TagListItem>Situational Reporting</TagListItem>
<TagListItem>Stakeholder Alignment</TagListItem>
<TagListItem>Movement Guidance</TagListItem>
<TagListItem>Stabilization</TagListItem>
      </TagList>
    </Section>
  )
}

function Retail() {
  return (
    <Section title="Reputation & Stakeholder Support" image={{ src: imageReputation }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour supports organizations in managing reputational and stakeholder risk before, during, and after crisis events. We help clients anticipate how incidents may be perceived, identify key stakeholders, and align internal communications to ensure response actions remain consistent, credible, and defensible. Our role is to reduce confusion, maintain trust, and support disciplined decision-making when scrutiny is highest.
        </p><p>
Support may include stakeholder mapping, communications alignment guidance, escalation and notification planning, and documentation practices that improve clarity and accountability. Zerofour can help leadership teams maintain message discipline, avoid unnecessary exposure, and coordinate with legal, compliance, and operational stakeholders to ensure response decisions reflect both safety priorities and reputational realities.
</p><p>
Reputational impact is often shaped as much by response quality as by the incident itself. Zerofour helps clients build a structured approach that reinforces trust with employees, partners, regulators, and communities. Clients benefit from stronger coordination, clearer documentation, and support that helps protect the organization’s credibility while returning to normal operations.
        </p>
      </div>

     <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
   <TagListItem>Stakeholder Mapping</TagListItem>
<TagListItem>Comms Alignment</TagListItem>
<TagListItem>Escalation Paths</TagListItem>
<TagListItem>Documentation</TagListItem>
<TagListItem>Reputation Risk</TagListItem>
<TagListItem>Post-Incident</TagListItem>
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
        title="Clarity matters most when decisions carry consequences"
      >
        <p>
         At Zerofour, we help clients reduce uncertainty, prepare for disruption, and respond with discipline when events escalate. Every client and every operating environment has unique requirements, constraints, and reputational considerations. Our approach is built on practical risk insight, structured planning, and experienced support that strengthens decision-making before, during, and after crisis events.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Insight">
            Intelligence-informed assessments that translate complex risk into clear, actionable guidance for leadership.
          </GridListItem>
          <GridListItem title="Preparation">
           Practical planning and readiness support designed to work under pressure, not just on paper.
          </GridListItem>
          <GridListItem title="Coordination">
          Structured incident support that strengthens alignment across internal teams and external stakeholders.
          </GridListItem>
          <GridListItem title="Discipline">
          Clear protocols, documentation practices, and decision support that reinforce credibility and accountability.
          </GridListItem>
          <GridListItem title="Responsiveness">
         Adaptive engagement that keeps pace with changing conditions and evolving threat realities.
          </GridListItem>
          <GridListItem title="Trust">
          A reputation built on discretion, professionalism, and reliable support in sensitive environments.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Risk Management & Crisis Response',
  description:
    'Risk Management & Crisis Response - Preparedness and decisive support',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Risk Management & Crisis Response" title="Preparedness and decisive support">
        <p>
          Zerofour provides risk management and advisory services to facilitate our clients’ business operations and support their decision-making processes. We help organizations evaluate complex risk, strengthen readiness, and operate with confidence in dynamic environments.
        </p><p><p>&nbsp;</p>
          We assist clients in preparing for and responding to crisis events that could jeopardize the safety of personnel, critical assets, and reputation. Our approach combines practical planning, disciplined coordination, and clear communication under pressure.
</p><p><p>&nbsp;</p>
          From risk assessments and crisis planning to incident response support and stakeholder alignment, Zerofour helps clients reduce uncertainty, protect continuity, and respond with credibility when it matters most.
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
