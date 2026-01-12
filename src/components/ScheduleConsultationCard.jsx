'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import CalendlySlideover from '@/components/CalendlySlideover'

// ✅ Change text ONCE here
const DEFAULT_COPY = {
  title: 'Begin With Intelligence',
  description: 'Speak with our team to discuss your risk profile, operational objectives, and environmental challenges. We’ll take the time to understand your requirements, assess potential threats, and outline how Zerofour’s services can be structured to support your mission effectively and discreetly.',
  buttonText: 'Schedule a Consultation',
}

export default function ScheduleConsultationCard({
  // ✅ Optional overrides if you ever need them, but you usually won’t pass these now
  title = DEFAULT_COPY.title,
  description = DEFAULT_COPY.description,
  buttonText = DEFAULT_COPY.buttonText,

  // Behavior hooks (optional)
  onOpen,
  onClose,

  // Layout styling
  framed = false,
  frameClassName = '',
  contentClassName = '',
  titleClassName = '',
  descriptionClassName = '',

  // Button styling
  buttonColor,
  buttonInvert = false,
  buttonClassName = '',
}) {
  const [open, setOpen] = useState(false)

  const Content = (
    <div className={clsx(contentClassName)}>
      <h3 className={clsx('font-display text-base font-semibold', titleClassName)}>
        {title}
      </h3>

      <p className={clsx('mt-6 text-base', descriptionClassName)}>
        {description}
      </p>
    </div>
  )

  return (
    <>
      {framed ? (
        <div>
          <div
            className={clsx(
              'rounded-2xl border border-neutral-300 bg-transparent px-6 py-12',
              frameClassName,
            )}
          >
            {Content}
          </div>

          <div className="mt-12">
            <Button
              type="button"
              color={buttonColor}
              invert={buttonInvert}
              className={buttonClassName}
              onClick={() => {
                onOpen?.()
                setOpen(true)
              }}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {Content}

          <div className="mt-6">
            <Button
              type="button"
              color={buttonColor}
              invert={buttonInvert}
              className={buttonClassName}
              onClick={() => {
                onOpen?.()
                setOpen(true)
              }}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      )}

      <CalendlySlideover
        open={open}
        onClose={() => {
          onClose?.()
          setOpen(false)
        }}
      />
    </>
  )
}
