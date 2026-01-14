'use client'

import { useId, useRef, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'

const APOLLO_APP_ID = '6965ed14612741002111fb24'
const APOLLO_SCHEDULING_LINK = '0bx-5lq-iph'
const FORM_ID = 'service-inquiry-form'

/* -------------------- Inputs -------------------- */

function TextInput({ label, type = 'text', ...props }) {
  const id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        type={type}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200
                   peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950
                   peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75
                   peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none
                   checked:border-[0.5rem] checked:border-neutral-950
                   focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

/* -------------------- Contact Form -------------------- */

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success
  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (status === 'submitting') return

    if (!window.ApolloMeetings?.submit) {
      console.error('[Apollo] ApolloMeetings.submit not available')
      return
    }

    setStatus('submitting')

    try {
      window.ApolloMeetings.submit({
        formId: FORM_ID,
      })
    } catch (err) {
      console.error('[Apollo] submit failed', err)
    }

    // UI flow (decoupled from Apollo response)
    setTimeout(() => {
      setStatus('success')
      formRef.current?.reset()

      setTimeout(() => {
        setStatus('idle')
      }, 2000)
    }, 3000)
  }

  return (
    <FadeIn className="lg:order-last">
      <form id={FORM_ID} ref={formRef} onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Service Inquiries
        </h2>

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput label="Email" type="email" name="email" autoComplete="email" />
          <TextInput label="Company" name="company" autoComplete="organization" />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />

          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Service Needed</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Security" name="service" value="Security" />
                <RadioInput
                  label="Risk Mgmt & Crisis Response"
                  name="service"
                  value="Risk Mgmt & Crisis Response"
                />
                <RadioInput
                  label="Logistics & Support Services"
                  name="service"
                  value="Logistics & Support Services"
                />
                <RadioInput label="Training" name="service" value="Training" />
                <RadioInput label="Technology" name="service" value="Technology" />
                <RadioInput label="Humanitarian" name="service" value="Humanitarian" />
              </div>
            </fieldset>
          </div>
        </div>

        <div className="mt-10">
          <Button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting'
              ? 'Submitting…'
              : status === 'success'
              ? 'Submitted ✓'
              : 'Get Started'}
          </Button>

          {status === 'success' && (
            <p className="mt-3 text-sm text-neutral-600">
              Submission successful. We&#39;ll follow up shortly.
            </p>
          )}
        </div>
      </form>
    </FadeIn>
  )
}

/* -------------------- Contact Details -------------------- */

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our Offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We respond to our clients&#39; needs and have
        a number of ways to connect with us across the globe.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Inquiries', 'inquiries@zerofour.org'],
            ['Careers', 'careers@zerofour.org'],
            ['Legal', 'legal@zerofour.org'],
            ['Press', 'press@zerofour.org'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </FadeIn>
  )
}

/* -------------------- Page -------------------- */

export default function ContactClient() {
  return (
    <>
      {/* Apollo Meetings API */}
      <Script
        id="apollo-meetings-widget"
        src="https://assets.apollo.io/js/meetings/meetings-widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.ApolloMeetings?.initWidget({
            appId: APOLLO_APP_ID,
            schedulingLink: APOLLO_SCHEDULING_LINK,
          })
        }}
      />

      <PageIntro eyebrow="Contact Us" title="Informed engagement starts here">
        <p>
          Connect with our team to discuss your objectives, assess risk, and determine
          how Zerofour can support your operational requirements with discretion and
          professionalism.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
