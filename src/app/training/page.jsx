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
    <Section title="Security & Risk Training" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour delivers security and risk-focused training programs designed to prepare personnel for operations in complex and high-risk environments. Our training emphasizes practical decision-making, situational awareness, and disciplined execution under pressure. Programs are built to strengthen individual capability while reinforcing organizational standards and operating procedures.
        </p>
        <p>
          Training topics may include personal security awareness, travel risk management, hostile environment awareness, and protective mindset development. Zerofour instructors draw on real-world experience from security management, law enforcement, military operations, and diplomatic environments, ensuring instruction is grounded in operational reality rather than theory.
        </p>
        <p>
          Each program is tailored to the client’s operating context, threat profile, and mission objectives. Whether preparing teams for deployment, ongoing operations, or elevated-risk travel, clients benefit from training that improves readiness, confidence, and consistency across personnel.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Risk Awareness</TagListItem>
        <TagListItem>Personal Security</TagListItem>
        <TagListItem>Travel Safety</TagListItem>
        <TagListItem>Threat Recognition</TagListItem>
        <TagListItem>Decision-Making</TagListItem>
        <TagListItem>Operational Readiness</TagListItem>
      </TagList>
    </Section>
  )
}

function Residential() {
  return (
    <Section title="Crisis & Incident Training" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour provides crisis and incident response training designed to improve organizational preparedness and performance during critical events. We help teams understand roles, escalation paths, and response priorities so actions remain coordinated and effective under stress.
        </p>
        <p>
          Training may include crisis management fundamentals, incident command concepts, emergency communications, and coordination across internal teams and external partners. Zerofour emphasizes realism, clarity, and repetition to ensure lessons translate into confident action when incidents occur.
        </p>
        <p>
          Programs are customized to reflect the client’s structure, operating environment, and risk exposure. Clients benefit from clearer alignment, faster response, and improved confidence in their ability to manage disruptive events.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Crisis Response</TagListItem>
        <TagListItem>Incident Command</TagListItem>
        <TagListItem>Emergency Comms</TagListItem>
        <TagListItem>Escalation</TagListItem>
        <TagListItem>Role Clarity</TagListItem>
        <TagListItem>Response Readiness</TagListItem>
      </TagList>
    </Section>
  )
}

function Construction() {
  return (
    <Section title="Capacity Development & Instruction" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour delivers capacity development programs that strengthen institutional capability across security, risk, and operational functions. We work with government, military, law enforcement, and commercial organizations to build sustainable skills and processes.
        </p>
        <p>
          Instruction may include leadership development, operational planning, coordination procedures, and program-specific skills aligned to mission requirements. Zerofour instructors bring experience from post-conflict and high-risk environments,, ensuring training reflects the realities participants will face.
        </p>
        <p>
          Our capacity-building approach focuses on long-term impact rather than one-time instruction. Clients benefit from improved internal capability, standardized practices, and training that supports durable operational improvement.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Capacity Building</TagListItem>
        <TagListItem>Leadership Training</TagListItem>
        <TagListItem>Operational Planning</TagListItem>
        <TagListItem>Instructional Support</TagListItem>
        <TagListItem>Skills Development</TagListItem>
        <TagListItem>Program Training</TagListItem>
      </TagList>
    </Section>
  )
}

function Retail() {
  return (
    <Section title="Exercises & Scenario-Based Training" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Zerofour designs and delivers scenario-based exercises that allow teams to practice decision-making in realistic, high-pressure situations. These exercises help identify gaps, reinforce coordination, and improve confidence across leadership and operational personnel.
        </p>
        <p>
          Exercises may include tabletop simulations, role-based scenarios, and facilitated after-action reviews. Zerofour emphasizes structured evaluation and constructive feedback to ensure lessons learned translate into measurable improvement.
        </p>
        <p>
          By testing plans and people before real-world incidents occur, clients gain clarity on strengths, vulnerabilities, and readiness levels. Scenario-based training strengthens preparedness while reinforcing accountability and coordination.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Services Available
      </h3>
      <TagList className="mt-4">
        <TagListItem>Tabletop Exercises</TagListItem>
        <TagListItem>Scenario Training</TagListItem>
        <TagListItem>Simulations</TagListItem>
        <TagListItem>After-Action</TagListItem>
        <TagListItem>Readiness Testing</TagListItem>
        <TagListItem>Performance Review</TagListItem>
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
        title="Training is most effective when it reflects reality"
      >
        <p>
          Zerofour training programs are built on experience, realism, and accountability. Every organization, mission, and operating environment is different. Our approach ensures training is relevant, practical, and aligned with how teams actually operate under pressure.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Experience">
            Instruction delivered by professionals with real-world operational backgrounds.
          </GridListItem>
          <GridListItem title="Relevance">
            Training tailored to client missions, environments, and risk profiles.
          </GridListItem>
          <GridListItem title="Practicality">
            Focus on skills and decisions that translate directly to operations.
          </GridListItem>
          <GridListItem title="Consistency">
            Reinforcement of standards, procedures, and disciplined execution.
          </GridListItem>
          <GridListItem title="Engagement">
            Interactive instruction that improves retention and confidence.
          </GridListItem>
          <GridListItem title="Trust">
            A reputation built on credible instruction and dependable delivery.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Training',
  description:
    'Training - Practical preparation for complex environments',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Training" title="Practical preparation for complex environments">
        <p>
          Zerofour offers a broad spectrum of training and capacity development services to government, military, law enforcement, and commercial customers worldwide. Our programs are designed to strengthen readiness, decision-making, and operational performance.
        </p><p><p>&nbsp;</p>
          Our instructors and consultants bring experience from security management, diplomacy, and operations in post-conflict and high-risk environments, ensuring training reflects real-world conditions.
</p><p><p>&nbsp;</p>
          From individual skill development to organizational readiness and exercises, Zerofour delivers training that prepares teams to operate with confidence and discipline.
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
