export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 cursor-pointer group ${className ?? ""}`}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-teal flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
        {/* Bot/AI meeting icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
          aria-hidden="true"
        >
          <rect x="3" y="8" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <circle cx="9" cy="14" r="1.5" fill="currentColor" />
          <circle cx="15" cy="14" r="1.5" fill="currentColor" />
          <path d="M9 11V8a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 3v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 21v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M17 21v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-lg font-bold tracking-tight text-foreground">
        MeetAlly
      </span>
    </a>
  );
}
