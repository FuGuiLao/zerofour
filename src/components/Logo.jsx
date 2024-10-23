import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 2083 2083" aria-hidden="true" {...props}>
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
        <style>
        {
          "\n\xA0\xA0\xA0\xA0\xA0 .cls-1 {\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 stroke-dasharray: 2.01 2.01;\n\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 fill: none;\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 stroke: #727272;\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 stroke-miterlimit: 10;\n\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-2 {\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 stroke-dasharray: 1.99 1.99;\n\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-3 {\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 stroke-dasharray: 2 2;\n\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-4 {\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 stroke-dasharray: 2 2;\n\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-5 {\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 stroke-dasharray: 2 2;\n\xA0\xA0\xA0\xA0\xA0 }\n\xA0\n\xA0\xA0\xA0\xA0\xA0 .cls-7 {\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0 opacity: .5;\n\xA0\xA0\xA0\xA0\xA0 }\n\xA0\xA0\xA0 "
        }
      </style>
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
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
      />
    </svg>
  )
}
