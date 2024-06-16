interface LadderIconProps extends React.SVGProps<SVGSVGElement> {}

export function LadderIcon(props: LadderIconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_253_728)">
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
            d="M6.026 21a.872.872 0 01-.75-.387.945.945 0 01-.15-.838L9.576 3.7a.98.98 0 01.35-.513.933.933 0 01.575-.187c.334 0 .592.13.776.388a.945.945 0 01.15.837L10.927 6h5.625l.625-2.3a.955.955 0 01.362-.513.987.987 0 01.587-.187c.317 0 .567.13.75.388a.945.945 0 01.15.837L14.576 20.3a.981.981 0 01-.35.512.933.933 0 01-.575.188c-.333 0-.591-.13-.774-.387a.944.944 0 01-.15-.838l.5-1.775H7.6l-.625 2.3a.955.955 0 01-.362.512.987.987 0 01-.588.188zm3.525-10h5.6l.825-3h-5.6l-.825 3zm-1.375 5h5.6l.825-3h-5.6l-.825 3z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_253_728">
          <path fill="currentColor" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
