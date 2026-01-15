'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from '@/components/Button'
import clsx from 'clsx'

const APOLLO_APP_ID = '69649cd57062f40011499d39'
const APOLLO_SCHEDULING_LINK = 'uoj-9sa-bd1'
const APOLLO_SCRIPT_SRC = 'https://assets.apollo.io/js/meetings/meetings-widget.js'

// Stable ID so Apollo can always find the exact form
const FORM_ID = 'apollo-consultation-form'

export default function ApolloSlideover({ open, onClose }) {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const initializedRef = useRef(false)

  // Reset UI each time panel opens
  useEffect(() => {
    if (!open) return
    setSubmitting(false)
    setError('')
  }, [open])

  // Initialize Apollo when the script is ready
  useEffect(() => {
    if (!scriptLoaded) return
    if (initializedRef.current) return
    if (!window.ApolloMeetings?.initWidget) return

    try {
      window.ApolloMeetings.initWidget({
        appId: APOLLO_APP_ID,
        schedulingLink: APOLLO_SCHEDULING_LINK,
      })
      initializedRef.current = true
      console.log('[Apollo] initWidget OK')
    } catch (e) {
      console.error('[Apollo] initWidget failed', e)
      setError('Scheduler failed to initialize. Please refresh and try again.')
    }
  }, [scriptLoaded])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const formEl = document.getElementById(FORM_ID)
    if (!formEl) {
      setError('Form not found. Please refresh and try again.')
      return
    }

    // Native validation
    if (!formEl.checkValidity()) {
      formEl.reportValidity()
      return
    }

    if (!scriptLoaded || !window.ApolloMeetings?.submit) {
      setError('Scheduler is still loading. Please try again in a moment.')
      return
    }

    setSubmitting(true)

    try {
      console.log('[Apollo] submit', { formId: FORM_ID })

      // Apollo captures inputs by `name=""` from this form
      window.ApolloMeetings.submit({ formId: FORM_ID })

      // ✅ CRITICAL: close slideover so Apollo overlay isn't hidden/blocked by Dialog/backdrop
      setTimeout(() => {
        onClose?.()
      }, 50)
    } catch (err) {
      console.error('[Apollo] submit failed', err)
      setError('Could not launch the scheduler. Please try again.')
      setSubmitting(false)
      return
    }

    // stop spinner quickly; Apollo UI takes over
    setTimeout(() => setSubmitting(false), 800)
  }

  return (
    <>
      <Script
        id="apollo-meetings-widget"
        src={APOLLO_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('[Apollo] meetings-widget.js loaded')
          setScriptLoaded(true)
        }}
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

                      <div className="flex-1 overflow-auto px-6 py-6">
                        <form id={FORM_ID} onSubmit={handleSubmit} className="space-y-8" noValidate>
                          <Field label="Email" required>
                            <input
                              type="email"
                              name="email"
                              required
                              className={inputClassName}
                              autoComplete="email"
                            />
                          </Field>

                          <Field label="Full name" required>
                            <input
                              type="text"
                              name="name"
                              required
                              className={inputClassName}
                              autoComplete="name"
                            />
                          </Field>

                          <fieldset className="space-y-3">
                            <legend className={legendClassName}>Meeting Type</legend>
                            <RadioRow
                              name="meetingtype"
                              value="Microsoft Teams"
                              label="Microsoft Teams"
                              defaultChecked
                            />
                            <RadioRow
                              name="meetingtype"
                              value="Phone Call"
                              label="Phone Call"
                            />
                          </fieldset>

                          <fieldset className="space-y-3">
                            <legend className={legendClassName}>Client Type</legend>
                            <RadioRow
                              name="clienttype"
                              value="Government"
                              label="Government"
                              defaultChecked
                            />
                            <RadioRow name="clienttype" value="Corporation" label="Corporation" />
                            <RadioRow name="clienttype" value="Law Firm" label="Law Firm" />
                            <RadioRow
                              name="clienttype"
                              value="Insurance Company"
                              label="Insurance Company"
                            />
                            <RadioRow name="clienttype" value="Individual" label="Individual" />
                          </fieldset>

                          <Field label="Please share anything that will help prepare for our meeting. (Optional)">
                            <textarea name="description" rows={5} className={textareaClassName} />
                          </Field>

                          <Field label="Send text messages to (Optional)">
                            <input
                              type="tel"
                              name="phone"
                              className={inputClassName}
                              autoComplete="tel"
                            />
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

function RadioRow({ name, value, label, defaultChecked = false }) {
  const id = `${name}-${value}`.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex items-center gap-3">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="h-4 w-4"
        required
        defaultChecked={defaultChecked}
      />
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
