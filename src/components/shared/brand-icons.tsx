// Verified brand SVGs from Simple Icons / official sources
// Used for platform logos and integration icons

export function ZoomIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      aria-label="Zoom"
      role="img"
    >
      <defs>
        <linearGradient id="zoom-grad" x1="23.666%" x2="76.334%" y1="95.612%" y2="4.388%">
          <stop offset="0%" stopColor="#0845BF" />
          <stop offset="50%" stopColor="#0B5CFF" />
          <stop offset="100%" stopColor="#4F90EE" />
        </linearGradient>
      </defs>
      <path
        fill="url(#zoom-grad)"
        d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"
      />
      <path
        fill="#FFF"
        d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"
      />
    </svg>
  );
}

export function GoogleMeetIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 87.5 72"
      className={className}
      aria-label="Google Meet"
      role="img"
    >
      <path fill="#00832d" d="M49.5 36 36 22.5v27z" />
      <path fill="#0066da" d="M0 51.5V63c0 2.76 2.24 5 5 5h11.5l3-10.3-3-6.2H0z" />
      <path fill="#e94235" d="M16.5 0 0 16.5l8.5 3 8-3 2.3-8z" />
      <path fill="#2684fc" d="M16.5 16.5H0v35h16.5z" />
      <path fill="#00ac47" d="M82.6 8.68 69 19.42V52.6l13.69 10.72A5 5 0 0 0 87.5 59V13A5 5 0 0 0 82.6 8.68z" />
      <path fill="#00832d" d="M69 36v16.6l-19.5-16.6 19.5-16.6z" />
      <path fill="#ffba00" d="M16.5 0h35L55 16.5H16.5z" />
      <path fill="#00ac47" d="M51.5 16.5H16.5V51.5H55V20z" />
      <path fill="#0066da" d="M55 51.5H16.5V68h35a5 5 0 0 0 5-5V55z" />
    </svg>
  );
}

export function MicrosoftTeamsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4 4 36 38"
      className={className}
      aria-label="Microsoft Teams"
      role="img"
    >
      <defs>
        <radialGradient id="teams-a" cx="0" cy="0" r="1" gradientTransform="matrix(13.4784 0 0 33.2694 39.797 22.174)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A98AFF" />
          <stop offset=".565" stopColor="#5F50E2" />
          <stop offset=".9" stopColor="#3C2CB8" />
        </radialGradient>
        <radialGradient id="teams-b" cx="0" cy="0" r="1" gradientTransform="matrix(12.1875 30.4 -30.744 12.326 8.812 16.4)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#85C2FF" />
          <stop offset=".69" stopColor="#7588FF" />
          <stop offset="1" stopColor="#6459FE" />
        </radialGradient>
        <radialGradient id="teams-h" cx="0" cy="0" r="1" gradientTransform="matrix(0 -12 15.146 0 18 8.286)" gradientUnits="userSpaceOnUse">
          <stop offset=".268" stopColor="#8282FF" />
          <stop offset="1" stopColor="#3923B1" />
        </radialGradient>
        <radialGradient id="teams-k" cx="0" cy="0" r="1" gradientTransform="rotate(45 -25.763 16.328) scale(22.6274)" gradientUnits="userSpaceOnUse">
          <stop offset=".047" stopColor="#688EFF" />
          <stop offset=".947" stopColor="#230F94" />
        </radialGradient>
      </defs>
      <path fill="url(#teams-a)" d="M22 20h12a6 6 0 0 1 6 6v10a6 6 0 0 1-12 0V26a6 6 0 0 0-6-6Z" />
      <path fill="url(#teams-b)" d="M8 24a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6H18c-5.523 0-10-4.477-10-10v-8Z" />
      <circle fill="url(#teams-h)" cx="18" cy="10" r="6" />
      <rect fill="url(#teams-k)" x="4" y="23" width="16" height="16" rx="3.25" />
      <path fill="#fff" d="M15.48 28.1h-2.45v7.47H10.97V28.1H8.52V26.43h6.96z" />
    </svg>
  );
}

export function SlackIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2447.6 2452.5"
      className={className}
      aria-label="Slack"
      role="img"
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3zm0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0" />
        <path d="M2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d" />
        <path d="M1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e" />
        <path d="M0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1z" fill="#e01e5a" />
      </g>
    </svg>
  );
}

export function NotionIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 268"
      className={className}
      aria-label="Notion"
      role="img"
    >
      <path fill="#FFF" d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z" />
      <path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z" />
    </svg>
  );
}

export function JiraIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      aria-label="Jira"
      role="img"
    >
      <defs>
        <linearGradient id="jira-a" x1="98.031%" x2="58.888%" y1=".222%" y2="40.412%">
          <stop offset="18%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#2684FF" />
        </linearGradient>
        <linearGradient id="jira-b" x1="1.969%" x2="41.112%" y1="99.778%" y2="59.588%">
          <stop offset="18%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#2684FF" />
        </linearGradient>
      </defs>
      <path fill="#2684FF" d="M244.658 0H121.707a61.341 61.341 0 0 0 61.342 61.342h25.038v24.109a61.341 61.341 0 0 0 61.342 61.341V11.341A11.342 11.342 0 0 0 244.658 0Z" />
      <path fill="url(#jira-a)" d="M183.822 61.277H60.871a61.341 61.341 0 0 0 61.342 61.342h25.038v24.109a61.341 61.341 0 0 0 61.342 61.341V72.618a11.342 11.342 0 0 0-4.771-11.34Z" />
      <path fill="url(#jira-b)" d="M122.987 122.554H0a61.341 61.341 0 0 0 61.341 61.341h25.039v24.11A61.341 61.341 0 0 0 147.72 269.34V133.895a11.342 11.342 0 0 0-24.732-11.341Z" />
    </svg>
  );
}
