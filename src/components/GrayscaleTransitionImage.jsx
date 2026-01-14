'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'

const MotionImage = motion(Image)

export function GrayscaleTransitionImage({ className = '', style, ...props }) {
  let ref = useRef(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  })

  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  let filter = useMotionTemplate`grayscale(${grayscale})`

  return (
    <div ref={ref} className="group relative">
      <MotionImage
        alt=""
        className={className}
        style={{ ...style, filter }}
        {...props}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <Image
          alt=""
          className={className.replace(/\b(grayscale|filter)\b/g, '')}
          style={{ ...style, filter: 'none' }}
          {...props}
        />
      </div>
    </div>
  )
}
