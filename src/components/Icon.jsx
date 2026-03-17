const iconPaths = {
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M6.7 3.2h2.9l1.4 4.1-1.8 1.8a15 15 0 0 0 5 5l1.8-1.8 4.1 1.4v2.9c0 1.1-.9 2-2 2A17 17 0 0 1 5 5.2c0-1.1.9-2 1.7-2Z" />
  ),
  location: (
    <>
      <path d="M12 21s-6-4.9-6-10a6 6 0 1 1 12 0c0 5.1-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </>
  ),
  github: (
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8.1 2.4-.2.1-.7.4-1.2.7-1.5-2.3-.2-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.7-.1-.2-.5-1.2.1-2.5 0 0 .9-.3 2.9 1.1a10.3 10.3 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.3.2 2.3.1 2.5.7.7 1.1 1.6 1.1 2.7 0 3.9-2.4 4.8-4.7 5 .4.3.8 1 .8 2.1v3.1c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
  ),
  linkedin: (
    <>
      <path d="M7 8.5v9" />
      <path d="M7 5.5h.01" />
      <path d="M12 17.5v-5a2.5 2.5 0 0 1 5 0v5" />
      <path d="M12 12.5v-4" />
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
    </>
  ),
  external: (
    <>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </>
  ),
  arrowUp: (
    <>
      <path d="m12 19 0-14" />
      <path d="m7 10 5-5 5 5" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 19h14" />
    </>
  ),
}

function Icon({ name, className = 'icon' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  )
}

export default Icon
