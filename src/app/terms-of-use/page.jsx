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
  title: 'Terms of Use',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Terms of Use" title="">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>By entering the Zerofour Inc. (collectively &#34;Zerofour,&#34; or &#34;We,&#34; &#34;Us,&#34; or &#34;Our&#34;) website (the &#34;Site&#34;), you accept and agree
to follow the terms and conditions described in this User Agreement. This User Agreement is a binding agreement between
you and Zerofour, and governs your access and use of the Site, which includes any information, data, tools, products,
services, and other content (together, &#34;Content&#34;) available on or through the Site. You may contact Zerofour at the address
provided below with questions about the terms and conditions of this User Agreement.</p>

            <p>PLEASE READ THIS USER AGREEMENT (&#34;USER AGREEMENT&#34;) CAREFULLY BEFORE ENTERING THE SITE.
EACH TIME YOU ENTER THE SITE, YOUR USE INDICATES YOUR FULL ACCEPTANCE OF AND AGREEMENT
TO ABIDE BY THIS USER AGREEMENT IN ITS THEN CURRENT FORM. IF YOU DO NOT ACCEPT THE TERMS
AND CONDITIONS STATED IN THIS USER AGREEMENT, PLEASE EXIT THE SITE.</p>

  <p>Limited License to Use the Site<br />
The Site is owned by Zerofour. The Site is protected by one or more copyrights, patents, database rights, trademarks,
servicemarks, and/or other intellectual property and proprietary rights that are owned by Zerofour, its affiliates and/or third
parties. Zerofour grants you a limited right to use the Site only for your own private, non-commercial informational
purposes only, and to print pages from the Site only in connection with that use. You may not modify, distribute, transmit,
perform, reproduce, publish, license, create derivative works from, transfer or sell any text, graphics, logos and other
source-identifying symbols, designs, icons, images, or other information, software, or code obtained from the Site. You are
prohibited from removing any copyright, trademark or other proprietary notice or legend contained on (or printed from) the
Site or on any printed pages. In addition, you are prohibited from decomposing, decompiling, reverse engineering,
disassembling, or otherwise deconstructing all or any portion of the Site.</p>

  <p>Any data that you transmit to the Site (including without limitation personally identifiable information) becomes the
property of Zerofour and may be used by Zerofour for any lawful purpose without restriction, subject to the Privacy Policy.</p>

    <p>All materials at the Site are meant to be reviewed in their entirety, including any footnotes, legal disclaimers, restrictions or
disclosures, and any copyright or proprietary notices. Any disclaimers, restrictions, or disclosures apply to any partial
document or material in the same manner as they do the whole, and will be deemed incorporated in the portion of any
material or document that you consult or download.</p>

          <p>Your continuing right to use the Site is subject to your agreement to abide by this User Agreement in its entirety, as well as
any other rules, procedures, policies, terms, or conditions that govern all or any portion of the Site. At any time and for any
reason we may revoke your right to use all or any portion of the Site.</p>

      <p>No Reliance<br />
All content provided on this Site is for informational purposes only. No statements contained on this Site should be
construed as a guarantee or assurance of future performance or future results. There are various risks you assume when
reviewing the content on this Site. Dated content speaks only as of the date indicated. We may modify the content on this
Site at any time and without notice to you. We make reasonable efforts to provide accurate content, but at times we may not
promptly update or correct the Site even if we are aware that it is inaccurate, outdated or otherwise inappropriate. In
addition, we do not endorse the opinions of, or warrant the accuracy of facts or other content contributed by any third party.
You agree that we are not liable for any action you take or decision you make in reliance on any content on the Site.</p>

        <p>Nothing on the Site is intended to be, and you should not consider anything on the Site to be legal advice. You are
encouraged to discuss information that you learn from the Site with your financial, legal or tax advisors, and others with
whom you share legal decisions.</p>

        <p>Your Representations and Warranties<br />
You represent and warrant that you have full authority and all rights necessary to enter into and fully perform all of your
obligations pursuant to this User Agreement. You represent and warrant that you have not and you will not enter into any
agreement or perform any act which might contravene the purposes and/or effects of this User Agreement. You represent
and warrant that you will not delete any content from the Site.</p>

<p>Passwords<br />
Certain portions of this Site are password protected and the content of such areas are subject to the confidentiality
provisions of the respective Zerofour documents. By entering those portions of the Site you are agreeing to be bound by the
confidentiality provisions of the respective documents. If you are provided a password by Zerofour, you must keep your
password confidential. You may not disclose your password to any third party without obtaining the express approval of
Zerofour. You accept full responsibility for any use of your password. You agree to notify Zerofour immediately of any
actual or suspected loss, theft, or unauthorized use of your password.</p>

  <p>Without limiting the generality of any other disclaimers in this User Agreement, Zerofour is not responsible for any loss to
you that arises from such use or action or from your failure to comply with these provisions regarding maintaining the
security and confidentiality of your password.</p>

    <p>Third Party Links<br />
Zerofour is not responsible for information on any third party website that is referred in, or accessible or connected by
hyperlink to, the Site. If you access any third party website through the Site or otherwise, you do so at your own risk.
Hyperlinks to or from the Site do not constitute third party endorsement of, sponsorship by or affiliation with us.</p>

      <p>No Warranty<br />
Zerofour disclaims all warranties with respect to the site that the law allows it to disclaim. The Site is provided &#34;as is&#34; and
&#34;as available.&#34; We disclaim all representations and warranties, express or implied, of any kind with respect to the Site
including warranties of merchantability, fitness for a particular purpose and non-infringement of intellectual property and
proprietary rights. Without limiting our general disclaimer, we do not warrant the availability, accuracy, completeness,
timeliness, functionality, reliability, sequencing, or speed of delivery of the Site or any part of the content. Zerofour&#39;s
liability with respect to the site is limited to the maximum extent permitted by law.</p>

        <p>Limitation of Liability<br />
In no event shall Zerofour, its affiliates, or their officers, directors, principals, agents, and employees be liable for any
claims, liabilities, losses, costs, or damages, including indirect, punitive, incidental, special, or consequential damages,
arising out of or in any way connected with the use of or inability to use the Site or with any delay or technical problems in
using the Site, or any information and materials obtained through the Site, or otherwise arising out of the use of the Site; in
any case whether based on theories arising in contract, tort, strict liability or otherwise. Such limitations apply even if
Zerofour, its affiliates, or any of their officers, directors, principals, agents, or employees have been advised of the
possibility of damages. Some states limit the applicability of disclaimers or limitations of liability, in which case such
limitations shall apply only to the extent legally enforceable in the applicable jurisdiction.</p>

          <p>Breach and Indemnification<br />
You will be responsible for any liability to Zerofour that arises out of your breach of this User Agreement or your use of the
Site. You agree to indemnify, defend and hold harmless Zerofour and its affiliates, agents, employees and third party
sources from and against any and all suits, losses, claims, demands, liabilities, damages, costs and expenses (including
reasonable attorneys&#39; fees) that arise from or relate to your use of the Site, your breach of this User Agreement or any
representation, warranty, or covenant made by you in this User Agreement, your violation of any applicable law, statute,
ordinance, regulation or of any third party&#39;s rights, or claims asserted by third parties which, if proven, would place you in
breach of representations, warranties, covenants, or other provisions contained in this User Agreement.</p>

            <p>Updates to the Site and Modifications to the User Agreement
You acknowledge that Zerofour may update the Site and its contents, and may modify the terms of this User Agreement at
any time and without notice to you. Modifications will be effective immediately upon posting unless we indicate otherwise.
You agree to review periodically the terms of this User Agreement. By entering the Site you agree to and fully accept this
User Agreement in its then current form each time you enter the Site.</p>

<p>General<br />
This User Agreement shall be governed by and construed under the laws of the state of California, without regard to its
choice of law rules. Any legal action brought hereunder shall be brought exclusively in the courts in the County of Los
Angeles, California, and it is agreed that such courts shall have jurisdiction over the parties to this agreement and any
dispute arising hereunder. Zerofour may monitor and record activity on the Site and respond as we deem appropriate. If any
provision of this User Agreement is held to be invalid or unenforceable in any jurisdiction, such provision shall be deemed
modified to the minimum extent necessary so that such provision shall no longer be held to be invalid or unenforceable, and
this User Agreement shall be interpreted so as to achieve the intent expressed herein to the greatest extent possible in the
jurisdiction in question. Any such modification, invalidity or unenforceability shall be strictly limited both to such provision
and to such jurisdiction.</p>

 <p> Services are offered by Zerofour in accordance with applicable federal and state laws.
To give notice, or if you have any questions or comments about our terms and conditions, please contact us in writing.</p>
          
          
<br />
Zerofour Inc.<br />
515 S. Flower Street 18th Floor<br />
Los Angeles, CA 90071
        </div>
      </PageIntro>
    </>
  )
}
