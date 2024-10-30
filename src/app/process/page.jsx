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

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We initiate a thorough understanding of your specific needs, risks, and objectives. This stage begins with an in-depth consultation, where we listen closely to understand your concerns and gather essential information. By fostering {' '}<strong className="font-semibold text-neutral-950">open communication</strong>{' '}, we ensure that no aspect of your security needs is overlooked, and we begin to build a foundation of trust and clarity that guides our entire process.
        </p>
        <p>
          Our team of experts then conducts a detailed assessment, analyzing both current and potential risks that could impact your safety, assets, or operations. Utilizing sophisticated intelligence tools, data analysis, and insights from our global network, we identify vulnerabilities and opportunities, allowing us to gain a nuanced {' '}<strong className="font-semibold text-neutral-950">perspective</strong>{' '} of your environment and the unique challenges you face. This deep dive enables us to design a strategy specifically aligned with your objectives.
        </p>
        <p>
          With a complete picture of your needs, our team {' '}<strong className="font-semibold text-neutral-950">collaborates</strong>{' '} to refine the scope of your security strategy. By the end of the Discover phase, we present you with a comprehensive overview of our findings and preliminary recommendations. This proactive approach enables you to feel confident that your security requirements are fully understood and that our solutions will be precisely tailored to address them.
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

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our team formulates a customized strategy based on the detailed insights and data gathered during the Discover phase. Every element of your security solution is carefully designed to address the specific risks, assets, and operational needs identified in the initial assessment. We prioritize a balanced approach, creating a plan that is robust yet adaptable, ensuring you are equipped to handle evolving challenges with confidence.
        </p>
        <p>
          The planning process involves collaboration among our in-house experts, who bring specialized knowledge in fields such as cybersecurity, physical security, and risk mitigation. Together, we develop a multi-layered approach that combines cutting-edge technology, intelligence analysis, and industry best practices to form a cohesive and efficient security framework. This stage includes a comprehensive review to confirm that every potential scenario and contingency is accounted for.
        </p>
        <p>
          Once the plan is established, we present it to you in detail, outlining each component of the strategy and how it aligns with your objectives. Your feedback is crucial at this stage, and we work closely with you to refine any elements, ensuring that the final plan is fully aligned with your expectations. This collaborative approach provides clarity, allowing you to feel assured that your security strategy is well-conceived, actionable, and tailored precisely to your needs.
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

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
         {' '}<strong className="font-semibold text-neutral-950">
       This is where our strategy comes to life. With careful precision, we implement each element of the plan developed in the previous stages, ensuring a {' '}<strong className="font-semibold text-neutral-950">seamless integration</strong>{' '} of security measures across all identified areas. Our experienced teams work in tandem to monitor, respond, and adapt, providing a dynamic, layered security presence that aligns with your ongoing operations. By deploying resources strategically, we maximize effectiveness and maintain a low profile, safeguarding your environment without disruption.
         </p>
        <p>
          During this phase, we rely on real-time data and {' '}<strong className="font-semibold text-neutral-950">continuous monitoring</strong>{' '} to assess the effectiveness of our security measures. Our advanced intelligence systems allow us to stay one step ahead, responding swiftly to any developing threats or unexpected changes. Should adjustments be necessary, our team adapts rapidly, recalibrating our approach to ensure that each layer of protection remains effective and that no gaps emerge in your security framework.
        </p>
        <p>
          Throughout the execution process, communication with our clients remains a priority. We keep you informed of our actions, findings, and any updates to your security posture. By maintaining this {' '}<strong className="font-semibold text-neutral-950">open line of communication</strong>{' }'}, we ensure that you remain confident in the protection you receive, and we’re always ready to address any concerns that may arise. This collaborative, proactive approach enables us to deliver security solutions that are as resilient as they are responsive.
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
        eyebrow="Our core principles"
        title="Balancing reliability and innovation"
      >
        <p>
         At our agency, we commit to the highest standards of professionalism, confidentiality, and integrity. Each member of our team is dedicated to safeguarding and empowering our clients worldwide through innovative, discreet, and reliable security solutions.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Integrity">
            We operate with unwavering honesty and ethics, ensuring every decision prioritizes transparency and the highest moral standards.
          </GridListItem>
          <GridListItem title="Discretion">
            We uphold absolute confidentiality, handling all information with the utmost sensitivity to protect our clients’ interests.
          </GridListItem>
          <GridListItem title="Reliability">
           Our team is steadfastly dependable, providing consistent, trusted solutions that our clients can count on in every situation.
          </GridListItem>
          <GridListItem title="Vigilance">
           We maintain a proactive stance, constantly monitoring and assessing risks to anticipate challenges and provide preemptive solutions.
          </GridListItem>
          <GridListItem title="Innovation">
           We embrace cutting-edge technology and creative problem-solving, staying ahead of emerging threats to safeguard our clients effectively.
          </GridListItem>
          <GridListItem title="Commitment">
            TWe are deeply devoted to every mission, applying unwavering dedication to achieving the best outcomes for our clients’ security and peace of mind.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          Our approach is grounded in precision, confidentiality, and tailored strategies to ensure each client’s unique security needs are met. By leveraging cutting-edge intelligence and proactive security measures, we deliver robust solutions that safeguard assets, people, and information worldwide.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
