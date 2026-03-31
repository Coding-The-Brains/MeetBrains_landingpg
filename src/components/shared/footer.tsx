import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-xs text-muted-foreground">
            &copy; 2026 MeetAlly. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Contact", href: "mailto:hello@meetally.ai" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
