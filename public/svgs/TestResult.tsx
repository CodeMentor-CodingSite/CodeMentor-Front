export default function IconTestResult({ opacity }: { opacity: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V7.50002C18.3334 3.33335 16.6667 1.66669 12.5001 1.66669H7.50008C3.33341 1.66669 1.66675 3.33335 1.66675 7.50002V12.5C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z"
        stroke="#29C244"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity ? '0.5' : 'none'}
      />
      <path
        d="M8.82495 11.1167H12.3583V7.58337"
        stroke="#29C244"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity ? '0.5' : 'none'}
      />
      <path
        d="M12.3583 11.1167L7.6416 6.40002"
        stroke="#29C244"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity ? '0.5' : 'none'}
      />
      <path
        d="M5 13.7583C8.24167 14.8416 11.7583 14.8416 15 13.7583"
        stroke="#29C244"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity ? '0.5' : 'none'}
      />
    </svg>
  );
}
