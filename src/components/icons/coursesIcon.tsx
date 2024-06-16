interface CoursesIconProps extends React.SVGProps<SVGSVGElement> {}

export function CoursesIcon(props: CoursesIconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_253_628)">
        <mask
          id="a"
          style={{
            maskType: 'alpha',
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={25}
          height={24}
        >
          <path fill="currentColor" d="M0.076416 0H24.076416V24H0.076416z" />
        </mask>
        <g mask="url(#a)">
          <path
            d="M3.076 21V11h2v8h14V5h-8V3h10v18h-18zm0-12V7h2v2h-2zm0-4V3h2v2h-2zm4 8v-2h2v2h-2zm0-8V3h2v2h-2zm4 8v-2h2v2h-2zm0-4V7h2v2h-2z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_253_628">
          <path fill="currentColor" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
