interface AnalyticsIconProps extends React.SVGProps<SVGSVGElement> {}

export function AnalyticsIcon(props: AnalyticsIconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_253_527)">
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
            d="M2.701 18.175L1.076 17l5-8 3 3.5 4-6.5 2.725 4.075a6.36 6.36 0 00-1.087.138c-.342.075-.68.179-1.013.312l-.55-.825-3.8 6.175-3.025-3.525-3.625 5.825zM21.651 23l-3.125-3.125a3.695 3.695 0 01-1.112.525c-.408.117-.83.175-1.263.175-1.25 0-2.312-.438-3.187-1.313s-1.313-1.937-1.313-3.187c0-1.25.438-2.313 1.313-3.188s1.937-1.312 3.187-1.312c1.25 0 2.313.438 3.188 1.313.875.874 1.312 1.937 1.312 3.187 0 .433-.058.854-.175 1.262a4.04 4.04 0 01-.525 1.138l3.125 3.1L21.651 23zm-5.5-4.425c.7 0 1.292-.242 1.775-.725.484-.483.725-1.075.725-1.775s-.241-1.292-.725-1.775c-.483-.483-1.075-.725-1.775-.725s-1.291.242-1.775.725c-.483.483-.725 1.075-.725 1.775s.242 1.292.725 1.775c.484.483 1.075.725 1.775.725zm2.225-8a6.524 6.524 0 00-.987-.325 5.54 5.54 0 00-1.063-.15L21.451 2l1.625 1.175-4.7 7.4z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_253_527">
          <path fill="currentColor" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
