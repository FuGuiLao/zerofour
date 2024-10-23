import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 472.19 518.19" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
<g>
      <g className="cls-7">
        <rect x={350.91} y={363.61} width={26.15} height={98.04} />
      </g>
      <g>
        <polygon points="292.01 363.62 350.9 363.62 350.9 461.65 25.57 461.65 122.52 247.75 124.6 243.13 166.69 150.28 29.99 150.28 29.99 52.25 296.57 52.25 252.4 149.72 252.15 150.28 210.07 243.13 207.97 247.75 165.64 341.16 155.31 363.62 155.46 363.62 155.46 363.61 180.11 363.61 180.09 363.62 267.37 363.62 267.37 363.61 292.02 363.61 292.01 363.62" />
        <polygon points="450.2 243.13 450.2 461.65 377.05 461.65 377.05 363.61 377.01 363.61 377.01 341.16 190.27 341.16 232.62 247.75 234.7 243.13 276.79 150.28 277.05 149.72 321.23 52.25 408.59 52.25 405.52 58.8 364.31 149.72 364.07 150.28 321.98 243.13 450.2 243.13" />
      </g>
    </g>
    <g>
      <g>
        <line className="cls-6" x1={3.83} y1={51.98} x2={4.83} y2={51.98} />
        <line className="cls-5" x1={6.83} y1={51.98} x2={470.19} y2={51.98} />
        <line className="cls-6" x1={471.19} y1={51.98} x2={472.19} y2={51.98} />
      </g>
      <g>
        <line className="cls-6" x1={3.83} y1={150.04} x2={4.83} y2={150.04} />
        <line className="cls-5" x1={6.83} y1={150.04} x2={470.19} y2={150.04} />
        <line
          className="cls-6"
          x1={471.19}
          y1={150.04}
          x2={472.19}
          y2={150.04}
        />
      </g>
      <g>
        <line className="cls-6" x1={3.83} y1={243.68} x2={4.83} y2={243.68} />
        <line className="cls-5" x1={6.83} y1={243.68} x2={470.19} y2={243.68} />
        <line
          className="cls-6"
          x1={471.19}
          y1={243.68}
          x2={472.19}
          y2={243.68}
        />
      </g>
      <g>
        <line className="cls-6" x1={3.83} y1={341.07} x2={4.83} y2={341.07} />
        <line className="cls-5" x1={6.83} y1={341.07} x2={470.19} y2={341.07} />
        <line
          className="cls-6"
          x1={471.19}
          y1={341.07}
          x2={472.19}
          y2={341.07}
        />
      </g>
      <g>
        <line className="cls-6" x1={3.83} y1={363.62} x2={4.83} y2={363.62} />
        <line className="cls-5" x1={6.83} y1={363.62} x2={470.19} y2={363.62} />
        <line
          className="cls-6"
          x1={471.19}
          y1={363.62}
          x2={472.19}
          y2={363.62}
        />
      </g>
      <g>
        <line className="cls-6" x1={3.83} y1={461.62} x2={4.83} y2={461.62} />
        <line className="cls-5" x1={6.83} y1={461.62} x2={470.19} y2={461.62} />
        <line
          className="cls-6"
          x1={471.19}
          y1={461.62}
          x2={472.19}
          y2={461.62}
        />
      </g>
      <g>
        <line className="cls-6" x1={29.77} y1={12.58} x2={29.77} y2={13.58} />
        <line className="cls-2" x1={29.77} y1={15.57} x2={29.77} y2={193.86} />
        <line className="cls-6" x1={29.77} y1={194.86} x2={29.77} y2={195.86} />
      </g>
      <g>
        <line
          className="cls-6"
          x1={377.09}
          y1={204.57}
          x2={377.09}
          y2={205.57}
        />
        <line
          className="cls-1"
          x1={377.09}
          y1={207.57}
          x2={377.09}
          y2={503.6}
        />
        <line
          className="cls-6"
          x1={377.09}
          y1={504.61}
          x2={377.09}
          y2={505.61}
        />
      </g>
      <g>
        <line
          className="cls-6"
          x1={450.34}
          y1={204.57}
          x2={450.34}
          y2={205.57}
        />
        <line
          className="cls-1"
          x1={450.34}
          y1={207.57}
          x2={450.34}
          y2={503.6}
        />
        <line
          className="cls-6"
          x1={450.34}
          y1={504.61}
          x2={450.34}
          y2={505.61}
        />
      </g>
      <g>
        <line x1={234.6} y1={0.21} x2={0.46} y2={517.98} />
        <g>
          <line className="cls-6" x1={234.6} y1={0.21} x2={234.18} y2={1.12} />
          <line className="cls-4" x1={233.36} y1={2.94} x2={1.28} y2={516.16} />
          <line className="cls-6" x1={0.87} y1={517.07} x2={0.46} y2={517.98} />
        </g>
      </g>
      <g>
        <line x1={320.36} y1={0.21} x2={86.22} y2={517.98} />
        <g>
          <line className="cls-6" x1={320.36} y1={0.21} x2={319.95} y2={1.12} />
          <line
            className="cls-4"
            x1={319.12}
            y1={2.94}
            x2={87.04}
            y2={516.16}
          />
          <line
            className="cls-6"
            x1={86.63}
            y1={517.07}
            x2={86.22}
            y2={517.98}
          />
        </g>
      </g>
      <g>
        <line x1={344.98} y1={0.21} x2={110.84} y2={517.98} />
        <g>
          <line className="cls-6" x1={344.98} y1={0.21} x2={344.57} y2={1.12} />
          <line
            className="cls-4"
            x1={343.75}
            y1={2.94}
            x2={111.67}
            y2={516.16}
          />
          <line
            className="cls-6"
            x1={111.26}
            y1={517.07}
            x2={110.84}
            y2={517.98}
          />
        </g>
      </g>
      <g>
        <line x1={432.02} y1={0.21} x2={197.88} y2={517.98} />
        <g>
          <line className="cls-6" x1={432.02} y1={0.21} x2={431.61} y2={1.12} />
          <line
            className="cls-3"
            x1={430.79}
            y1={2.94}
            x2={198.71}
            y2={516.16}
          />
          <line
            className="cls-6"
            x1={198.3}
            y1={517.07}
            x2={197.88}
            y2={517.98}
          />
        </g>
      </g>
    </g>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <defs>
      <style>
        {
          "\u2028\xA0\xA0\xA0\xA0\xA0 .cls-1 {\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 letter-spacing: 0em;\u2028\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-2 {\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 fill: #231f20;\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 font-family: MonaSans-Medium, 'Mona Sans';\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 font-size: 100px;\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 font-variation-settings: 'wdth' 100, 'wght' 500, 'slnt' 0;\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 font-weight: 500;\u2028\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-3 {\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 letter-spacing: -.12em;\u2028\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-4 {\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 letter-spacing: -.01em;\u2028\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-5 {\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 letter-spacing: -.02em;\u2028\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-6 {\u2028\xA0\xA0\xA0\xA0\xA0\xA0\xA0 letter-spacing: 0em;\u2028\xA0\xA0\xA0\xA0\xA0 }\u2028\xA0\xA0\xA0 "
        }
      </style>
    </defs>
    <text className="cls-2" transform="translate(0 86.45) scale(1.25 1)">
      <tspan className="cls-6" x={0} y={0}>
        {"Z"}
      </tspan>
      <tspan x={63.4} y={0}>
        {"e"}
      </tspan>
      <tspan className="cls-5" x={118.3} y={0}>
        {"r"}
      </tspan>
      <tspan x={154.3} y={0}>
        {"o"}
      </tspan>
      <tspan className="cls-4" x={213.2} y={0}>
        {"f"}
      </tspan>
      <tspan className="cls-1" x={243.7} y={0}>
        {"ou"}
      </tspan>
      <tspan className="cls-3" x={363.6} y={0}>
        {"r"}
      </tspan>
      <tspan className="cls-1" x={389.5} y={0}>
        {"."}
      </tspan>
    </text>
    </svg>
  )
}
