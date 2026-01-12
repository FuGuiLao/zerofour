'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import Script from 'next/script'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '@/components/Button'
import clsx from 'clsx'

const APOLLO_APP_ID = '69649cd57062f40011499d39'
const APOLLO_SCHEDULING_LINK = 'uoj-9sa-bd1'
const APOLLO_SCRIPT_SRC = 'https://assets.apollo.io/js/meetings/meetings-widget.js'

export default function ApolloSlideover({ open, onClose }) {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const initializedRef = useRef(false)
  const formId = useId().replace(/:/g, '')

  // reset when opening
  useEffect(() => {
    if (!open) return
    setSubmitting(false)
    setError('')
  }, [open])

  const initApolloIfNeeded = () => {
    if (initializedRef.current) return
    if (!window.ApolloMeetings?.initWidget) return

    window.ApolloMeetings.initWidget({
      appId: APOLLO_APP_ID,
      schedulingLink: APOLLO_SCHEDULING_LINK,
    })

    initializedRef.current = true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!scriptLoaded) {
      setError('Scheduler is still loading. Please try again in a moment.')
      return
    }

    initApolloIfNeeded()

    if (!window.ApolloMeetings?.submit) {
      setError('Apollo scheduler is not ready (submit missing).')
      return
    }

    setSubmitting(true)

    try {
      // ✅ This is the correct continuation step for Apollo’s widget flow
      window.ApolloMeetings.submit({ formId })
    } catch (err) {
      console.error(err)
      setError('Could not launch the scheduler. Please try again.')
      setSubmitting(false)
      return
    }

    // ✅ Keep the slideover open so the user never sees a blank screen.
    // Optional: auto-close ONLY if Apollo actually opens a modal on top.
    // (If it doesn't, the user can still see the form and try again.)
    const t0 = Date.now()
    const poll = setInterval(() => {
      // Heuristic: Apollo widget usually injects an overlay/iframe into the DOM.
      // We can’t rely on a documented selector, so we look for newly added iframes from apollo.io.
      const apolloIframe = Array.from(document.querySelectorAll('iframe')).find((f) =>
        (f.src || '').includes('apollo.io'),
      )

      if (apolloIframe) {
        clearInterval(poll)
        setSubmitting(false)
        // If you WANT it to close once Apollo modal is visible, uncomment next line:
        // onClose?.()
        return
      }

      if (Date.now() - t0 > 4000) {
        clearInterval(poll)
        setSubmitting(false)
        // Keep open; show hint instead of blanking out
        setError(
          'Scheduler did not open automatically. Please check pop-up blockers, then click Continue again.',
        )
      }
    }, 150)
  }

  return (
    <>
      <Script
        id="apollo-meetings-widget"
        src={APOLLO_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-950/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-out duration-200"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in duration-150"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-3xl">
                    <div className="flex h-full flex-col bg-neutral-950 shadow-xl">
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
                        <Dialog.Title className="text-base font-semibold text-white">
                          Intake form details
                        </Dialog.Title>

                        <button
                          type="button"
                          onClick={onClose}
                          className="rounded-md px-2 py-1 text-sm text-neutral-300 hover:text-white"
                        >
                          Close
                        </button>
                      </div>

                      {/* Body */}
                      <div className="flex-1 overflow-auto px-6 py-6">
                        <form id={formId} onSubmit={handleSubmit} className="space-y-8">
                          <Field label="Email" required>
                            <input
                              type="email"
                              name="emailaddress"
                              required
                              className={inputClassName}
                              autoComplete="email"
                            />
                          </Field>

                          <Field label="Full name" required>
                            <input
                              type="text"
                              name="fullname"
                              required
                              className={inputClassName}
                              autoComplete="name"
                            />
                          </Field>

                          <fieldset className="space-y-3">
                            <legend className={legendClassName}>Meeting Type</legend>
                            <RadioRow name="meeting_type" value="Microsoft Teams" label="Microsoft Teams" />
                            <RadioRow name="meeting_type" value="Phone Call" label="Phone Call" />
                          </fieldset>

                          <fieldset className="space-y-3">
                            <legend className={legendClassName}>Client Type</legend>
                            <RadioRow name="client_type" value="Government" label="Government" />
                            <RadioRow name="client_type" value="Corporation" label="Corporation" />
                            <RadioRow name="client_type" value="Law Firm" label="Law Firm" />
                            <RadioRow name="client_type" value="Insurance Company" label="Insurance Company" />
                            <RadioRow name="client_type" value="Individual" label="Individual" />
                          </fieldset>

                          <Field label="Please share anything that will help prepare for our meeting. (Optional)">
                            <textarea name="prep_notes" rows={5} className={textareaClassName} />
                          </Field>

                          <Field label="Send text messages to (Optional)">
                            <input type="tel" name="sms_number" className={inputClassName} autoComplete="tel" />
                          </Field>

                          <div className="pt-2">
                            <Button type="submit" className="w-full" disabled={!scriptLoaded || submitting}>
                              {submitting ? 'Launching scheduler…' : 'Continue to scheduling'}
                            </Button>

                            {!scriptLoaded && (
                              <p className="mt-3 text-sm text-neutral-400">Loading scheduler…</p>
                            )}

                            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
                          </div>
                        </form>

                        <p className="mt-6 text-xs text-neutral-500">
                          By continuing, you&#39;ll proceed to Apollo scheduling.
                        </p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

function Field({ label, required = false, children }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-neutral-200">
          {label} {required ? <span className="text-neutral-400">*</span> : null}
        </label>
      </div>
      {children}
    </div>
  )
}

function RadioRow({ name, value, label }) {
  const id = `${name}-${value}`.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex items-center gap-3">
      <input id={id} type="radio" name={name} value={value} className="h-4 w-4" required />
      <label htmlFor={id} className="text-sm text-neutral-200">
        {label}
      </label>
    </div>
  )
}

const legendClassName = 'text-sm font-medium text-neutral-200'

const inputClassName = clsx(
  'block w-full rounded-md border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100',
  'placeholder:text-neutral-600 focus:border-neutral-400 focus:outline-none',
)

const textareaClassName = clsx(
  'block w-full rounded-md border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100',
  'placeholder:text-neutral-600 focus:border-neutral-400 focus:outline-none',
)
