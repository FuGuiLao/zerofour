import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Washington DC" invert={invert}>
          1441 L Street NW 10th Floor
          <br />
          Washington, DC 20005
          <br />
          (202) 539-1010
        </Office>
      </li>
      <li>
        <Office name="Los Angeles" invert={invert}>
          515 S. Flower Street 18th Floor
          <br />
          Los Angeles, CA 90071
          <br />
          (213) 634-4114
        </Office>
      </li>
      <li>
        <Office name="New York" invert={invert}>
          287 Park Avenue South 2nd Floor
          <br />
          New York, NY 10010
          <br />
          (212) 585-3912
        </Office>
      </li>
<li>
        <Office name="Shanghai" invert={invert}>
          29/F Shanghai Tower
          <br />
          No. 501 Middle Yincheng Road
          <br />
          Pudong, Shanghai, 200120, China
        </Office>
      </li>
    </ul>
  )
}
