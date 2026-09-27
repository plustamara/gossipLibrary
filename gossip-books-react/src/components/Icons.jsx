// Simple, consistent line icons (no emoji) — each takes a `size` prop, defaults to 22.
// Using currentColor so they inherit whatever color their container sets.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function BookIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M4 19.5V5.5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 1-2-1.5Z" />
      <path d="M20 19.5V5.5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 0 2-1.5Z" />
    </svg>
  );
}

export function GiftIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="4" y="9" width="16" height="11" rx="1.2" />
      <path d="M4 9h16v3.5H4z" />
      <path d="M12 9v11" />
      <path d="M12 9C10.5 6 7 5.5 7 7.5S9.5 9 12 9Z" />
      <path d="M12 9c1.5-3 5-3.5 5-1.5S14.5 9 12 9Z" />
    </svg>
  );
}

export function CoffeeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10.5h1.5a2 2 0 0 1 0 4H16" />
      <path d="M8 5.5c-.6.6-.6 1.4 0 2" />
      <path d="M11.5 5.5c-.6.6-.6 1.4 0 2" />
    </svg>
  );
}

export function BookmarkIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M6 4h12v16l-6-4-6 4V4Z" />
    </svg>
  );
}

export function PaletteIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 3a9 6.5 0 0 0 0 13c1.1 0 1.2-1.3.5-2s.1-2 1.3-2H15a4 4 0 0 0 4-4c0-2.8-3.1-5-7-5Z" />
      <circle cx="8.2" cy="10.2" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="10.8" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14" cy="8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SparkleIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}

export function MoonIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function LetterIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.2" />
      <path d="M4 6.5 12 13l8-6.5" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M6 3.5h3l1.5 4L8.5 9a10 10 0 0 0 6.5 6.5l1.5-2 4 1.5v3c0 1-.9 1.7-1.9 1.5C10.6 18.5 5.5 13.4 4.5 5.9 4.3 4.9 5 4 6 3.5Z" />
    </svg>
  );
}

export function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.2" />
      <path d="M4 6.5 12 13l8-6.5" />
    </svg>
  );
}

export function MenuIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
