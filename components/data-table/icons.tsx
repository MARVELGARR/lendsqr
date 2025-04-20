export function SortIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.22222 8L4 5.77778L1.77778 8M4 5.77778L4 14"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.77778 8L12 10.2222L14.2222 8M12 10.2222L12 2"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        fill="#545F7D"
      />
      <path
        d="M8 3C9.10457 3 10 2.10457 10 1C10 -0.104569 9.10457 -1 8 -1C6.89543 -1 6 -0.104569 6 1C6 2.10457 6.89543 3 8 3Z"
        fill="#545F7D"
      />
      <path
        d="M8 17C9.10457 17 10 16.1046 10 15C10 13.8954 9.10457 13 8 13C6.89543 13 6 13.8954 6 15C6 16.1046 6.89543 17 8 17Z"
        fill="#545F7D"
      />
    </svg>
  )
}

export function ViewIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 13.1667C11.4444 13.1667 14.3333 8 14.3333 8C14.3333 8 11.4444 2.83333 8 2.83333C4.55556 2.83333 1.66667 8 1.66667 8C1.66667 8 4.55556 13.1667 8 13.1667Z"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BlacklistIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 1C4.13333 1 1 4.13333 1 8C1 11.8667 4.13333 15 8 15C11.8667 15 15 11.8667 15 8C15 4.13333 11.8667 1 8 1Z"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.66667 3.66667L12.3333 12.3333"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ActivateIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 8L7 10L11 6" stroke="#545F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 6L8 10L12 6" stroke="#545F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.3333 2.5H2.66667C2.29848 2.5 2 2.79848 2 3.16667V13.8333C2 14.2015 2.29848 14.5 2.66667 14.5H13.3333C13.7015 14.5 14 14.2015 14 13.8333V3.16667C14 2.79848 13.7015 2.5 13.3333 2.5Z"
        stroke="#545F7D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 1.5V3.5" stroke="#545F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 1.5V3.5" stroke="#545F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 5.5H14" stroke="#545F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
