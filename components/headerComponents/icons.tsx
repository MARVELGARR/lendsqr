export function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 12.5C9.53757 12.5 12 10.0376 12 7C12 3.96243 9.53757 1.5 6.5 1.5C3.46243 1.5 1 3.96243 1 7C1 10.0376 3.46243 12.5 6.5 12.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11.5L15 15.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0746 10.8304C16.0746 12.8004 16.9346 14.6704 18.4146 15.9604C18.5046 16.0404 18.5746 16.1504 18.6046 16.2704C18.6346 16.3904 18.6246 16.5204 18.5846 16.6404C18.5346 16.7704 18.4446 16.8804 18.3246 16.9504C18.2046 17.0204 18.0646 17.0504 17.9246 17.0404H2.07457C1.92457 17.0504 1.78457 17.0204 1.66457 16.9504C1.54457 16.8804 1.45457 16.7704 1.40457 16.6404C1.36457 16.5204 1.35457 16.3904 1.38457 16.2704C1.41457 16.1504 1.48457 16.0404 1.58457 15.9604C3.05457 14.6704 3.92457 12.8004 3.92457 10.8304V7.03043C3.92457 3.01043 7.17457 -0.129566 11.0046 0.00043309C14.5346 0.120433 17.4246 3.10043 17.4246 6.78043V10.8304H16.0746ZM10.0046 21.5004C10.7346 21.5004 11.4246 21.1704 11.8446 20.6004C12.2646 20.0304 12.3546 19.2904 12.0846 18.6404H7.91457C7.64457 19.2904 7.73457 20.0304 8.15457 20.6004C8.57457 21.1704 9.27457 21.5004 10.0046 21.5004Z"
        stroke="#213F7D"
        strokeWidth="1"
        fill=""
      />
    </svg>
  );
}

export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.41 0.590027L6 5.17003L10.59 0.590027L12 2.00003L6 8.00003L0 2.00003L1.41 0.590027Z"
        fill="#213F7D"
      />
    </svg>
  );
}
